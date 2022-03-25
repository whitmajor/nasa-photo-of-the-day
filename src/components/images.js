import React from "react";
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledNasaPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
      color: #fff;
      font-size: 48px;
   
  }
  p{
margin-top: 24px;
max-width: 600px;
color: #fff;
font-size: 24px;
  }

`

const NasaPhoto = (props) =>{
    return(
<StyledNasaPhoto className = "nasa-photo-wrapper">
    <h3>{props.photo.title}</h3>
    <p> {props.photo.date} </p>

    <img src = {props.photo.hdurl} alt= {props.photo.title} />
    <p className="explanation"> {props.photo.explanation}</p>
</StyledNasaPhoto>
    )
}
export default NasaPhoto