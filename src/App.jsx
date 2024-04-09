import { createBrowserRouter, RouterProvider } from "react-router-dom";

//importing routes
import Homepage from "./routes/Homepage";
import Booking from "./routes/Booking";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/booking",
      element: <Booking />
    }
  ])

  return (
    <div className="w-screen min-h-screen font-spartan">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;