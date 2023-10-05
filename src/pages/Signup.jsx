import React from 'react'
//import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import styled from "styled-components";
import { useState } from 'react';



export default function Signup() {
   const [showPassword,setShowPassword] = useState(false);
  return <Container showPassword={showPassword}>
    <BackgroundImage />
    <div className="content">
    <Header login />
    <div className="body flex column a-center j-center">
        <div className="text flex column">
            <h1>Unlimited Entertainment At Your Fingertips</h1>
            <h3> Watch What Your Heart Pleases Limitlessly
            </h3>
            <h6>
                Ready to watch? Enter your email to create new account
            </h6>
        </div>
        <div className="form">
            <input type="email" placeholder="Email Adress" name="email" />
            {
                showPassword && <input type="password" placeholder="Password" name="password" />
            }
            {
                !showPassword && <button onClick={()=> setShowPassword(true)}>Get Started</button>
            }
        </div>
        <button>Log In</button>
    </div>
    </div>
  </Container>


  
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 50px;
        text-align: center;
        font-size: 1.6rem;
        h1 {
          padding: 0.25rem;
          margin-bottom: 30px;
        }
      }
      .form {
        display: grid;
       
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

