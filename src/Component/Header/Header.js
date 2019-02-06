import React, {Component} from 'react';

export default class Header extends Component{


  render(){
    console.log("props in child", this.props);
    return(
      <div>
        {(this.props.dataArray.map((data, index) => {
          return(
            <div key={index}>
              <p>{data.name}</p>
              
              <p>{data.mobile}</p>

            </div>
          );
        }))}
      </div>

    );
  }
}
