const Blog = require('../models/blogs');


const blog_create =( req,res )=>{
        // res.send('<h1>Hello Felix!</h1>')
        // res.sendFile('./views/about.html', { root:__dirname})
        res.render('create', {title: 'New Blog'})
}

const blog_details =( req,res )=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details', { blog:result , title:'Blog Details'})
       })
}

const blog_index=( req,res)=>{
    Blog.find()
    .then((result)=>{
     res.render('index', {title:"All Blogs",  blogs:result})
    }).catch((err)=>{
     console.log(err.message);
    })
}

const blog_post =( req, res)=>{
        const blog = new Blog(req.body)
        blog.save()
        .then((result)=>{
           res.redirect('/blogs');
        })

}

module.exports = {
    blog_create, blog_details, blog_index, blog_post
}