import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <ul className="footer-list">
              <li>Quick Link</li>
              <li>About</li>
              <li>Product</li>
              <li>Responsibility</li>
              <li>Career</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <ul className="footer-list">
              <li>Customer Service</li>
              <li>My account</li>
              <li>Checkout Page</li>
              <li>Help Center</li>
              <li>Terms & Condition</li>
              <li>Cart Page</li>
            </ul>
          </div>
          <div>
            <ul className="footer-list">
              <li>More</li>
              <li>Gift Card</li>
              <li>Look Book</li>
              <li>Rewards Program</li>
              <li>wedding Dress</li>
              <li>Host a Party</li>
            </ul>
          </div>
          <div>
            <ul className="footer-list">
              <li>Don't miss any update</li>
              <li>
                Molestie vitae massa felis, aliquam lectus at. Ultricies et,
                quis sit fermentum aliquam et.
              </li>
              <li>
                <div className="footer-mail">
                  <input type="text" placeholder="your mail" />
                  <button>Go</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <p>
            Designed by : <span style={{ fontWeight: "bold" }}>emart</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
