'use client'
import React, { useState } from 'react'
import s from '../users/rashid.module.css'
import { useEffect } from 'react'
import axios from 'axios';

const Posts = () => {
  const[data,setPosts] = useState([]);
  const [loading, setLoad] = useState(true);
  
  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
        setPosts(res.data);
        setLoad(false);
    }
    fetchData();
  },[]);
 
   
  
    let numPosts;
    if(data.length ==1){
      numPosts = 'пост';
    } else if(data.length >=2 && data.length <=4){
      numPosts = 'поста'
    }else {
      numPosts = 'постов'
    }

    if (loading)  {
      return <h1>Загрузка...</h1>
    }
    if (data.length == 0){
      return <h1>Нет постов</h1>
    }
  return (
    <div>
        <>
        <h1>Posts</h1>
          <h4>{numPosts} {data.length}</h4>
          {data.map((post) => (
            <div className={s.block}>
              <h3>{post.title}</h3>
              <h6>{post.body}</h6>
            </div>
          ))}
        </>
    </div>
  )
}

export default Posts