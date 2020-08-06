import React, {Component} from'react';

class Jam extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            time: 100
        }
    }


    componentDidMount(){
        if(this.props.start !== undefined){
            this.setState({time: this.props.start})
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentDidUpdate(){
        if(this.state.time < 0){
            this.componentWillUnmount()
        }
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
           date: new Date(),
           time: this.state.time - 1
        })
    }

    render(){
        return(
            <>
            {
                this.state.time > 0 &&
                <div style={{width:"800px",margin:"auto"}}>
                    <h2 style={{float:'left'}}>Sekarang jam : {this.state.date.toLocaleTimeString()}</h2>
            <h2 style={{float:"right"}}>Hitungan mundur : {this.state.time}</h2>
                </div>
            }
            </>
        )
    }
}

export default Jam;