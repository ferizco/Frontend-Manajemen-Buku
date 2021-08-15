import React from "react";

function Beranda({bookList}) {

    console.log(bookList);
  return (
    <div className="container mt-3 w-75">
      <h1 className="text-center">selamat datang di toko buku ferizco</h1>
      <div id="katalogBuku" className="mt-5">
          <h2>Katalog Buku</h2>
          <hr />
        <table className="table table-hover table-bordered">
        <thead>
            <tr>
                <th>No.</th>
                <th>Judul</th>
                <th>Pengarang</th>
                <th>Harga</th>
                <th>Stok</th>
            </tr>
        </thead>
        <tbody>
            {bookList.map((book, index) => (
                <tr key={book._id}>
                    <td>{index + 1}</td>
                    <td>{book.judul}</td>
                    <td>{book.pengarang}</td>
                    <td>{book.harga}</td>
                    <td>{book.stok}</td>
                </tr>
            ))
            }
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default Beranda;
