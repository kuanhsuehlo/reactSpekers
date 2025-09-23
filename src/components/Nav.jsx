import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <header>
        <nav className="nav-container">
          <div className="nav-wrap">
            <div className="navbar">
              <div>
                <Link to="/">
                  <h1>ACOUSTRA</h1>
                </Link>
              </div>
              <ul className="nav-itme">
                <li><Link to=""><p>Shop</p></Link></li>
                <li><Link to=""><p>Explore</p></Link></li>
                <li><Link to=""><p>Support</p></Link></li>
                <li><Link to=""><p>Story</p></Link></li>
              </ul>
              <div className="nav-end">
                <div className="nav-notify">
                  <div><Link to=""><img src="./images/notify.svg" alt="notify" /></Link></div>
                  <div><Link to=""><img src="./images/cart.svg" alt="cart" /></Link></div>
                </div>
                <button>登入/註冊</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav