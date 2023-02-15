import React from "react";

const Footer =()=>{
    const date = new Date().getFullYear();

    return(
        <>
          <footer className="w-100 bg-light text-center">
          <p> ©️ {date} Rupesh . All Right Reserved | Terms and Conditions </p>

          </footer>  
        </>
    )
};

export default Footer ;