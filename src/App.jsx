// src/App.jsx
import React from "react";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import LenisWrapper from "./components/LenisWrapper";
import Cards from "./components/Cards";
import Surprise from "./components/surprise";
import FloatingMusic from "./components/FloatingMusic";
import AskSection from "./components/AskSection";


export default function App() {
  return (
    <LenisWrapper>

      <Navbar />
      <FloatingMusic />
      <Hero />
      <Cards />
      <Surprise />
      <AskSection />
      
      
      
    </LenisWrapper>
  );
}