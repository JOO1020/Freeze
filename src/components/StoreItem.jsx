import React from 'react'
import { Button, Card } from 'react-bootstrap'

import FormatCurrency from './Format'
import { useShoppingcart } from '../context/shoppingCartContext'
const StoreItem = ({ id, name, price, imgUrl   }) => {
    const {
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
    
    } = useShoppingcart();
    const quantity = getItemQuantity(id);
    return (<>

      <Card className="h-100 d-flex " style={{marginTop:"3rem"}}>
        <Card.Img
          variant="bottom"
          src={imgUrl}
          style={{ height: "350px", objectFit: "cover"}}
        />
       
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
            <span className="fs-3">{name}</span>
            <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <>
              <Button className="w-100" style={{padding:"10px"}} onClick={() => increaseCartQuantity(id)}>
                Add To Cart
              </Button>
            
              </>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: "0.5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity} in cart</span>
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
    );
  };
  
  export default StoreItem;
  /**
   <Carousel>
  <Carousel.Item>
  <ExampleCarouselImage text="First slide" />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <ExampleCarouselImage text="Second slide" />
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <ExampleCarouselImage text="Third slide" />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>  **/