import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation.jsx";

const RootLayout = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" ? <p>Loading...</p> : null} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
