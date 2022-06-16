const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const mongoose = require('../models/connection')
const User = require('../models/users')
const Card = require('../models/cards')
const CardCollection = require('../models/collections')
// This is the signup route for users.
router.get('/signup', (req, res) => {
    res.render("users/signup.liquid");
  });

router.post("/signup", async (req, res) => {
    // encrypt password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
    // Creat User
    User.create(req.body)
    .then((user) => {
        // redirect to login page
        res.redirect("/users/login")
    })
  });

// Using this to add a card to the users Card Collection
router.post('/:cardid/add', (req, res) => {
  username = req.session.username
    CardCollection.findById(req.body.collection)
  .then(foundCollection => {
    foundCollection.cards.push(req.params.cardid)
    foundCollection.save()
    res.redirect('/users/myCollections')
  })
  // })

    })


router.get('/login', (req, res) => {
    res.render('users/login.liquid')
})

router.post("/login", async (req, res) => {
    // Get the data from the request body
    const { username, password } = req.body
    // Search for the user
    User.findOne({ username })
    .then(async (user) => {
        if (user) {
            // compare password
            const result = await bcrypt.compare(password, user.password);
            if (result) {
              //store some properties in the session object
              req.session.username = username
              req.session.loggedIn = true
              
              // redirect to fruits page if successful
              res.redirect("/index");
            } else {
              // error if password doesn't match
              res.json({ error: "password doesn't match" });
            }
          } else {
            // send error if user doesn't exist
            res.json({ error: "user doesn't exist" });
          }
        })
        .catch((error) => {
          // send error as json
          console.log(error);
          res.json({ error });
        });
  });

  router.post('/myCollections', async (req, res) => {
    let userc = req.session.username
     if (req.body.newCollection !== null) {
       req.body.username = userc
       CardCollection.create(req.body)
       .then(newCollection => {
         User.findOne({username: userc})
         .then((testUser) => {
           testUser.cardCollection.push(newCollection._id)
           // new card collection id
           testUser.save()
             res.redirect('/users/myCollections')
         })

       })
    //  console.log(testUser[0])
    // })
    // // console.log(userCollection)
    // // User.cardCollection.create(req.body)
    // //   .then((user) => {
    // //   })
    // //   // currentUser.cardCollection.push(req.body)
    // //   // console.log(currentUser.cardCollection)
      }
    })

  router.get("/logout", (req, res) => {
    // destroy session and redirect to main page
    req.session.destroy((err) => {
      res.redirect("/index");
    });
  });

  router.get('/mycollections/:id', async (req, res) => {
    // res.render('users/collection.liquid')
    const username = req.session.username
    const collectsCards = await CardCollection.findById(req.params.id).populate('cards')
    const collectCards = collectsCards.cards
    console.log(collectsCards)
    res.render('users/collection.liquid', { collectCards, collectsCards, username })
    // // .then(collection => {
    // //   console.log(collection)
    // //   res.render('users/collection.liquid', { collection })
    // })
  })

  router.get('/myCollections', async (req, res) => {
    const username = req.session.username
    const testUser = await User.findOne({username: username}).populate('cardCollection')
    const userCollect = testUser.cardCollection
    res.render('users/collections.liquid', { username, testUser, userCollect })
  })
module.exports = router