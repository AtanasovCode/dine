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
    <div className="w-screen min-h-screen font-spartan">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;