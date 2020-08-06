import React, { Component } from "react"

// Perubahan
class BuahBuahan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 }
      ],
      inputName: {
        nama: '',
        harga: '',
        berat: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target)
    // this.setState({
    //   inputName: {
    //     nama: event.target.v,
    //     harga: event.target.value,
    //     berat: event.target.value
    //   }
    // });
  }

  handleSubmit(event) {
    event.preventDefault()
    // console.log(this.state.inputName.nama)
    console.log(event.target.value)
    // this.setState({
    //   dataHargaBuah: [...this.state.dataHargaBuah, this.state.inputName],
    //   inputName: ''
    // })
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>Tabel Harga Buah</h1>
          <table>
            <thead>
              <tr>
                <td>Nama</td>
                <td>Harga</td>
                <td>Berat</td>
              </tr>
            </thead>
            <tbody>
              {this.state.dataHargaBuah.map((el, index) => {
                return (
                  <tr key={index}>
                    <td> {el.nama} </td>
                    <td> {el.harga}</td>
                    <td> {el.berat / 1000 + ' kg'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <h1>Form Peserta</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Masukkan Buah:</label>
          <input type="text" inputnama={this.state.inputName.nama} onChange={this.handleChange} />
          <label>Masukkan Harga:</label>
          <input type="text" inputharga={this.state.inputName.harga} onChange={this.handleChange} />
          <label>Masukkan Berat Buah:</label>
          <input type="text" inputberat={this.state.inputName.berat} onChange={this.handleChange} /> <br />
          <button>submit</button>
        </form>

        <h4>Maaf belom beres bang,, nanti diberesin...</h4>

      </>
    )
  }
}


export default BuahBuahan

