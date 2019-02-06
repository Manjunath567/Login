import React, { Component } from 'react';
//import MyButton from '../utils/MyButton';
//import Zoom from 'react-reveal/Zoom';

class Register extends Component {
  constructor() {
      super();
    this.state = {
          price: [10,20,30],
          username: ['mnju','mahi','madiwal'],
          desc: ['good','bad','lastname']
    };

    this.showBoxes = () => (
        this.state.price.map((index,i)=>(
            <div >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{this.state.price[i]}</span>
                            <span>{this.state.username[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                        </div>
                    </div>
                </div>
            </div>
        ))

    )
}
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Register;
