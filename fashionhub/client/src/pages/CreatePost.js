import React from 'react';
import { useState } from "react";
import { supabase } from '../client'
import { v4 as uuidv4 } from "uuid";
import './CreatePost.css'

const CreatePost = () => {

    const[post, setPost] = useState({title: "", author: "", description: ""})
    const [file, setfile] = useState([]);


    
    const handleFileSelected = (e) => {
        setfile(e.target.files[0]);
      };
    
      const createPost = async (event) => {
        event.preventDefault();
        const filename = `${uuidv4()}-${file.name}`;
      
        const { data, error } = await supabase.storage
          .from("images")
          .upload(filename, file, {
            cacheControl: "3600",
            upsert: false,
          });
      
        const filepath = data.path;
        console.log('image',data)
      
        const bucketBaseURL = 'https://czjjphvnffwfpqppyfxh.supabase.co/storage/v1/object/public/images/';
        const imageURL = bucketBaseURL + filepath;
      
        await supabase.from('Posts').insert({
          title: post.title,
          author: post.author, 
          description: post.description,
          bucketBaseURL: imageURL
        }).select();
      
        window.location.href = "/";
      };

    const onChange = (event) => {
        setPost((prevPost) => {
          return { ...prevPost, [event.target.name]: event.target.value };
        });
      };  

    return (
        <div>
        <form onSubmit={createPost}>
          <label for="title">Title</label> <br />
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={onChange}
          />
          <br />
          <br />

          <label for="author">Author</label>
          <br />
          <input
            type="text"
            id="author"
            name="author"
            value={post.author}
            onChange={onChange}
          />
          <br />
          <br />
          <label for="description">Description</label>
          <br />
          <textarea
            rows="5"
            cols="50"
            id="description"
            name="description"
            value={post.description}
            onChange={onChange}
          />
          <br />
          <input type="submit" value="Submit"/>
          <input type="file" name="image" onChange={handleFileSelected} />
        </form>
 
            



      </div>
    );
  };
  

export default CreatePost