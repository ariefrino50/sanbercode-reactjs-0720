import React from 'react';
import logo from './logo.svg';
import './App.css';

//formnya nih
function App() {
  return (
    <div className="App">
      <h1> FORM PEMBELIAN BUAH</h1>
      <form action="" method="get" class="left">
        <table cellspacing="10" cellpadding="3">
          <tr>
            <td><label for="name" class="bold">Nama Pelanggan</label></td>
            <td><input type="text" id="name"></input></td>
          </tr>

          <tr>
            <td> <br /> <br /> <br /> <br /><label for="item" class="bold">Daftar Item</label></td>
            <td>
              <input type="checkbox" /><label>Semangka</label><br />
              <input type="checkbox" /><label>Jeruk</label> <br />
              <input type="checkbox" /><label>Nanas</label><br />
              <input type="checkbox" /><label>Salak</label> <br />
              <input type="checkbox" /><label>Anggur</label> <br />
            </td>
          </tr>

          <tr>
            <button type="submit" class="button">Kirim</button>
          </tr>
        </table>
      </form>
    </div >
  );
}

export default App;
