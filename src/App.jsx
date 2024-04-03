import { createBrowserRouter, RouterProvider } from "react-router-dom";

//importing routes
import Homepage from "./routes/Homepage";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;