import React from 'react';
import ReactDOM from 'react-dom';

export class CompanyProductList extends React.Component {
    render() {
        return(
            <div className="heart-of-our-company-container">
            <h3>The heart of<br/> our company</h3>

            <div className="company-products">
              <div className="product-image">
                <img src="https://placeimg.com/90/90/tech" alt="" className="rounded" />
              </div>
              <div className="product-copy">
                <h4>Dr. Wallach</h4>
                <p>Our core philosophy is based on the principles and research of Dr. Joel Wallach, whose career is dedicated to helping people live younger, longer lives.</p>
              </div>
            </div>
            
            <div className="company-products">
              <div className="product-image">
                <img src="https://placeimg.com/90/90/people" alt="" className="rounded" />
              </div>
              <div className="product-copy">
                <h4>90 Essential Nutrients</h4>
                <p>Dr. Wallach has discovered there are 90 essential nutrients that bring us vibrant health - each of our Healthy Body Start Paks contain these nutrients.</p>
              </div>
            </div>
            
            <div className="company-products">
              <div className="product-image">
                <img src="https://placeimg.com/90/90/animals" alt="" className="rounded" />
              </div>
              <div className="product-copy">
                <h4>Products for<br /> Every Lifestyle</h4>
                <p>We offer a wide variety of wellness products that help you live your best life. For any age, any routine, and any need.</p>
              </div>
            </div>

          </div>
        )
    }
}

export default CompanyProductList;