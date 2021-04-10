import React, { Component } from 'react'
import './visualizer.css';




export default class visualizer extends Component {
   constructor(props) {
       super(props)
       this.state = {
           array: []
       };
   }

   componentDidMount(){
       this.resetArray();
   }
    resetArray() {
        const array = [];
        for (let i = 0; i < 300; i++){
            array.push(randomIntFromInterval(10, 650));
            // console.log(array)
        }
        this.setState({array : array})
    }
   
    render() {
        const {array} = this.state;
        return (
            <React.Fragment>
            <div className="container">
           {
            array.map((val,idx) => {
                return <div className='bar' key={idx} style={{height: `${val}px`}}>  </div>
                })
            }
            </div>
            <div class="button">
                <button onClick = {() => this.resetArray()}> New Array</button>
            </div>
            </React.Fragment>
        )
    }
}

const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max -min + 1) + min);
    }
