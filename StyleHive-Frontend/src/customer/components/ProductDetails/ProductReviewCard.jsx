import React from "react";
import { Avatar, Grid2 } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>
              S
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">Vyshnav</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
            <div>
            

              <Rating
                value={4.5}
           
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
             
            </div>
            <p>
            Loren ipsum dolor
            </p>
          </div>
        </Grid2>
      </Grid2>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;