import React, { PureComponent} from 'react'

class Pure extends PureComponent{
    constructor(){
        super();
        this.state = {
            data:10
        }
    }
    render(){
        console.warn(this.state);
        return(
            <div>
                <h1>Pure Component : {this.state.data}</h1>
                <button onClick={() => {this.setState({data:20})}}>Update state</button>

            </div>
        )
    }
}

export default Pure