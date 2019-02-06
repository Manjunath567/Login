import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
//import axios from 'axios';
import Header from '../Header/Header';
import './Home.css';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      mobile: "",
      objectData: {},
      arrayData: []
    }

}
getName(e){
  this.setState({
    name: e.target.value
  })
}

getEmail(e){
  this.setState({
    email: e.target.value
  })
}

getMobile(e){
  this.setState({
    mobile: e.target.value
  })
}

getDob(e){
  this.setState({
    dob: e.target.value
  })
}

getUserData(e){
  e.preventDefault();
  this.state.objectData['name'] = this.state.name;

  this.state.objectData['mobile'] = this.state.mobile;

  this.setState({
    objectData: this.state.objectData
  }, () =>{ // syncrnous function
    console.log(this.state.objectData)
    this.state.arrayData.push(this.state.objectData);
    this.setState({
      arrayData: this.state.arrayData
    }, () =>{ //
      console.log(this.state.arrayData)
      this.state.name = "";
      this.state.mobile = "";
      this.state.objectData ={};
      this.setState({ // updating the setState
        name: this.state.name,
        mobile: this.state.mobile,
        objectData: this.state.objectData
      })
    })
  })
}


  render(){
    return(
      <div className="additems">
        Home Component is rendered welcome to react js claas
      <form onSubmit={this.getUserData.bind(this)}>
     Product Name:  <input type="text"
                    className="item-input"
                    placeholder="pName"  value={this.state.name} onChange={this.getName.bind(this)} />
        Product price :  <input
                    className="item-input"
                    placeholder="price" type="number" value={this.state.mobile} placeholder="Name here...." onChange={this.getMobile.bind(this)} />
        <button type="submit">Submit</button>
      </form>
      <Header dataArray={this.state.arrayData} />
      </div>

    );
  }
}
