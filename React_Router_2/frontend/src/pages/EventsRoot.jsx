import { Outlet } from "react-router-dom";

import EventsNavigaion from "../components/EventsNavigation.jsx";

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigaion />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;
