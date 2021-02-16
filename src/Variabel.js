// import React from 'react';
// const Variabel = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Variabel;



import React, { Component } from 'react'
import "./Variabel.css"

export default class Perubahan extends Component {
    state={
      
    }
   
    render() {
        return (
        <div className="abc">
            <div>
           <button onClick={() => this.setState({c: 'Klik'})}>Klik</button>
           <button onClick={() => this.setState({c: 'Everybody'})}>Klik Aku Juga</button>
           <button onClick={() => this.setState({c: 'Thanks'})}>Klik Aku Woyyy</button>
           <button onClick={() => this.setState({c: 'Kosong'})}>Kosong</button>


           
           </div>
           <div className="b">     
           {this.state.c ==='Klik' && <Hello /> }
           {this.state.c ==='Everybody' && <EveryBody />}
           {this.state.c ==='Thanks' && <p>Thanks</p>}
           {this.state.c ==='Kosong' && <p></p>}
           </div>

        </div>    
        )
    }
}

 class Hello extends Component {
    render() {
        return (
           <p>Hello Guys David di sini</p>
        )
    }
}

 class EveryBody extends Component {
    render() {
        return (
           <p>Hello Every body</p>
        )
    }
}

