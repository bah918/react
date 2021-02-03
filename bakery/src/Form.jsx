import React from "react";


export class Form extends React.Component {
  render() {
    return(
        <form className="form-group needs-validation container-fluid">
           <div>
                                <div>Bakery</div>
                <button type="button" class="btn btn-outline-primary">add</button>
                <button type="button" class="btn btn-outline-secondary">List</button>
                <button type="button" class="btn btn-outline-success">Pay</button>
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                <span class="input-group-text" id="basic-addon1">add</span>
                </div>
           </div>
        </form>
    );
    
  }
}

export default Form;