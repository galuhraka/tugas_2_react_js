import React from "react";
import Header from "./Page/Header";
import Footer from "./Page/Footer";
import MenuUtama from "./ListData/MenuUtama";
import TentangKami from "./Page/TentangKami";
import MenuKontak from "./Page/MenuKontak";
import ListMakanan from "./ListData/ListMakanan";
import MenuMakanan from "./ListData/MenuMakanan";

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuMakanan />
      <TentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
