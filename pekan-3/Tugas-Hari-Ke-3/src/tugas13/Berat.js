import React, { Component } from 'react'


class Berat extends Component {
    render() {
        let g = this.props.berat
        let kg = g/1000
        return <td>{kg} kg</td>
    }
}


export default Berat