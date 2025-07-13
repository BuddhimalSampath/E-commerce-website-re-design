import { useEffect, useState } from "react";
import "./Pages.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="page products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.length === 0 ? <p>No products available</p> : products.map((product) => (
          <div className="product-card" key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </div>
        ))}
      </div>
    </div>import "./Pages.css";

export default function Contact() {
  return (
    <div className="page contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message..." rows="5" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
}

  );
}
