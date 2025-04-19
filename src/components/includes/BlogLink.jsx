import React from 'react'
import "./../../assets/css/blog-link.css"
import { Link } from "react-router-dom";
import blogList from "./../../assets/json/blog.json"

function BlogLink() {
    let categories = "news"

    const blogCategory = blogList.filter((item) => item.category.toLowerCase() === categories.toLowerCase()).slice(0, 3);

  return (
    <div className='row'>
        <h2 className='text-white mb-5'>Must Read</h2>
        {blogCategory.length > 0 ? (
            <>
                {blogCategory.map((blog, blogIndex) => (
                    <Link key={blogIndex} className='bl-link col-lg-4 col-md-4 col-sm-12'>
                        <div className='row m-0 p-2'>
                            <div className='bl-img-div col-12 p-0 m-0'>
                                <img src={`/assets/images/blog/${blog.images[0].imgSrc}`} className="card-img-top rounded-0" alt={`Unit ${blogIndex + 1}`} />
                            </div>
                            <div className='col-12 pt-3'>
                                <h5 className='bl-title mb-3'>{blog.title}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
           
            </>
        ) : (
            <p className="text-center text-muted">No blogs available.</p>
        )}
        <div className='col-lg-4 col-md-4 col-sm-12'>
        </div>
    </div>
  )
}

export default BlogLink