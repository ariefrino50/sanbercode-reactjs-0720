import React, {Component} from 'react'
import Timer from './timer'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        if (this.props.start !== undefined) {
            this.setState({date: this.props.start})
        }
    }

    render(){
        return(
          <>
            <table style={{width: "60%",margin: "0 auto"}}>
          <tbody>
            <tr>
                <td><h1 style={{textAlign: "center"}}>sekarang jam : {this.state.date}</h1></td>
                <td><Timer></Timer></td>
            </tr>
          </tbody>
        </table>
          </>
        )
      }
}

export default Clock