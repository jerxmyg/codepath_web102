import React, { useState, useEffect } from 'react';
import { supabase } from '../client';

const CommentCard = (props) => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase.from('Comments').select('upvotes').eq('id', props.id);
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
      <p className="description">{props.description}</p>
    </div>
  );
};

export default CommentCard;