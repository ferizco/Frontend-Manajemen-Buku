import React from "react";
import {useState} from "react";
function ManajemenBuku({bookList, store, update, remove}) {

    const [inputBook, setInputBook] = useState();
    const [form, setForm] = useState();

    function handleJudul(event){
        setInputBook({ ...inputBook, judul: event.target.value});
    }
    function handlePengarang(event){
        setInputBook({ ...inputBook, pengarang: event.target.value});
    }
    function handleHarga(event){
        setInputBook({ ...inputBook, harga: event.target.value});
    }
    function handleStok(event){
        setInputBook({ ...inputBook, stok: event.target.value});
    }
    function submitAdd(event){
        event.preventDefault();
        store(inputBook);
    }
    function showCreate(){
        setForm("create");
    }
    function showEdit(book){
        setInputBook(book)
        setForm("edit")
    }
    function submitChange(event){
        event.preventDefault();
        update(inputBook);
        setForm("");
    }
    function deleteBook(book){
        remove(book);
    }
    
    console.log(bookList);

    return(
        <div className="container">
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>
            {form === "create" && (
            <div id="formTambah">
                <h5>Tambah Buku</h5>
                <hr/>
                <form className="row" onSubmit={submitAdd}>
                    <div className="col-3">
                        <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul} />
                        
                    </div>
                    <div className="col-3">
                        <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang} />
                    </div>
                    <div className="col-2">
                        <input type="text" name="harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga} />
                    </div>
                    <div className="col-2">
                        <input type="number" name="stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok} />
                    </div>
                    <div className="col-2">
                        <input type="submit" className="btn btn-primary ml-5" value="Simpan" />
                    </div>
                </form>
            </div> )}
            {form === "edit" && (
            <div id="formUbah">
                <h5>Ubah Buku</h5>
                <hr />
                <form className="row" onSubmit={submitChange}>
                    <div className="col-3">
                        <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul} value={inputBook.judul} />
                    </div>
                    <div className="col-3">
                        <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang} value={inputBook.pengarang} />
                    </div>
                    <div className="col-2">
                        <input type="text" name="harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga} value={inputBook.harga} />
                    </div>
                    <div className="col-2">
                        <input type="number" name="stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok} value={inputBook.stok} />
                    </div>
                    <div className="col-2">
                        <input type="submit" className="btn btn-primary ml-5" value="Simpan" />
                    </div>
                </form>
            </div>
            )}
            <div id="daftarBuku">
            <h2 className="mt-3">Daftar Buku</h2>
            <hr/>
            <button className="btn btn-primary m-2" onClick={showCreate}>Tambah Buku</button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.judul}</td>
                            <td>{book.pengarang}</td>
                            <td>{book.harga}</td>
                            <td>{book.stok}</td>
                            <td >
                                <button type="button" className="btn btn-info me-3" onClick={()=> showEdit(book)}>Edit</button>
                                <button type="button" className="btn btn-danger " onClick={() => deleteBook(book)}>Hapus</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default ManajemenBuku; 