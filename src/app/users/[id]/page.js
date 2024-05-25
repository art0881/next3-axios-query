
import Link from 'next/link';
import React from 'react'

export  async function getUsersId(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = res.json();
    return data;
}

const UsersId = async ({params}) => {
  const data = await getUsersId(params.id);

  return (
    <div style={{width: '100%' }} className='block-text'>
       <Link href='/users'>Назад</Link>
    
        <div  key={data.id}>
          <h3>{data.name}</h3>
          <p>{data.email}</p>
          <p>{data.address.street}</p>
          <p>{data.phone}</p>
          </div>
     
     </div>
  )
}

export default UsersId