import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import Home from "../pages/Home";
import WorkOnIt from "../pages/WorkOnIt";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedbook",
        element: <ListedBooks />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: ()=> fetch('book.json')
      },
      {
        path: "/pagetoread",
        element: <PagesToRead />,
      },
      {
        path: "/workonit",
        element: <WorkOnIt />,
      },
    ],
  },
]);

export default router;
