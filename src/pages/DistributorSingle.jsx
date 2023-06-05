import React from 'react'
import { useParams } from 'react-router';

const DistributorSingle = ({data}) => {

    const { id } = useParams();

  
    const distribution = data?.distrubition;
    const currentPost = distribution?.find((post) => post?.id == id);
    const currentItem = currentPost?.sub_categories;

   

    const currentPost2 =currentItem?.find((post) => post?.id == id);

    console.log(id)
    console.log(currentPost)
    console.log(currentPost2)

  return (
    <div>
      product single
    </div>
  )
}

export default DistributorSingle
