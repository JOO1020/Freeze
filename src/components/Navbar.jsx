import React from 'react'
import { Container,Button, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { IoCartSharp } from "react-icons/io5";
import { useShoppingcart } from '../context/shoppingCartContext';
function Navbar() {
  const {openCart,cartQuatity} = useShoppingcart()
  return (
    <NavbarBs fixed='top' className='bg-white shadow-sm mb-3'>
        <Container>
        <Nav className='me-auto d-flex align-items-center justify-content-space-around' >
        <img alt='logo' src='../imgs/summer-post.png' style={{width:"50px" ,height:"50px"}}/>
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>
        <Button variant='outline-dark' onClick={openCart} className='rounded-circle'style={{width:'3rem',height:"3rem",position:"relative"}}>
        <IoCartSharp size={25} />
        <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{position:"absolute",color:"#fff",width:"1.2rem",height:"1.2rem",bottom:0,right:0,transform:"traslate(25% , 25%"}}>
        {cartQuatity}
         </div>
        </Button>

        </Container>
    </NavbarBs>
  )
}

export default Navbar