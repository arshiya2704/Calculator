import React, { Component } from 'react';
import './App.css';
import * as API from './api/API';

class App extends Component {
    constructor() {
        super();
        this.state = {
            numbers: {
                num: []
            }
        };
    }
    edit(value) {
        this.setState({
            numbers: {
                num: [...this.state.numbers.num, value],
            }

        });
        console.info(this.state.numbers.num);
    }
    pop(){
        this.setState({
            numbers: {
                num: 0
            }
        });
    }
   handleOperator = () => {
        API.operate(this.state.numbers.num)
            .then((res) => {
            console.log(res);
            this.pop();
            this.edit(res.result);
            });
   };
  render() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col xs={4} sm={4} md={4} lg={4}">
                    <h2 className="text-center">Calculator</h2>
                </div>
            </div>
            <hr/>
            <div className="card card-size mx-auto p-5">
                <div className="card-block"><br/>
                    {this.state.numbers.num}
                    <hr/>
                    <div className="btn-toolbar">
                        <button className="btn btn-light btn-circle btn-cl" type="button" onClick={() => {this.pop();}}>AC</button>
                        <button className="btn btn-warning btn-circle btn-xl" type="button" onClick={() => {this.edit('/');}}>/</button>
                    </div>
                    <div className="btn-toolbar">
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(7);}}>7</button>
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(8);}}>8</button>
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(9);}}>9</button>
                        <button className="btn btn-warning btn-circle btn-xl" type="button" onClick={() => {this.edit('*');}}>*</button>
                    </div>
                    <div className="btn-toolbar">
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(4);}}>4</button>
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(5);}}>5</button>
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(6);}}>6</button>
                        <button className="btn btn-warning btn-circle btn-xl" type="button" onClick={() => {this.edit('-');}}>-</button>
                    </div>
                    <div className="btn-toolbar">
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(1);}}>1</button>
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(2);}}>2</button>
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit(3);}}>3</button>
                        <button className="btn btn-warning btn-circle btn-xl" type="button" onClick={() => {this.edit('+');}}>+</button>
                    </div>
                    <div className="btn-toolbar">
                        <button className="btn btn-secondary btn-circle btn-z" type="button" onClick={() => {this.edit(0);}}>0</button>
                        <button className="btn btn-secondary btn-circle btn-xl" type="button" onClick={() => {this.edit('.');}}>.</button>
                        <button className="btn btn-warning btn-circle btn-xl" type="button" onClick={() => {this.handleOperator();}}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
