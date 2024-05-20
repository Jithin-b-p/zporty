import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <section className="p-10 flex flex-col items-center justify-center">
      <img
        src="/images/logos/logo-dark.svg"
        alt="logo"
        width={200}
        height={100}
      />
      <Outlet />
    </section>
  );
}

export default AuthLayout;
