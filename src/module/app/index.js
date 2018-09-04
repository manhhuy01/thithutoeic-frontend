import React from 'react';
import axios from 'axios';
class App extends React.Component{
    constructor(){
        super();
        
    }
    componentDidMount(){
        axios.get('/api/example')
        .then(function(response){
            console.log(response)
        })
    }
    render(){
        return(
            <div>
                Hello world huy
            </div>
        )
    }
}

export default App;