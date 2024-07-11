import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import EventsRootLayout from "./pages/EventsRoot.jsx";
import EventsPage, { loader as eventsLoader } from "./pages/Events.jsx";
import EventDetailPage from "./pages/EventDetail.jsx";
import NewEventPage from "./pages/NewEvent.jsx";
import EditEventPage from "./pages/EditEvent.jsx";
import ErrorPage from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
