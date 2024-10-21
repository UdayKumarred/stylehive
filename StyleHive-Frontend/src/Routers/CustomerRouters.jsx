import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
// import Product from "../customer/Components/Product/Product/Product";
// import Contact from "../Pages/Contact";
// import TearmsCondition from "../Pages/TearmsCondition";
// import PrivacyPolicy from "../Pages/PrivacyPolicy";
// import About from "../Pages/About";
// import Homepage from "../Pages/Homepage";
// import Navigation from "../customer/Components/Navbar/Navigation";
// import Cart from "../customer/Components/Cart/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {Button} from "@mui/material";
// import { customTheme, customerTheme } from "../Admin/them/customeThem";
// import Order from "../customer/Components/orders/Order";
// import OrderDetails from "../customer/Components/orders/OrderDetails";
// import Checkout from "../customer/Components/Checkout/Checkout";
// import Footer from "../customer/Components/footer/Footer";
// import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
// import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import HomePage from "../customer/pages/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Order from "../customer/Order/Order";
import OrderDetails from "../customer/Order/OrderDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";

const CustomerRoutes = () => {
    const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",/product/${productId}]
  return (
    <div>
    

    {showNavigation && <Navigation />}
     <Routes>
     <Route  path='/login' element={<HomePage />}></Route>
     <Route  path='/register' element={<HomePage />}></Route>
     <Route  path='/' element={<HomePage />}></Route>
     {/* <Route path="/register" element={<Homepage />}></Route>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        
         */}
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        {/* <Route path="/account/rate/:productId" element={<RateProduct />}></Route> */}
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>

      
    </div>
  );
};

export default CustomerRoutes;