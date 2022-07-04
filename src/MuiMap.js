import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CounterContext } from "./CounterContext";

const MuiMap = () => {
  const { updateCart } = useContext(CounterContext);

  const [user, setUser] = useState([]);
  const [dataa, setDataa] = useState();

  const fetchData = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         setUser(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
           <div>
        <Typography
          variant="h2"
          component="div"
          sx={{ textAlign: "center", fontSize: "65px", paddingBottom: "18px" }}
        >
          {" "}
          <u> All Category </u>{" "}
        </Typography>
      </div>

      <Grid container  display="flex"
      justifyContent="space-evenly" >
        {" "}
        {user?.map((el) => {
          return (
            <div style={{paddingBottom: "25px"}}>
             <Card
              sx={{
                 border: "1px solid red",
                width: 300,
                height: 300,
                display: "flex",
              }}
            >
              <CardActionArea orientation="vertical">
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                  onClick={() => setDataa(el)}
                >
                  <Link to={`/${el}`}>{el}</Link>
                </Typography>
              </CardActionArea>
            </Card>
            </div>
 
          );
        })}
      </Grid>
    </div>
  );
};
export default MuiMap;
