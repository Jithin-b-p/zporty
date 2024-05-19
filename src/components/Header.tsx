import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function Header() {
  return (
    <header className="flex justify-between items-center p-5">
      <img
        src="/images/logos/logo-dark.svg"
        alt="logo"
        width={100}
        height={50}
      />
      <nav>
        <ul className="flex gap-5 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-2">
        <li>search</li>
        <li>
          <AccountCircleOutlinedIcon />
        </li>
        <li>
          <ShoppingCartOutlinedIcon />
        </li>
      </ul>
    </header>
  );
}

export default Header;
