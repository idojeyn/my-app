import './App.css';
// import React, { useState } from 'react';

import Menu from '../menu/menu'
import Meeting from '../meeting/Meeting';


function App() {
  const h1='my blog about my life'
  return (
   <div className='con'>
    <h1 className='App color' >{h1}</h1>
    <Menu/>
    <Meeting/>
   </div>
  );
}

// function App() {
//   const btn = document.querySelector('button')
//   const [age, setAge] = useState('');

//   const inputValue = (e) => {
//     setAge(e.target.value);
//   };

//   const getValue = () => {
//     if (isNaN(age)) {
//       timer(() => alert('Iltimos, yoshni raqamda kiriting'))
//       btn.style.backgroundColor = 'red'
//       return;
//     }

//     if (Number(age) < 18) {
//       btn.style.backgroundColor = 'red'
//       timer(() => alert('Faqat 18 yoshdan kattalar kirishi mumkin'))
//     } else {
//       timer(() => alert('Xush kelibsiz!'))
//       btn.style.backgroundColor = 'green'
//     }
//   };

//   function timer(time) {
//     setTimeout(() => {
//       time()
//     }, 500);
//   }


//   return (
//     <div className='App'>
//       <input type="text" onChange={inputValue} value={age} placeholder="Yoshingizni kiriting" />
//       <button onClick={getValue}> 18+ </button>
//     </div>
//   );
// }



export default App;
