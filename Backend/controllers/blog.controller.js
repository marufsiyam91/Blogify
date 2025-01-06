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


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).send(blogs)
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
          }
      
          blog.views += 1;
          await blog.save();

        res.status(200).send(blog)
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
          }
      
          res.status(200).send(blog);
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
          }
      
          res.status(204).json({message: 'blog deleted successfully'});
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

