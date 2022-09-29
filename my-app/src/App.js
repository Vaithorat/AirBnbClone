// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';


function App() {
  return (
<>
<Navbar/>
<Hero/>
<Card
img = "image 12.png"
rating = "5.0"
review = {"(6)"}
country = "&#x25CF;USA"
title = "Life Lessons with Katie Zaferes"
price = {"$136"}
/>
</>
  );
}

export default App;
