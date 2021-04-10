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
        for (let i = 0; i < 100; i++){
            array.push(randomIntFromInterval(5, 1000));
            // console.log(array)
        }
        this.setState({array : array})
    }
   
    render() {
        const {array} = this.state;
        return (
            <div>
           {
            array.map((val,idx) => {
                return <div className='bar' key={idx} style={{width: `${val}px`}}> {val} </div>
                })
            }
            </div>
        )
    }
}

const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max -min + 1) + min);
    }
