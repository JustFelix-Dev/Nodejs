const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blogControllers');


router.get('/create', blogControllers.blog_create)
router.get('/:id', blogControllers.blog_details)
router.get('/', blogControllers.blog_index)
router.post('/', blogControllers.blog_post)



 module.exports = router
 