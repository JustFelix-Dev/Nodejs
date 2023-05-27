const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

// connect to mongoDB
const dbURI = 'mongodb+srv://Noblefella:Ade1234ade@nodejs.i2xjxlr.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result)=> app.listen(3000))
.catch((err)=>{
    console.log(err.message);
})

// Register view Engine
app.set('view engine', 'ejs');

// app.listen(3000);

// middleware & static files
app.use(morgan('dev'));
app.use(express.urlencoded( {extended: true} ));
app.use(express.static('public'));

// mongoose and mongo sandbox routes
// app.get('/add-blog',( req,res )=>{
//      const blog = new Blog({
//         title : 'My second blog',
//         snippet : 'a new one ',
//         body : 'lorem ipsum sect atem consectetur'
//      })
//      blog.save()
//      .then((result)=>{
//         res.send(result)
//      }).catch((err)=>{
//         console.log(err.message);
//      })
// })

// app.get('/single-blog',( req,res )=>{
//     Blog.findById('64565fa7fc95408aa50d1654')
//     .then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err.message);
//      })
// })

// app.get('/all-blogs',( req,res )=>{
//        Blog.find()
//        .then((result)=>{
//         res.send(result)
//        }).catch((err)=>{
//         console.log(err.message)
//        })
// })


// routes
app.get('/',( req,res )=>{
        // res.send('<h1>Hello Felix!</h1>')
        // res.sendFile('./views/index.html', { root:__dirname})
        // const blogs = [
        //     {title: 'Yooshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
        //     {title: 'Mario finds stars', snippet: 'lorem ipsum dolor sit amet consectetur'},
        //     {title: 'How to defeat browsers', snippet: 'lorem ipsum dolor sit amet consectetur'},

        // ]
        // res.render('index', {title: 'Home', blogs});
        res.redirect('/blogs');
})


app.get('/about',( req,res )=>{
    // res.send('<h1>Hello Felix!</h1>')
    // res.sendFile('./views/about.html', { root:__dirname})
    res.render('about', {title: 'About'});
})
// app.get('/',( req,res )=>{
//     // res.send('<h1>Hello Felix!</h1>')
//     res.sendFile('./views/index.html', { root:__dirname})
// })


// blog routes 
app.use('/blogs',blogRoutes);

// redirects
app.get('/about-me',(req,res)=>{
     res.status(301).redirect('./about');
     res.end()
})

// 404
app.use( (req, res ) => {
    //    res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.render('404', {title: 404 });
})