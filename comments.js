//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const Post = require('./models/post');
const seedDB = require('./seeds');

// seedDB();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/yelp_camp_v3', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//Landing page
app.get('/', (req, res) => {
    res.render('landing');
});

//INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
    //get all campgrounds from DB
    Post.find({}, (err, allPosts) => {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds/index', { posts: allPosts });
        }
    });
});
