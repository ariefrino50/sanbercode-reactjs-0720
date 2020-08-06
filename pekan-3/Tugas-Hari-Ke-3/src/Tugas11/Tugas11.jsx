import React from 'react';
import './tugas11.css';

class BuahBuahan extends React.Component{
    render(){
        return(
            <>
                {this.props.nama}
                {this.props.harga}
                {this.props.berat}
            </>
        )
    }

}

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]
  class DaftarBuah extends React.Component{
      render(){
          return(
              <>
              {dataHargaBuah.map(buah => {
                  return(
                      <tr>
                          <td><BuahBuahan nama={buah.nama}/></td>
                          <td><BuahBuahan nama={buah.harga}/></td>
                          <td><BuahBuahan nama={buah.berat / 1000 + 'kg'}/></td>
                      </tr>
                  )
                  })}
              </>
          )
      }
  }

  function App(){
      return(
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
                      <DaftarBuah />
                  </tbody>
              </table>
          </div>
      );
  }

  export default App;