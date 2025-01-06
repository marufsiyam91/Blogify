const Blog = require('../models/blog.model');
const Blog = require('../models/blog.model');


const postBlog = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body;
    
        if (!title || !content) {
          return res.status(400).json({ message: 'Title and content are required.' });
        }
    
        const blog = await Blog.create({ title, content, author, tags });
        res.status(201).send(blog);
      } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}