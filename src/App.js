import Navbar from './Navbar';
import Banner from './Banner';
import { Cartbutton } from './Cartbutton';
import './App.css';
import Footer from './Footer';
import Card1 from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import { Card5 } from './Card5';
import Card6 from './Card6';
import { Card7 } from './Card7';
import { Card8 } from './Card8';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function Counter(added) {
    added ? setCount((ev) => ev + 1) : setCount((ev) => ev - 1);
  }

  return (
    <div className="App">
      <div className='d-flex justify-content-between align-items-center mx-auto container'>
        <Navbar />
        <Cartbutton value={count} />
      </div>
      <Banner />
      <div className='mx-auto bg-light d-flex justify-content-center gap-5 px-3 py-3 flex-wrap ms-5 me-5 mt-5 mb-5'>
        <div className=''><Card1 /></div>
        <div className=''><Card2 value={count} Counter={Counter} /></div>
        <div className=''><Card3 value={count} Counter={Counter} /></div>
        <div className=''><Card4 value={count} Counter={Counter} /></div>
        <div className=''><Card5 value={count} Counter={Counter} /></div>
        <div className=''><Card6 /></div>
        <div className=''><Card7 value={count} Counter={Counter} /></div>
        <div className=''><Card8 value={count} Counter={Counter} /></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
