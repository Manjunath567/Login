import './reg.css';
import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
     this.state = {
        name :'',
        email : '',
        password :'',
        pswrepeat :'',
        isEror:''
     };
      this.setReg = (e, param) => {
        switch (param) {
          case 'name':
                this.setState({ name:e.target.value});
                break;
          case 'email':
                this.setState({ email:e.target.value});
                break;
          case 'password':
                this.setState({ password:e.target.value});
                break;
          case 'pswrepeat':
                this.setState({ pswrepeat:e.target.value});
                break;
          default:
            break;
        }
      }
      this.Register = () => {
        alert("hi");
        const uname = this.state.name;
        const mail = this.state.email;
        const pass = this.state.password;
        if(!uname){
            this.setState({ isEror: ' name is Mandatory' });
        } else if(!mail){
              this.setState({ isEror: ' email is Mandatory' });
        } else if(mail.indexOf("@") === -1){
                    this.setState({ isEror: ' require valid mail' });
        }
        else if(!pass){
                this.setState({ isEror: 'password is mandatory' });
        }
      }

  }

  render (){
    return (
      <main className="reg">
        <div className="main">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <label ><b>USER Name</b></label>
        <input className="reg_input" type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={(e) => this.setReg(e, 'name')}/>

        <label ><b>Email</b></label>
        <input className="reg_input" type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={(e) => this.setReg(e, 'email')} />

        <label><b>Password</b></label>
        <input className="reg_input" type="password" placeholder="Enter Password" name="psw" value={this.state.psw} onChange={(e) => this.setReg(e, 'psw')}/>

        <label ><b>Repeat Password</b></label>
        <input className="reg_input" type="password" placeholder="Repeat Password" name="pswrepeat" value={this.state.pswrepeat} onChange={(e) => this.setReg(e, 'pswrepeat')}/>

        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

        <button type="submit" className="reg_submimt" className="registerbtn" onClick={() => this.Register()}>Register</button>
          <div><span className="reg_error">{this.state.isEror}</span></div>

      <div className="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
      </div>
      </main>
    );

  }
}

export default Register;
