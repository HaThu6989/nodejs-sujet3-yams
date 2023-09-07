import React from "react";
import NavbarMenu from "./NavbarMenu";
import patry from "../assets/patisserie.jpg";

function Home() {
  return (
    <div>
      <NavbarMenu />
      <div>
        <img src={patry} />
      </div>
    </div>
  );
}

export default Home;
