import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    
    render() {
       let relatives=["amjad","arshad","aijaz"];  
        return(
            <div id="main">
               {/* Do not remove the main div */}
            <ol key="relativeList">
             
             {relatives.map((el,index)=>
                <li key={"relativeListItem"+(index+1)}>{el}</li>)}
             </ol>
            
            </div>
        )
    }
}


export default App;
