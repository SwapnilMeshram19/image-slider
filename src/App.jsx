import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ImageList } from './components/ImageList'
import { ImageSlider } from './components/ImageSlider'
import next from './assets/next.png'
import prev from './assets/prev.png'

function App() {

  const crouselRef=useRef()
  const onClickPrev=()=>{
   crouselRef.current.scrollLeft -=300;


    
    
  }
  const onClickNext =()=>{
    crouselRef.current.scrollLeft +=300;

  }

  return (
    <div className="App">
      <h1>Image Slider</h1>

      <div className='crousel' ref={crouselRef}>
        <div className='pre-button' onClick={()=>onClickPrev()}>
          <img src={prev} alt="previous button"/>
        </div>
        <div className='next-button' onClick={()=>onClickNext()}>
        <img src={next} alt="next button"/>
        </div>
      {
        ImageList.map((image)=>
        <ImageSlider image={image}/>

        )
      }
      </div>
    </div>
  )
}

export default App
