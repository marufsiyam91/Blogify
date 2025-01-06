const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
      },
      content: [
        {
          type: "paragraph",
          text: "A blog page can be made more engaging by using proper formatting and design elements.",
        },
        {
          type: "bold",
          text: "Highlight key sentences to grab the reader's attention.",
        },
        {
          type: "bullet_points",
          items: [
            "Use bullet points for lists.",
            "Add subheadings to divide sections.",
            "Highlight important phrases.",
          ],
        },
        {
          type: "quote",
          text: "Good design is as little design as possible. – Dieter Rams",
        },
        {
          type: "subtitle",
          text: "Subheading: Tips for Formatting",
        },
        {
          type: "paragraph",
          text: "Using subtitles, bold text, and bullet points helps readers navigate the content easily.",
        },
      ],
      author: {
        type: String,
        default: 'Maruf Siyam',
      },
      image: {
        type: String,
      },
      tags: {
        type: Array,
        default: ['general'],
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      views: {
        type: Number,
        default: 0,
      },
  
});


const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog
