import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid} = props;
  console.log(grid);
  let location = useLocation();
  return (
    <>
    <div
      className={` ${
        location.pathname === "/store" ? `gr-${grid}` : "col-3"
      } `}
    >
      <Link 
      to={`${
        location.pathname === "/"
          ? "/product/:id"
          : location.pathname === "/product/:id"
          ? "/product/:id"
          : ":id"
      }`}
      className="product-card position-relative">
        
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="./images/wish.svg" alt="Wishlist" />
          </Link>
        </div>
        <div className="product-img">
          <img
            className="img-fluid"
            src="./images/watch-2.jpg"
            alt="Product Img"
          />
          <img
            className="img-fluid"
            src="./images/watch.jpg"
            alt="Product Img"
          />
        </div>
        <div className="product-details">
          <h5 className="brand">Apple Watch</h5>
          <h4 className="product-title">
            Kids Headphones 10 pack multi colored for students
          </h4>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-10">
            <Link>
              <img src="./images/prodcompare.svg" alt="Action Img" />
            </Link>
            <Link>
              <img src="./images/view.svg" alt="Action Img" />
            </Link>
            <Link>
              <img src="./images/add-cart.svg" alt="Action Img" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCard;
