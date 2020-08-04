import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500},
  ]


  const ListDaftar = (daftar, index) => {
    return(
      <tr key={index}>
        <td>{daftar.nama}</td>
        <td>{daftar.harga}</td>
        <td>{daftar.berat}</td>
      </tr>
    )
  }


  return (
    <div className="App">
      <h1>Tabel Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>
        </thead>
        <tbody>
          {dataHargaBuah.map(ListDaftar)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
