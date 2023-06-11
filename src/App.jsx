import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

//Routes Import
import Homepage from "./routes/Homepage";

function App() {

  const theme = {
    beaver: "#9e7f66",
    codGray: "#111111",
    mirage: "#17192b",
    ebonyClay: "#242b37",
    shuttleGray: "#5c6779",

    font: "League Spartan"
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
      //errorElement: <Error />
    },
  ])

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  )
}

export default App;


const Container = styled.div``;
