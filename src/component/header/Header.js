import './Header.css'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='container1 '>
          <a href="index.html">
            <img src="/images/logo.png" alt="" />
          </a>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <select className='select' >
                <option value="">More Pages</option>
                <option value="">Left Sidebar</option>
                <option value="">Right Sidebar</option>
              </select>
            </li>
            <li>Contact</li>
            <li><button  >SIGN IN | SIGN UP</button></li>
          </ul>
        </div>
        <div className="clr"></div>
      </div>
    </div>
  )
}

export default Header