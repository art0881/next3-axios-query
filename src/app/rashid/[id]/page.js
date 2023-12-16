
import Link from 'next/link';
import React from 'react'

export  async function getRashidId(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = res.json();
    return data;
}

const RashidId = async ({params}) => {
  const data = await getRashidId(params.id);

  return (
    <div style={{width: '100%' }} className='block-text'>
       <Link href='/rashid'>Назад</Link>
    
        <div  key={data.id}>
          <h3>{data.name}</h3>
          <p>{data.email}</p>
          <p>{data.address.street}</p>
          <p>{data.phone}</p>
          </div>
     
     </div>
  )
}

export default RashidId