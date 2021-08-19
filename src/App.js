import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Footer from "./components/Footer";
import ManajemenPelanggan from "./components/ManajemenPelanggan";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    retrieveData();
    retrieveData2();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function retrieveData2() {
    axios
      .get("http://localhost:4000/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //function nerima data input dari child
  function storeData(inputBook) {
    axios
      .post("http://localhost:4000/book/add", inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert("Data berhasil ditambahkan");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function StoreUserData(inputUser) {
    axios
      .post("http://localhost:4000/user/add", inputUser)
      .then((res) => {
        setUsers((prevUsers) => [...prevUsers, inputUser]);
        alert("Data berhasil ditambahkan");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  //function nerima data update dari child
  function updateData(inputBook) {
    // console.log(inputBook);
    // alert("data berhasil diperbarui");

    axios
      .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
      .then((res) => {
        retrieveData();
        alert("data berhasil diperbarui");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  //function delete data
  function deleteData(book) {
    // console.log(book);
    // alert("data berhasil dihapus");

    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then(() => {
        retrieveData();
        alert("Data berhasil dihapus");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books} />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku
              bookList={books}
              store={storeData}
              update={updateData}
              remove={deleteData}
            />
          </Route>

          <Route path="/manajemen-pelanggan">
            <ManajemenPelanggan userList={users} storeUser={StoreUserData} />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
