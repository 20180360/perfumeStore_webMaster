import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WomenPerfums from './components/WomanPerfums/WomanPerfums';
import MenPerfums from './components/MenPerfums/MenPerfums';
import WishList from './components/WishList/WishList';
import Cart from './components/Cart/Cart';
import { Toaster } from 'react-hot-toast';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dashboard from './components/DashBoard/DashBoard';
import Order from './components/DashBoard/Order';

// import Layout from './components/Layout/Layout'
// import Home from './components/Home/Home'

export default function App() {
const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, // ✅ This makes '/' render Home
        { path: "home", element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "woman", element: <WomenPerfums /> },
        { path: "men", element: <MenPerfums /> },
        { path: "wishlist", element: <WishList /> },
        { path: "cart", element: <Cart /> },
        { path: "product/:id", element: <ProductDetails /> },
      ],
    },
    { path: "dash", element: <Dashboard /> },
    { path: "orders", element: <Order /> },



  ]);

  return <>
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />

   <RouterProvider router={router}></RouterProvider>

  

  

  </>
}


