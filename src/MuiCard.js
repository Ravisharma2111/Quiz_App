import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Carddetail from "./Carddetail";
import { useNavigate } from 'react-router-dom';


const MuiMap = () => {
  const navigate = useNavigate()
 
  const { params } = useParams();
  const [part, setPart] = useState([]);
  
  const fetchDate = () => {
    fetch(`https://dummyjson.com/products/category/${params}`)
      .then((response) => {
        return response.json();
      })
      .then((fata) => {
        setPart(fata);
      });
  };

  useEffect(() => {
    fetchDate();
  }, []);

  const viewdetail = () => {
    
  }
  

  return (
    <div>

      <div>
        <Typography
          variant="h2"
          component="div"
          sx={{ textAlign: "center", fontSize: "65px", paddingBottom: "18px" }}
        >
      <u>{params}</u>{" "}
        </Typography>
      </div>
      <Grid
        container
        display="flex"
        justifyContent="space-evenly"
      >
       {part?.products?.map((kl) => {
          return (
            <div>
              <Carddetail kl={kl} />
            </div>
          );
        })
      }
      </Grid>
    </div>
  );
};
export default MuiMap;