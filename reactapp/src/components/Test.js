import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        this.state ={
            a: 10
        };
        console.log("Constructor");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("ShouldComponentUpdate");
        return true;
    }
    

    componentDidMount() {
        console.log("ComponentDidMount");
        this.setState({
            a: 20
        });
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate");
    }
    

    render() {
        console.log("Render")
        return (
            <div>
                
            </div>
        )
    }
}


export default Test;