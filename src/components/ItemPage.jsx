import React from 'react'
import { useParams } from 'react-router-dom'

const ItemPage = () => {
    const {id,name,price,imgUrl} = useParams()
    return (
    <div>
      ItemPage
      <h1>id:{id}</h1>
      <h1>name:{name}</h1>
      <h1>$:{price}</h1>
    </div>
  )
}

export default ItemPage
