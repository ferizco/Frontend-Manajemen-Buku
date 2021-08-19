import React from "react";
import {useState} from "react";

function ManajemenPelanggan ({userList, storeUser}) {

    const [inputUser, setInputUser ] = useState();
    const [form, setForm] = useState();

    function handleNama(event){
        setInputUser({ ...inputUser, nama: event.target.value});
    }
    function handleEmail(event){
        setInputUser({ ...inputUser, email: event.target.value});
    }
    function handleNohp(event){
        setInputUser({ ...inputUser, nohp: event.target.value});
    }
    function handleAlamat(event){
        setInputUser({ ...inputUser, alamat: event.target.value});
    }

    function submitAdd(event){
        event.preventDefault();
        storeUser(inputUser);
    }

    function showCreate(){
        setForm("create");
    }


    console.log(userList);

    return (
        <div className="container">
            <div className="container mt-3">
                <h1 className="text-center">Manajemen Pelanggan</h1>
                {form === "create" && (
                <div id="tambahPelanggan">
                    
                    <h5>Tambah Pelanggan</h5>
                    <hr />
                    <form className="row" onSubmit={submitAdd}>
                        <div className="col-3">
                        <input type="text" name="nama" className="form-control mx-2" placeholder="Nama" onChange={handleNama} />
                        
                    </div>
                    <div className="col-3">
                        <input type="text" name="email" className="form-control mx-2" placeholder="Email" onChange={handleEmail} />
                    </div>
                    <div className="col-2">
                        <input type="text" name="nohp" className="form-control mx-2" placeholder="NO HP" onChange={handleNohp} />
                    </div>
                    <div className="col-2">
                        <input type="text" name="alamat" className="form-control mx-2" placeholder="Alamat" onChange={handleAlamat} />
                    </div>
                    <div className="col-2">
                        <input type="submit" className="btn btn-primary ml-5" value="Simpan" />
                    </div>
                    </form>
                </div> )}
                <div id="daftarPelanggan">
                    <h3 className="mt-3"> Daftar Pelanggan</h3>
                    <hr />
                    <button className="btn btn-primary m-2" onClick={showCreate}>Tambah Pelanggan</button>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>No Hp</th>
                                <th>Alamat</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                           {userList.map((user, index) => (
                               <tr key={index}>
                                   <td>{index + 1}</td>
                                   <td>{user.nama}</td>
                                   <td>{user.email}</td>
                                   <td>{user.nohp}</td>
                                   <td>{user.alamat}</td>
                                   <td>
                                       <button className="btn btn-info me-3">Edit</button>
                                       <button className="btn btn-danger">Hapus</button>
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

export default ManajemenPelanggan;