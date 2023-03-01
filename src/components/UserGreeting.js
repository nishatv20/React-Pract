import React, { Component } from 'react'

  class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }

    render() {
return this.state.isLoggedIn && <div>Welcome to Vegas</div>
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Nishat</div> :
        //     <div>Welcome Guest</div>
        // )
        }
    }
  export default UserGreeting 
   

//   render() {
//     // if(this.state.isLoggedIn) {
//     //     return (
//     //         <div>
//     //             Welcome Nishat !
//     //         </div>
//     //     )
//     // }
//     // else{
//     //     return (
//     //         <div>
//     //             Welcome Guest !
//     //         </div>
//     //     )
//     }
//     // return ( 
//     //     <div>
//     //         <div> Welcome Nishat ! </div>
//     //         <div> Welcome Guest </div>
//     //     </div>
      
//     // )
//   }
//}
