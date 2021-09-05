import React from "react";
import Header from "./Page/Header";
import Footer from "./Page/Footer";
import TentangKami from "./Page/TentangKami";
import MenuKontak from "./Page/MenuKontak";
import MenuMakanan from "./Page/MenuMakanan";

function App() {
  return (
    <div>
      <Header />
      <MenuMakanan />
      <TentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
