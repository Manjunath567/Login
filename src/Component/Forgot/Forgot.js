import React, { Component } from 'react';
import Child from './Child';
import axios from 'axios';
import './for.css';
class Service extends Component {
  constructor() {
      super();
      this.state = {
        person:[],
        loading: false
      };
      this.click = (e) => {
        console.log('here');
      };
  }

componentDidMount(){
    this.setState({ loading: true });
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>{
       this.setState({person:res.data.slice(0,10), loading: false});
    });
  }

//onSearchsubmit (term){
  //  console.log(term);
//}
  render() {
     return (
        <div>
          <Child
            onSubmit={this.onSearchsubmit}
            data={this.state.person}
          />
         {
             this.state.loading &&
               <div className="loading-overlay" >Loading...</div>
             }
             {
               !this.state.loading &&
               <div>
               { console.log(this.state.person) }
                 {
                   this.state.person.map((person, index) => (
                    <div className="container">
                      <div className="jumbotron">
                            <div key={index} key= {person.id}>
                              <h4 className="titl text-danger">{person.title} </h4>
                              <p className ="main text-justify"> {person.body} </p>
                            </div>
                        </div>
                    </div>
                  ))
                }
                </div>
             }
        </div>
     );
   }
};

export default Service;
/*
import React, { Component } from 'react';
//import Child from './Child';
import axios from 'axios';
class Service extends Component {
  constructor() {
      super();
      this.state = {
        person:[]
      //  loading: false
      };
      this.click = (e) => {
        console.log('here');
      };
  }

componentDidMount(){
    this.setState({ loading: true });
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>{
      console.log(res);
       this.setState({
         person:res.data.slice(0,10)
       });
    });
  }


  render() {
    console.log(this.state.person);
     const { person } = this.state;
     const { personlist}= person.length ? (
        person.map(post =>{
          return (
            <div className="" key={post.id}>
              <span> {post.title} </span>
              <p> {post.body} </p>
            </div>
          )
        })
     ):(
       <div className="center">    no posts      </div>
     )
     return (
       <div>  { personlist }  </div>
     )
}
}

export default Service;
*/
