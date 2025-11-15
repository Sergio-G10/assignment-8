import { useState } from 'react'
import { useEffect } from 'react'
import rock from '../public/images/rock (1).png'
import paper from '../public/images/paper (1).png'
import scissors from '../public/images/scissors (1).png'
import question from '../public/images/question-mark (1).png'
import './App.css'


function ComputerThrow({ choice, round }) {
  const images = [rock, paper, scissors]
  const [source, setSource] = useState(question)

  useEffect(() => {
    if (choice === null) return

    // Cycle through images every 100ms
    let i = 0
    const interval = setInterval(() => {
      setSource(images[i%3])
      i++
    }, 100)

    // After 3 seconds, stop cycling and show the computer's choice
    const timeout = setTimeout(() => {
      clearInterval(interval)
      const newSource = 
        choice === 1 ? rock : 
        choice === 2 ? paper : 
        choice === 3 ? scissors : 
        question  

      setSource(newSource)
    }, 3000);

    // Cleanup function to clear interval and timeout if component unmounts or round changes
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }

  }, [round])

  return (
    <>
      <div>
        <h2>Computer Choice:</h2>
      </div>

      <div id="computer-choices">
        <div id="computer-rock">
          <img src={source}></img>
        </div>
      </div>
    </>
  )
}

export default ComputerThrow