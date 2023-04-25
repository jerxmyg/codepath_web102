import { useState, useEffect } from 'react';
import { supabase } from '../client';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const { data: comments } = await supabase
        .from('Comments')
        .select()
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      setComments(comments);
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: comment, error } = await supabase
      .from('Comments')
      .insert({ post_id: postId, content: newComment });

    if (error) {
      console.error(error);
    } else {
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="CommentSection">
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;