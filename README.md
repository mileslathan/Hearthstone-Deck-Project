# Hearthstone-Deck-Project
A fullstack App that is designed for the user to view the Classic set of Cards, Explore its inventory by multiple properties and Create a list of faviorite cards!

SEI -5/9- ** Project Two **

Miles Lathan

![Banner IMG](/img/banner1.png)

## How to View


Head to [This Deployment](https://hearthstone-deck-project.herokuapp.com/index)


## APP Description
![DESC IMG](https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/t1/T186VQOQFRJN1622064439114.png)

This App, is designed to serve as a repository of information based on Blizzard Entertainment's card game titled Hearthstone. Using the app, users can search for a multitude of different cards data. Users that have registered can save popular cards to their 'collections' and use these collections to theorycraft their own personal decks.


## Inspiration
Back in 2014, I remember playing Hearthstone a lot while finishing my college education. The release of the game is very nostalgic and doing this project reminded me how fun it was!

## WIREFRAMES
![WIREFRAME IMG](/img/HSProjectWireFrame1.png)

## MY ERD
![ERD IMG](/img/HSProjectERD.png)

## Technologies Used
- HTML
- CSS
- Javascript
- Liquid
- MongoDB
- Mongoose
- Various node modules

## Exploring The App
On this site, users are seperated into three catagories: Admin, Registered User and Regular User.

**Admin's** can: Gain all functionality of site like a registered user, but can also create, edit and delete cards from database.

**Registered Users** can: View all card data and create their own personal 'Collections' of cards.

**Regular Users** can: Only view card data.

## Challenges
  
#### Database and Browser Timing Issues
Had a rough time with ensuring that the data being queried, was able to happen **before** the data is rendered to the page. While everything works as it should, I question the efficiency of the back-end being able to deliver to the front-end.

#### Data Embedding Issues
For this project, I tried to embed arrays of objects inside one another. This was proven to be extremely difficult to query and locate data. I had to completely re-work my models from embedding to a reference model for the scope of my project.


## Future Improvements

-**Improving UI/UX Design.** This incorporates better deisgn for users adding cards, display of data and more user interactivity.

-**Security Changes.** Invest in better technologies for both Authentication and Authorization. Improving my own personal education on web securitiy.

-**Added Functionality.** Adding a place for users to interact with each other through comments. Allow users to upvote their favorite decks. Create a rating algorithm to rate card collections and how they would fair being used.

## Things I Learned
- Planning out the use of technologies that are appropriate for the scope of the project.
- Introduction to website encrpytion and security.
- Designing authorization models.
- Carefully planning and constantly improving UX for users along with UX feedback.
- Limitations of certain technologies and how to leverage them to your advantage.
