import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm.jsx";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const eventDatat = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventDatat),
  });

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  return redirect("/events");
};
