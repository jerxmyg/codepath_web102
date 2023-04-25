import React, { useState, useEffect } from 'react';
import more from './more.png';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const PostCard = (props) => {
  const [count, setCount] = useState(0);
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase.from('Posts').select('upvotes').eq('id', props.id);
      console.log('data:', data);
      console.log('error:', error);
      if (error) {
        console.error(error);
      } else if (data.length > 0) {
        setCount(data[0].upvotes);
      }
    };
    fetchCount();

    const fetchCreatedAt = async () => {
      const { data, error } = await supabase.from('Posts').select('created_at').eq('id', props.id);
      console.log('data:', data);
      console.log('error:', error);
      if (error) {
        console.error(error);
      } else if (data.length > 0) {
        setCreatedAt(data[0].created_at);
      }
    };
    fetchCreatedAt();
  }, [props.id]);

  const updateCount = async () => {
    try {
      const { data, error } = await supabase.from('Posts').update({ upvotes: count + 1 }).eq('id', props.id);
      if (error) {
        console.error(error);
      } else if (data && data.length > 0) {
        setCount(data[0].upvotes);
      } else {
        setCount((count) => count + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="Card">
    <Link to={'edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
    </Link>
     
      {props.image &&  <img className="image" src={props.image}/>}
      <h2 className="title">{props.title}</h2>
      <h3 className="author">{'by ' + props.author}</h3>
      <h4 className="time">{'Posted ' + new Date(createdAt).toLocaleString()}</h4>
      <p className="description">{props.description}</p>
      <button className="betButton" onClick={updateCount}>
        {count} 🥊 Punch Votes
      </button>
    </div>
  );
};

export default PostCard;