import React from "react";

class Form extends React.Component {
  render() {
    return (

         <div className="container">
             <h2 className="text-center">Login</h2>
             <p>Adresse mail</p>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <p>password</p>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
         </div>

       );
  }
}
export default Form;

