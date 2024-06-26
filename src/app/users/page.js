
import React from 'react'
import s from './rashid.module.css'
import Link from 'next/link';

export const metadata = {
  title: 'Users',
  description: 'Generated by create next app',
}
  const getUsers = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_start');
    const data = res.json();
    return data;
}

const Users = async () => {
  const data = await getUsers();
  let numUsers;
  
  if(data.length==1){
    numUsers ='пользователь';
  } else if (data.length >=2 && data.length <=4){
    numUsers ='пользователя';
  } else {
    numUsers ='пользователей';
  }
  return (
    <div style={{width: '100%' }} className='block-text'>
        <h1>Users</h1>
        <h4>{numUsers} {data.length}</h4>
      {data.map((data)=>(
        <Link href={`/users/${data.id}`}> <div className={s.block} key={data.id}>
          <h3>{data.name}</h3>
          <p>{data.email}</p>
         
          </div></Link>
      ))}
     </div>
  )
}

export default Users