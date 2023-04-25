import React from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { supabase } from '../client'
import './EditPost.css'

const EditPost = ({ data }) => {

    const { id } = useParams();
    const [post, setPost] = useState(data.filter((item) => item.id === parseInt(id))[0]);
  
    const updatePost = async (event) => {
      event.preventDefault();
  
      await supabase.from('Posts').update({
        title: post.title,
        author: post.author,
        description: post.description
      })
        .eq('id', id);
  
      window.location = "/";
    }
  
    const deletePost = async () => {
      await supabase
        .from("Posts")
        .delete()
        .match({ id: parseInt(id) });
  
      window.location = "/";
    };
  
    const onChange = (event) => {
      setPost((prevPost) => {
        return { ...prevPost, [event.target.name]: event.target.value };
      });
    };
  
    return (
      <div>
        <form onSubmit={updatePost}>
          <label htmlFor="title">Title</label> <br />
          <input type="text" id="title" name="title" value={post.title} onChange={onChange} /><br />
          <br />
  
          <label htmlFor="author">Author</label><br />
          <input type="text" id="author" name="author" value={post.author} onChange={onChange} /><br />
          <br />
  
          <label htmlFor="description">Description</label><br />
          <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={onChange}>
          </textarea>
          <br />
          <input type="submit" value="Submit" />
          <button className="deleteButton" onClick={deletePost}>Delete</button>
        </form>
      </div>
    )
  }

export default EditPost