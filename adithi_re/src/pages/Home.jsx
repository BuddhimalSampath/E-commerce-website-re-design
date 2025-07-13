import { Link } from "react-router-dom";
import "./Pages.css";

export default function Home() {
  return (
    <div className="page home">
      <h1>Welcome to Aditi Infinity</h1>
      <p>Discover top electronics, gadgets, and accessories.</p>
      <Link to="/products" className="btn">Browse Products</Link>
    </div>
  );
}
