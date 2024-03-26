import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import Home from "../pages/Home";
import WorkOnIt from "../pages/WorkOnIt";
import Details from "../pages/Details";
import ReadList from "../pages/ReadList";
import WishList from "../pages/WishList";
import PagesToWishlist from "../pages/PagesToWishlist";

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
        children:[
          {
            index: true,
            element: <ReadList/>
          },
          {
            path: 'wishlist',
            element: <WishList />
          }
        ]
      },
      {
        path: "details/:id",
        element: <Details />,
        // loader: ()=> fetch('book.json')
      },
      {
        path: "/pagetoread",
        element: <PagesToRead />,
      },
      {
        path: '/pagestowishes',
        element: <PagesToWishlist/>
      },
      {
        path: "/workonit",
        element: <WorkOnIt />,
      },
    ],
  },
]);

export default router;
