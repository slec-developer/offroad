import React from 'react'
import "./../../../assets/css/blog-link.css"
import { Link } from "react-router-dom";
import blogList from "./../../../assets/json/blog.json"

function BlogLink() {
    let categories = "news"

    const blogCategory = blogList.filter((item) => item.category.toLowerCase() === categories.toLowerCase()).slice(0, 3);

  return (
    <div className='blog-link-container'>
        <h2 className='blog-section-title text-white mb-5'>Must Read</h2>
        {blogCategory.length > 0 ? (
            <div className='blog-grid'>
                {blogCategory.map((blog, blogIndex) => (
                    <Link to={ `/blog/${blog.category+'/'+blog.id}` } key={blogIndex} className='blog-card'>
                        <div className='blog-image-container'>
                            <img 
                                src={`/assets/images/blog/${blog.images[0].imgSrc}`} 
                                className="blog-image" 
                                alt={`Blog ${blogIndex + 1}`} 
                            />
                        </div>
                        <div className='blog-content'>
                            <h5 className='blog-title'>{blog.title}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        ) : (
            <p className="text-center text-muted">No blogs available.</p>
        )}
    </div>
  )
}

export default BlogLink