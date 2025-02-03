import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import ProductCard from './Productcard';

function Offcanva() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const count = useSelector(state => state.cart.value)
  
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Cart items {count.length}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            count.map((carts)=>(
                <ProductCard item={carts}/>
            ))
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanva;