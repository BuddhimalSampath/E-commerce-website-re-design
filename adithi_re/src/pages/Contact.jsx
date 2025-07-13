import "./Pages.css";

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
