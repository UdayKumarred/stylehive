import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
// import OrderTraker from "./OrderTraker";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useParams } from "react-router-dom";
// import AddressCard from "../adreess/AdreessCard";
import { deepPurple } from "@mui/material/colors";
import AddressCard from "../components/AddressCard/AddressCard";
import OrderTraker from "./OrderTracker";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";
// import BackdropComponent from "../BackDrop/Backdrop";


const OrderDetails = () => {
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const { orderId } = useParams();
//   const { order } = useSelector((store) => store);

//   console.log("order", order.order);

//   useEffect(() => {
//     dispatch(getOrderById(orderId));
//   }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker
              activeStep={3}
            />
          </Grid>
          <Grid item>
            <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>

             <Button sx={{ color: deepPurple[500] }} variant="text">
              cancel order
            </Button>
          </Grid>
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {[1,1,1,1,1].map((item)=>           <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l2hwwi80/dress/6/q/q/l-310tk6042-selvia-original-imagdtyyqfy7ahwf.jpeg?q=70"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">Men Soild</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: Sairam</p>
                  <p>₹2345 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                //   onClick={() => navigate(/account/rate/${item.product._id})}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>)}

        
      </Grid>

     
    </div>
     {/* <BackdropComponent open={order.loading}/> */}
    </>
   
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;