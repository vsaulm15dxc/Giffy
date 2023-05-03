
import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';
import React from 'react';
import { Link,Route } from 'wouter';

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>app</h1>
        <a href='/gif/panda'>Panda's gifs</a>
        <a href='/gif/programing'>Programing Gif</a>
< Route  component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
