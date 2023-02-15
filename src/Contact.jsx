import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        fname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent = (event)=>{
        const {name,value} = event.target;
        
        setData((preVal) => {
            return {
                ...preVal,
                [name] :value,
            };
        });
    };

    const formSubmit =(e) =>{
        e.preventDefault();
        alert(
            `My name is ${data.fname}. My mobile number is ${data.phone}. and Email Id is ${data.email}, Here is my feedback ${data.msg}`);
    };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div class="mb-3">
                <label for="enteryourname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Full Name"
                  id="enteryourname"
                  name="fname"
                  value= {data.fname}
                  onChange={InputEvent}
                />
                </div>
            <div class="mb-3">
                <label for="enteryournumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="num"
                  class="form-control"
                  placeholder="Mobile number"
                  id="enteryournumber"
                  name="phone"
                  value= {data.phone}
                  onChange={InputEvent}

                />
                </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value= {data.email}
                  onChange={InputEvent}
                />
               
              </div>
              <div class="mb-5">
                <label for="floatingTextarea2" class="form-label">
                  Feedback
                </label>
                <div class="form-floating">
  <textarea className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            name="msg"
            value= {data.msg}
            onChange={InputEvent} ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
              </div>
              
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
