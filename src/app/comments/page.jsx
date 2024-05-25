'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from '../users/rashid.module.css';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5');
  return res.data;
}
const page = () => {
  

  const { data, isError, isLoading } = useQuery('key', fetchData);

   if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (isError) {
    return <h1>Ошибка в выдаче данных</h1>;
  }
  return (
    <div>
   { data.map(comment => (
        <div className={s.block} key={comment.id}>
          <p>Name: {comment.name}</p>
          <p>Email: {comment.email}</p>
          <hr />
          <p>Body: {comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default page