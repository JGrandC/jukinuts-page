

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="contact">
        <ul>
          <li>
            <div className="vector"></div>
            <div className="content">
              <h4>Our location</h4>
              <p>
                FMB 2002B, Ablekuma Fanmilk.
                P.O Box CT 3722
                Cantonments, Accra
              </p>
            </div>
          </li>
          <li>
            <div className="vector"></div>
            <div className="content">
              <h4>Chat with us</h4>
              <p>
                Available Monday - Saturday
                09:00 am - 06:00 pm
              </p>
              <a href="https://wa.me/233548958020?text=">Send message </a>
            </div>
          </li>
          <li>
            <div className="vector"></div>
            <div className="content">
              <h4>Mail Us</h4>
              <p>
                Available Monday - Saturday
                09:00 am - 06:00 pm
              </p>
              <a href="mailto:jgrandcteam@gmail.com">jgrandcteam@gmail.com</a>
            </div>
          </li>
          <li>
            <div className="vector"></div>
            <div className="content">
              <h4>Call Us</h4>
              <p>
                Available Monday - Saturday
                09:00 am - 06:00 pm
              </p>
              <a href="tell:+233548958020">+233 54 895 8020</a>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="subscribe">
        <h2>Crunch up your week with us</h2>
      
        <p>Don&apos;t want to miss out on discounts, offers, tips and healthy takes from us?
          Subscribe to our Newsletter.
        </p>
        <input type="text" placeholder="Enter Your Email" />
        <button className="btn">Subscribe</button>
      </div>

      {/* <div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div> */}
    </footer>
  )
}
