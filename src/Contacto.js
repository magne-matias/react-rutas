import React, { useState } from 'react'



const Contacto = () =>{
  const [data, setData]= useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
    date:"",
  });

  const InputEvent=(event)=>{
    const{name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
  };

  const formSubmit=(e) =>{
    e.preventDefault();
    alert(
      `my name is ${data.fullname} and I was born in ${data.date}. my mobile number is ${data.phone} and email is ${data.email}, Here is what i want to say ${data.msg}`
    )
  };

    return (
        <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit} >
                <div class="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">FullName</label>
                  <input name="fullname" value={data.fullname} onChange={InputEvent} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                </div>
                
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Date of Birth</label>
                        <input name="date" value={data.date} onChange={InputEvent} type="date" id="exampleFormControlInput1" className="form-control"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Phone</label>
                  <input name="phone" value={data.phone} onChange={InputEvent} type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile number"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input name="email" value={data.email} onChange={InputEvent} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea name="msg" value={data.msg} onChange={InputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </>
    );
  };
  
export default Contacto;
