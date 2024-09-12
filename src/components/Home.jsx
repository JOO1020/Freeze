import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../Home.css';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdHighQuality } from "react-icons/md";
import { IoHappyOutline } from "react-icons/io5";
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
function Home() {
      return (
        <div>
          <header className="hero-section">
            {/* فيديو يتم عرضه في أعلى الصفحة */}
            <video className="bg-video" autoPlay loop muted>
              <source src="freeze.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* المحتوى الموجود تحت الفيديو */}
            <Container className="hero-content text-light text-center mt-5" style={{color:"#000"}}>
              <h1 className="display-4">Welcome to Freeze</h1>
              <p className="lead">Your style, your way. Premium t-shirts and clothing for every occasion.</p>
              <Link to="/store"><Button variant="primary" size="lg">Shop Now</Button> </Link>
            </Container>
          </header>
          <section className="py-5">
        <Container>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-box">
              <MdHighQuality size={20}  />
                <h3>Premium Quality</h3>
                <p>We provide high-quality t-shirts made from the finest materials.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
              <CiDeliveryTruck  size={20} />
                <h3>Fast Delivery</h3>
                <p>Fast and reliable shipping, straight to your door anywhere.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
              <IoHappyOutline  size={20} />
              <h3>Customer Satisfaction</h3>
                <p>We ensure top-notch customer service with every order.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
     <Footer/>
        </div>
      );
    }
    
  

export default Home;
