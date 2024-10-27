import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useState } from "react";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  // New state for showing success message
  const [showMessage, setShowMessage] = useState(false);
  const handleAddToCart = () => {
    dispatch(addToCart(product));

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };
  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} />
      <p className="price">Price: {product.price}$</p>
      <div className="button-container">
        <button onClick={handleAddToCart}>Add To Cart</button>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>

      {showMessage && (
        <p className="success-message">Item added successfully!</p>
      )}
    </div>
  );
};

export default ProductItem;
