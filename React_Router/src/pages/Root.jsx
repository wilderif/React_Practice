import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation.jsx";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
