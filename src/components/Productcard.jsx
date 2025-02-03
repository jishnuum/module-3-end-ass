import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtocart, removecart } from '../features/cart/cartslice';



function ProductCard({item}) {

    const count = useSelector(state => state.cart.value)

    const dispatch = useDispatch()
  return (
    <>
         <Card className='cards' >
      <Card.Img variant="top" src={item.image}className='proImage' />
      <Card.Body className=''>
        <Card.Title className=''>{item.title}</Card.Title>
        <Card.Text>
        {item.description.slice(0,100)}
        </Card.Text>
        <div className="proContens">
        <Card.Text className='fw-bold m-0'>{item.price}</Card.Text>
        <Link to={`productcard/${item.id}`}><Button variant="primary" className='proBtn p-0'>View details</Button>
        </Link>

        {
            count.some((carts)=>carts.id === item.id) ? <Button variant="danger" className='proBtn p-0' onClick={()=>dispatch(removecart(item.id))}>remove</Button> 
            :        <Button variant="success" className='proBtn p-0' onClick={()=>dispatch(addtocart(item))}>Add to cart</Button>

        }
        </div>
      </Card.Body>
    </Card>
      
   </>
  )
}

export default ProductCard
