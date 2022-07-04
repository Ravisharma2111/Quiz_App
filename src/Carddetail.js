import React,{useContext} from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CounterContext } from "./CounterContext";

function Carddetail({kl}) {
    const { handleAdd } = useContext(CounterContext);

    let ar = JSON.parse(localStorage.getItem('updateCart'))
    let f = false
    ar?.map((el)=>{
      if(el.id === kl.id){
        f=true
      }
    })

  return (
    <div style={{ height: "320px", width: "341px", paddingBottom: "25px" }}>
      <Card
        sx={{
           border: "2px solid #000",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ height: "190px", width: "341px", }}>
          <img
            src={kl.thumbnail}
            style={{ height: "100%", width: "100%" }}
          ></img>
        </div>
        <hr />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "70%" }}>
            <Typography sx={{}} variant="h6">
              {kl.title}
            </Typography>
          </div>
          <div sx={{ width: "20%" }}>
            <Typography sx={{}} variant="h6">
              ${kl.price}
            </Typography>
          </div>
        </div>
        <hr />
        <div style={{paddingTop:'1px',display: "flex", justifyContent: "space-around" }}>
          <div>
            <button onClick={() => handleAdd(kl)}>{f?'Added':'Buy Now'}</button>
          </div>
          <div>
            <button> View Details </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Carddetail;
