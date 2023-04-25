import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostPage from './components/PostPage';
import { supabase } from './client'


const App = () => {
  
 
  const [posts, setPosts] = useState([0]);

  let element = useRoutes([
    {
      path: "/",
      element: <Home data={posts}/>
    },
    {
      path: "/feed",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/posts/:id/edit/:id",
      element: <EditPost data={posts} />
    },
   
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path: "/posts/:id",
      element: <PostPage data={posts}/>
    }
  ]);

  useEffect(()=> {
    const fetchData = async () => {
      const { data } = await supabase
        .from("Posts")
        .select()
        .order("created_at", { ascending: true });

  
      setPosts(data);
    };
    fetchData();
  }, []); 

  return ( 

    <div className="App">

      <div className="header">
        
      <Link to="/"><button className="headerBtn"> Home </button></Link>  
      <Link to="/feed"><button className="headerBtn"> Explore </button></Link>
      </div>
  

      {element}
    </div>

  );
}

export default App;
