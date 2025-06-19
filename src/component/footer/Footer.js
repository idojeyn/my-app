import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container4">
        <div className="row">
          <div className="col-6 row">
            <div className="col-6">
              <h5>Contact</h5>
              <p>+234 23 9873237</p>
              <a href="index.html">some.email@somewhere.com</a>
              <p>234 Hidden Pond Road, Ashland City, TN 37015</p>
            </div>
            <div className="col-6">
              <h5>Follow me</h5>
              <i className="fab fa-twitter fa-2x"></i>
              <i className="fab fa-dribbble fa-2x"></i>
              <i className="fab fa-github fa-2x"></i>
              <i className="fab fa-facebook-f fa-2x"></i>
            </div>
          </div>
          <div className="col-6">
            <h5>Text widget</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolores, quibusdam architecto voluptatem amet fugiat nesciunt placeat provident cumque accusamus itaque voluptate modi quidem dolore optio velit hic iusto vero praesentium repellat commodi ad id expedita cupiditate repellendus possimus unde?</p>
            <p>Eius consequatur nihil quibusdam! Laborum, rerum, quis, inventore ipsa autem repellat provident assumenda labore soluta minima alias temporibus facere distinctio quas adipisci nam sunt explicabo officia tenetur at ea quos doloribus dolorum voluptate reprehenderit architecto sint libero illo et hic.</p>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>Home | About | Sidebar | Contact | Sign up</p>
        <p>Copyright © 2014, NameName. Design: <a href="GetTemplate">GetTemplate</a></p>
      </div>
    </div>
  )
}

export default Footer