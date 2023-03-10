import {FcNext, FcPrevious } from 'react-icons/fc'
import { useState } from 'react';

import data from '../data/carousel';
import MoviePanel from './MoviePanel';

// 1   2  3  4  5  6  7  8  9

const Carousel = () => {
  const [range, setRange] = useState(0)
  const newData = data.slice(range, range+3)
  const prev = ()=>{
    if(range+3 === data.length-1|| range === 0){
      setRange(data.length-4)
    } else setRange((prevV => prevV-3))
  }

  const next = () => {
    if (range > (data.length - 4)) {
      setRange(0);
    } else setRange(((prevV) => prevV + 3));
  };

  console.log(range);


  return (
    <div className="flex mt-72">
      <button onClick={prev}><FcPrevious/></button>
      {newData.map((el, i) => <MoviePanel key={i} el={el} />)}
      <button onClick={next}><FcNext/></button>
    </div>
  )
};

export default Carousel;
