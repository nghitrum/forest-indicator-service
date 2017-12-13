import React, { Component } from 'react';
import "./form.scss";

class Modal extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      fields: {},
      errors: {}
    }
  }
  
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
    }
    
    if(typeof fields["name"] !== "undefined"){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only letters";
      }      	
    }
    
    //Email
    if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
    }
    
    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
      }
    }
    
    

    this.setState({errors: errors});
    return formIsValid;
  }
  
  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }else{
      alert("Form has errors.")
    }
    
  }
  
  handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }
  
  render(){
    const { closeModal } = this.props;

    return (
      <div>        	
        <form name="feedback" className="jumbotron" style={{position: 'absolute', width: '100%', top: 0, height: 500}} onSubmit= {this.contactSubmit.bind(this)} action="mailto:metsamittari@luke.fi" method="post" enctype="text/plain">
        <h1>Feedback system</h1>

        <div className="col-md-6">
          <fieldset>
            <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
            <br/>
            <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
            <span style={{color: "red"}}>{this.state.errors["email"]}</span>        
          </fieldset>
        </div>
        <div className="col-md-6">
          <fieldset>
            <textarea refs="message" cols="40" rows="10"
          className="comments" placeholder="Your feedback" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
          </fieldset>
        </div>
        <div className="col-md-12">
          <fieldset>
            <button className="btn btn-md btn-primary" id="submit"
          value="Submit">Submit</button>
          </fieldset>
        </div>
        <div className="col-md-12">
          <fieldset>
          <button 
          onClick={closeModal}
          >Cancel</button>
          </fieldset>
        </div>

         
        
        </form>
      </div>
    )
  }
}

export default Modal;