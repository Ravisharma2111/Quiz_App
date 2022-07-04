import React, { useContext, useReducer, useState } from "react";
import { styled } from "@mui/material/styles";
import {Link} from "react-router-dom"
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import  {Box} from "@mui/material";
import  {AppBar} from "@mui/material";
import  {Toolbar} from "@mui/material";
import  {Button} from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { CounterContext } from "./CounterContext";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});



const Cart = () => {
   const { setUpdateCart,updateCart } = useContext(CounterContext);

  let ar = JSON.parse(localStorage.getItem("updateCart"))

  const removeItem = (id) => {
    const newList = updateCart.filter((mydata) => mydata.id !== id);
    setUpdateCart(newList);
    localStorage.setItem("updateCart", JSON.stringify(newList));
  };
    const getmtr = () =>{
setUpdateCart(ar)
  }

  const increaseItem = (data) => {
    // let ar = JSON.parse(localStorage.getItem("updateCart"))
    if(ar) {
      ar.map((kal) => {
        if(kal.id === data.id){
           return( kal.quantity = kal.quantity + 1 )     
      }
       
    })
    }
    localStorage.setItem("updateCart", JSON.stringify(ar));
    setUpdateCart(ar)
   }
  const decreaseItem = (data) => {
    // let ar = JSON.parse(localStorage.getItem("updateCart"))
    if(ar) {
      ar.map((kal) => {
        if(kal.id === data.id){
          return(kal.quantity = kal.quantity > 1 ? kal.quantity - 1 : 1 )
         
        }
       
      })
    }
    localStorage.setItem("updateCart", JSON.stringify(ar));
    setUpdateCart(ar)
  }

  return (
    <div style={{ marginTop:'6px' }}>
        {ar?.map((mydata) => {
          return (
            
           <div  style={{ marginBottom:'5px'}} >
              <Paper 
              elevation={1          }
              // variant="string" square
                sx={{
                  p: 0.6,
                  // boxSizing: 'border-box',            
                        paddingBottom:'20px',
                            margin: "auto",
                  maxWidth: 1200,
                  flexGrow: 1,             
                }}
              >
             
                <Grid container spacing={4}>
                <Grid item  display= 'flex' justifyContent="center" alignItems="center"  > 
                <div onClick={() => removeItem(mydata.id)}> <CloseOutlinedIcon /> </div>
                </Grid>
                <Grid item  display="flex"
                justifyContent="center" alignItems="center"  > <div><FavoriteBorderOutlinedIcon/></div></Grid>
                   
                  <Grid item display="flex"
                  justifyContent="space-evenly" >
              
                    <ButtonBase sx={{ width: 200, height: 140 }}>
                      <Img alt="complex" sx={{width:'180px',height:'150px'}} src={mydata.thumbnail} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container sx>
                    <Grid item xs container direction="column" spacing={7}>
                      <Grid item xs display= 'flex' justifyContent="center" alignItems="center"  >
                      
                      <Typography variant="subtitle1" component="div">
                      {mydata.title}
                    </Typography>
                  
                        <br/>
                      
                      </Grid>
               
                    </Grid>
                    <Grid item xs={12} sm container display='flex' justifyContent="center" alignItems="center">
                      <div >
                          <button style={{borderRadius: '50%'}} onClick={() => increaseItem(mydata)}> +   </button>&nbsp;&nbsp;
                             <span>   {mydata.quantity}</span> &nbsp;&nbsp;
                          <button style={{borderRadius: '50%'}} onClick={() => decreaseItem(mydata)} > - </button>
                        </div>
                        </Grid>
                    <Grid item display='flex' justifyContent="center" alignItems="center">
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ width: 80,height:28 }}
                      >
                       
                      
                     ${mydata.quantity * mydata.price}
                      </Typography>
                    </Grid>               
                  </Grid>
                  <Grid>
                 
                  </Grid>
                </Grid>
              </Paper>
             
            </div>
          );
        })}
   <div  style={{display:'flex', justifyContent:"end" , width:'95%' }}>
        <Box sx={{width:'30%'}}  >
        <AppBar position="static">
          <Toolbar>
            <h2 style={{ flexGrow: 1 }}>
             Total Price
            </h2>
            
            <h2 sx={{paddingRight:'25px'}} >{ar.reduce((total, mydata)=>total+(mydata.price*mydata.quantity),0)}</h2>
          
          </Toolbar>
        </AppBar>
      </Box>
      </div>
      <div style={{display:'flex',justifyContent:"end", width:'95%'}} >
      <Button> <Link to="/"> <h2>  Continue.... </h2> </Link>  </Button>
      </div>
      </div>
    
  );
      }
export default Cart;
