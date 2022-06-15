const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const mongoose = require('../models/connection')
const User = require('../models/users')

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
    let testUser = await User.findOne({username: userc})
    testUser.cardCollection.push(req.body)
    testUser.save((err) => {
      res.redirect('/users/myCollections', { testUser })
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

  router.get('/mycollections/:id', (req, res) => {
    res.render('users/collection.liquid')
  })

  router.get('/myCollections', async (req, res) => {
    const username = req.session.username
    const testUser = await User.findOne({username: username})
    const userCollect = testUser.cardCollection
    res.render('users/collections.liquid', { username, testUser, userCollect })
  })
module.exports = router