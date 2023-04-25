import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import './ReadPosts.css';

const ReadPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    setPosts(props.data);
  }, [props]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.created_at) - new Date(b.created_at);
    } else {
      return new Date(b.created_at) - new Date(a.created_at);
    }
  });

  const toggleSortOrder = () => {
    if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
  };

  return (
    <div className="ReadPosts">
      <div className='readContent'>
        <div className='topButtons'>
            <div className="button">
                <Link to="/new"><button className="headerBtn"> Upload Posts! </button></Link>  
            </div>
            <div className='sortButton'>
                <button onClick={toggleSortOrder}>
                Sort by {sortOrder === 'asc' ? 'oldest' : 'newest'}
                </button>
            </div>
        </div>
        <div className='searchBar'>
          <input
            type="text"
            placeholder="Search Posts"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
        </div>
        <h2> Enjoy!</h2>
        <div className='postGallery'>
          {
            sortedPosts && sortedPosts.length > 0 ?
              sortedPosts.map((post, index) =>
                <Link to={`/posts/${post.id}`}>
                  <Card
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    description={post.description}
                    image={post.bucketBaseURL}
                    created_at={post.created_at}
                  />
                </Link>
              ) : <h2>{'No Challenges Yet 😞'}</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default ReadPosts;