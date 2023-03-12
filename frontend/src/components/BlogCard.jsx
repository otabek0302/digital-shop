import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className="blog-card">
            <div className="blog-image">
                <img className='img-fluid' src="./images/blog-1.jpg" alt="Blog" />
            </div>
            <div className="blog-content">
                    <p className='date'>1 Apr, 2023</p>
                    <h5 className='title'>A beautiful sunday morning renaissance</h5>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus, modi quis, suscipit tenetur incidunt itaque facilis ipsam hic in iste similique necessitatibus quas sequi repellendus ex atque! Rem, pariatur!</p>
                    
                    <Link className='button'> Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard