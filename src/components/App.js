import React from 'react';
import Header from './Header';
import Note from "./Note";
import Footer from './Footer'

export default function App(){
  return (
    <div>
      <Header />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}