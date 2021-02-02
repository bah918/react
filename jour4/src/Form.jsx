import React from "react";

class Form extends React.Component {
  render() {
    return (
          
        
        <form className="form-group needs-validation container-fluid">
            <h2 className="text-center">LOGIN</h2>
            <div className="row">
                 <div className="col-8">
                   <label for="floatingInput">Email address</label>
                   <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                 </div>
            </div>
            <div className="row">
              <div className="col-8">
                <label for="floatingPassword">Password</label>
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
              </div>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button class="btn btn-primary" type="button">Button</button>
            
         </form>
       );
  }
}
export default Form;

