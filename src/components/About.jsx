import React from 'react';
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <div className="container py-5" style={{marginTop:"4rem"}}>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-10">
            <div className="card shadow-lg">
              <div className="card-body">
                <h1 className="text-center mb-4">About Freeze</h1>
                <p className="lead text-center" style={{fontSize:"1.2rem",fontWeight:"500",fontFamily:"sans-serif",lineHeight:"1.8"}}>
                At Freeze, we believe that fashion is more than just clothing—it's a statement of who you are. As a local brand, we’re dedicated to crafting clothing that blends style, comfort, and individuality. Our mission is to create premium-quality t-shirts and apparel that allow you to express yourself confidently while feeling at ease.

Each piece in our collection is thoughtfully designed using top-tier fabrics, ensuring that you not only look great but feel great too. Whether you're gearing up for a casual day out or need something that stands out in a crowd, Freeze offers styles that fit every occasion. From minimalist designs to bold, eye-catching prints, our clothing is tailored for those who want to embrace their uniqueness.

Join us on our journey as we continue to innovate, bringing you clothing that speaks to your personality and enhances your everyday life. Explore Freeze, and discover fashion that's as unique as you are.



                </p>
                <p className="text-center">
                  Whether you're looking for casual everyday wear or something to stand out in a crowd, Freeze has something for everyone. Each piece is crafted with the finest materials, designed to offer comfort, durability, and style.
                </p>
                <p className="text-center">
                  Join the Freeze family today and discover the perfect blend of fashion and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     <Footer/>
    </>
  );
}

export default About;
