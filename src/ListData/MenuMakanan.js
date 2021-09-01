import React, { Component } from "react";
import ListMakanan from "./ListMakanan";

class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan :</h3>
        <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
        <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
        <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
        <ListMakanan gambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
      </div>
    );
  }
}

export default MenuMakanan;
