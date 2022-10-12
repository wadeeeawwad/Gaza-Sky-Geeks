import React,{Component} from 'react'

class Oclock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
this.setState({
    time:new Date().toLocaleTimeString()
})
        },1000)
    }
    render(){
        return (
            <div className='oclock'>  
            {this.state.time}
            </div>
          )
        }

    }


export default Oclock