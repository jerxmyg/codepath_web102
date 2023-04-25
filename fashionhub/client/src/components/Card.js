import React, { useState, useEffect } from 'react';
import './Card.css';
import { supabase } from '../client';

const Card = (props) => {
  const [count, setCount] = useState(0);

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
  }, [props.id]);

  

  return (
    <div className="Card">
      <h2 className="title">{props.title}</h2>
      <h3 className="author">{'by ' + props.author}</h3>
      <h4 className="time">{'Posted ' + new Date(props.created_at).toLocaleString()}</h4>
      <h3>
        👊{count} Punch Votes
      </h3>
    </div>
  );
};

export default Card;