import { Link } from "react-router"

const Header = () => {
  return (
    <>
     <nav>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>     
      </nav>
    </>
  )
}

export default Header