import { NavLink, Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { navigation } from "../constants/constants";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 shadow-lg border-b-[0.5px] border-b-gray-200">
      <img
        src="/images/logos/logo-dark.svg"
        alt="logo"
        width={100}
        height={50}
      />
      <nav>
        <ul className="hidden md:flex gap-5 font-bold">
          {navigation.map((navItem) => {
            return (
              <li key={navItem.navitem}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-b-red-700" : ""
                  }
                  to={navItem.link}
                >
                  {navItem.navitem}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex gap-2">
        <li>
          <SearchRoundedIcon />
        </li>
        <li>
          <Link to="/auth/signin">
            <AccountCircleOutlinedIcon />
          </Link>
        </li>
        <li>
          <ShoppingCartOutlinedIcon />
        </li>
        <li className="md:hidden">
          <MenuRoundedIcon />
        </li>
      </ul>
    </header>
  );
}

export default Header;
