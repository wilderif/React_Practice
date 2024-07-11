import { useRouteLoaderData } from "react-router-dom";

import EventFrom from "../components/EventForm.jsx";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventFrom method="PATCH" event={data.event} />;
};

export default EditEventPage;
