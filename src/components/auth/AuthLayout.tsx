import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <section className="flex flex-col items-center justify-center p-5 md:p-10">
      <Link to="/">
        <img
          src="/images/logos/logo-dark.svg"
          alt="logo"
          width={200}
          height={100}
        />
      </Link>
      <Outlet />
    </section>
  );
}

export default AuthLayout;
