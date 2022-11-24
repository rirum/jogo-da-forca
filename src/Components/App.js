import React, { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";


export default function App() {


  return (
   <>
    <Jogo />
    <Letras />
    <Chute />
   </>
  );
}

