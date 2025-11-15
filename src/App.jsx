import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PlayerThrow from './PlayerThrow.jsx'
import ComputerThrow from './ComputerThrow.jsx'
import Result from './Result.jsx'

function App() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [round, setRound] = useState(0)

  useEffect(() => {
    if (playerChoice === null) return;

    // Start a new round
    setRound(round + 1)

    // Reset result display
    setResult(null)

    // Generate computer choice
    const choice = Math.floor(Math.random() * 3) + 1
    setComputerChoice(choice)
    console.log("Player choice is: " + playerChoice)
    console.log("Computer choice is: " + choice)

    // Determine winner after computer animation with slight delay
    setTimeout(() => {
      chooseWinner(playerChoice, choice)
    }, 3100);

    // Reset player choice for next round
    setPlayerChoice(null)
  }, [playerChoice])

  // Determine the winner of the round
  function chooseWinner(player, computer) {
    if (player === computer) {
      setResult("It's a tie!")
    } else if ((player == 1 && computer == 2) || player == 2 && computer == 3 || player == 3 && computer == 1) {
      setResult("Computer wins!")
    } else if ((player == 1 && computer == 3) || player == 2 && computer == 1 || player == 3 && computer == 2) {
      setResult("Player wins!")
    }
  }

  return (
    <>
      <h1>Rock Paper Scissors</h1>
      <PlayerThrow choice={playerChoice} handleChoice={setPlayerChoice}/>
      <ComputerThrow choice={computerChoice} round={round}  />
      <Result game={result} />
    </>
  )
}

export default App
