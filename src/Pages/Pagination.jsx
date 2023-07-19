import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';


const Pagination = ({ postsPerPage,totalPosts,paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        
          <li>
          
           
          </li>
      
      </ul>
    </div>
  );
}

export default Pagination
