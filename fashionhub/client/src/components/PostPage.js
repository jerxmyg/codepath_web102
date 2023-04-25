import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from './PostCard';
import CommentCard from './CommentCard'


const PostPage = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');

  useEffect(() => {
    const fetchPostAndComments = async () => {
      const { data: post, error: postError } = await supabase
        .from('Posts')
        .select()
        .eq('id', id)
        .single();
  
      const { data: comments, error: commentsError } = await supabase
        .from('Comments')
        .select()
        .eq('post_id', id);
  
      if (postError || commentsError) {
        console.error(postError || commentsError);
      } else {
        setPost({ ...post, comments });
      }
    };
    
    fetchPostAndComments();
  }, [id]);
  const handleAddComment = async () => {
    const { data: comment, error } = await supabase
      .from('Comments')
      .insert({
        post_id: post.id,
        author: newCommentAuthor,
        content: newComment,
      })
      .single();
  
    if (error) {
      console.error(error);
    } else {
      setPost(prevPost => ({
        ...prevPost,
        comments: [...prevPost.comments, comment],
      }));
      setNewComment('');
      setNewCommentAuthor('');
      window.location.reload();
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="PostPage">
      <Card
        id={post.id}
        title={post.title}
        author={post.author}
        description={post.description}
        image={post.bucketBaseURL}
      />
      <p>{post.content}</p>

      <h2>Comment Here!</h2>
      <h3>Author:</h3>
      <input
        type="text"
        placeholder="Username"
        value={newCommentAuthor}
        onChange={event => setNewCommentAuthor(event.target.value)}
      />
      <h3>Content:</h3>
      <textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={event => setNewComment(event.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>

      <h3>Comment Section</h3>

      {post.comments.map(comment => (
      <CommentCard
        key={comment.id}
        title={comment.author}
        description={comment.content}
        image={null}
      />
    ))}
      
    </div>
  );
};

export default PostPage