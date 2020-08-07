import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Style.css'


const Hooks = () => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [inputNama, setInputNama] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState(0)
    const [selectedId, setSelectedId] = useState(0)
    const [statusForm, setStatusForm]  =  useState("create")

    useEffect( () => {
        if (dataHargaBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataHargaBuah(res.data.map(db => { return {id: db.id, nama: db.name, harga: db.price, berat: db.weight}}))
            })
        }
    }, [dataHargaBuah]
    
    )

    const handleChange = (event) => {
        let tipe = event.target.name
        switch (tipe) {
            case "nama": {setInputNama(event.target.value); break;}
            case "harga": {setInputHarga(event.target.value); break;}
            case "berat": {setInputBerat(event.target.value); break;}        
            default:
                {break;} 
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let name = inputNama
        let price = inputHarga
        let weight = inputBerat 

        
        if (name.replace(/\s/g,'') !== "" && price.replace(/\s/g,'') !== "") {
                if (statusForm === "create") {
                    axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
                    .then(res => {
                        setDataHargaBuah([...dataHargaBuah, {id: res.data.id, nama: name, harga: price, berat: weight}])
                    })
                }else if (statusForm === "edit"){
                    axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
                    .then(res => {
                        let editdataHargaBuah = dataHargaBuah.find(db => db.id === selectedId)
                        editdataHargaBuah.nama = name
                        editdataHargaBuah.harga = price
                        editdataHargaBuah.berat = weight
                        setDataHargaBuah([...dataHargaBuah])
                    })
                }

                setStatusForm("create")
                setSelectedId(0)
                setInputNama("")
                setInputHarga("")
                setInputBerat(0)
        }
    }

    const handleEdit = (event) => {
        let index = parseInt(event.target.value)
        let buah = dataHargaBuah.find(db => db.id === index)
        setInputNama(buah.nama)
        setInputHarga(buah.harga)
        setInputBerat(buah.berat)
        setSelectedId(index)
        setStatusForm("edit")
    
    }

    const handleDelete = (event) => {
        let index = parseInt(event.target.value)
        let newDataHargaBuah = dataHargaBuah.filter(db => db.id !== index)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${index}`)
        .then(res => {
            console.log(res)
        })

        setDataHargaBuah([...newDataHargaBuah])

    }

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
                                dataHargaBuah !== null && dataHargaBuah.map((db, index) =>{

                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td> 
                                            <td>{db.nama}</td>                                            
                                            <td>{db.harga}</td>                                            
                                            <td>{db.berat/1000} kg</td>                                            
                                            <td>
                                                <div style={{textAlign: "center"}}>
                                                <button onClick={handleEdit} value={db.id}>Edit</button>
                                                &nbsp;
                                                <button onClick={handleDelete} value={db.id}>Delete</button>
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
                        <form onSubmit={handleSubmit}>
                            <label>Nama Buah : </label> 
                            <input type="text" name="nama" value={inputNama} onChange={handleChange}/>
                            <label>Harga Buah : </label>
                            <input type="text" name="harga" value={inputHarga} onChange={handleChange}/>
                            <label>Berat Buah : </label>
                            <input type="text" name="berat" value={inputBerat} onChange={handleChange}/>
                            <button class="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
}


export default Hooks
