import React, { Component } from 'react'

export class Message extends Component {
    constructor() {
        super();
        this.state = {
           message:"Belum di Klik",
        };
      }
      ubahText(){
        this.setState ({
            message:"Sudah di Klik",
        });
      }
  
    render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.ubahText()}>Klik me</button>
      </div>
    )
  }
}

export default Message