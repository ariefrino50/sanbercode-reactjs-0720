import React, { Component } from 'react';
import Nama from './Nama';
import Harga from './Harga';
import Berat from './Berat';
import './Tabel.css';



class DaftarBuah extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataHargaBuah : [
                {nama : "Semangka", harga : 10000, berat : 1000},
                {nama : "Anggur", harga : 40000, berat : 500},
                {nama : "Strawberry", harga : 30000, berat : 400},
                {nama : "Jeruk", harga : 30000, berat : 1000},
                {nama : "Mangga", harga : 30000, berat : 500}
            ],
            input : {
                nama : "",
                harga : "",
                berat : ""
            },
            indexOfFrom : -1
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(event) {
        let input = {...this.state.input}
        input[event.target.name] = event.target.value
        this.setState({
            input
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        let input = this.state.input
        if (input['nama'].replace(/\s/g, '') !== '' && input['harga'].toString().replace(/\s/g, '') !== "" && input['berat'].toString().replace(/\s/g, '' !== "")) 
            {
                let newDaftarBuah = this.state.dataHargaBuah
                let index = this.state.indexOfFrom
                console.log(index)

                if (index === -1) {
                    newDaftarBuah = [...newDaftarBuah, input]
                }else {
                    newDaftarBuah[index] = input
                }
                this.setState({
                    dataHargaBuah: newDaftarBuah,
                    input :{
                        nama : "",
                        harga : "",
                        berat : ""
                    },
                    indexOfFrom : -1
                })
            }
        }
        
        handleEdit(event){
            let index = event.target.value
            let buah = this.state.dataHargaBuah[index]
            this.setState({
                input :{
                    nama : buah.nama,
                    harga : buah.harga,
                    berat : buah.berat
                },
                indexOfFrom : index
            })
        }

handleDelete(event) {
    let index = event.target.value
    let newDaftarBuah = this.state.dataHargaBuah
    let editDaftarBuah = newDaftarBuah[this.state.indexOfFrom]
    newDaftarBuah.splice(index, 1)

    if (editDaftarBuah !== undefined) {
        var newIndex = newDaftarBuah.findIndex((db) => db === editDaftarBuah)
        this.setState({dataHargaBuah: newDaftarBuah, indexOfFrom : newIndex})
    }else {
        this.setState({dataHargaBuah : newDaftarBuah})
    }
}

    render() {
        return (
            <>
                <div class="container">
                <h1>Tabel Harga Buah</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Berat</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.dataHargaBuah.map((db, index) =>{
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>                                            
                                            <Nama nama={db.nama}/>
                                            <Harga harga={db.harga}/>
                                            <Berat berat={db.berat}/>
                                            <td>
                                                <div style={{textAlign: "center"}}>
                                                <button onClick={this.handleEdit} value={index}>Edit</button>
                                                &nbsp;
                                                <button onClick={this.handleDelete} value={index}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div class="form_content">
                    <h1>Form Buah</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>Nama Buah : </label> 
                            <input type="text" name="nama" value={this.state.input.nama} onChange={this.handleChange}/>
                            <label>Harga Buah : </label>
                            <input type="text" name="harga" value={this.state.input.harga} onChange={this.handleChange}/>
                            <label>Berat Buah : </label>
                            <input type="text" name="berat" value={this.state.input.berat} onChange={this.handleChange}/>
                            <button class="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default DaftarBuah
