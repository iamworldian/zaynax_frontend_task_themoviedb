'use client';

import { useParams } from 'next/navigation';


const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();
  
  return (
    <div>Search Page Post: {params.query}</div>
  )
}

export default page
