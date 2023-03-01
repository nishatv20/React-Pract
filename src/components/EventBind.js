import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    
   

    // clickHandler() {
    //     this.setState ({
    //         message : "Good-Bye"
    //     })
    // }
    clickHandler = () => {
        this.setState ({
            message : 'Goodbye !'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
        {/* Both above has performance implications  */}
        {/* So now we will bind event Handler in Constructor Function is the BEST Method Acc TO REACT DOCUMENTATION */}
        <button onClick={this.clickHandler}>Click</button>
      </div>

    )
  }
}

export default EventBind