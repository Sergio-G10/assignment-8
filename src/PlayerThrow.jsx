import rock from '../public/images/rock (1).png'
import paper from '../public/images/paper (1).png'
import scissors from '../public/images/scissors (1).png'
import './App.css'


function PlayerThrow(props) {
  let ids = ["player-rock", "player-paper", "player-scissors"]

  function handleClick(choice) {
    // Remove "chosen" class from all buttons
    ids.forEach(id => {
      let button = document.getElementById(id)
      button.classList.remove("chosen")
    })

    // Add "chosen" class to the selected button
    let id = choice === 1 ? 0 : choice === 2 ? 1 : 2
    let buttonChosen = document.getElementById(ids[id])
    buttonChosen.classList.add("chosen")
    props.handleChoice(choice)
  }

  return (
    <>
      <div>
        <h2>Player Choice:</h2>
      </div>

      <div id="player-choices">
        <button id="player-rock" onClick={() => handleClick(1)}>
          <img src={rock}></img>
        </button>

        <button id="player-paper" onClick={() => handleClick(2)}>
          <img src={paper}></img>
        </button>

        <button id="player-scissors" onClick={() => handleClick(3)}>
          <img src={scissors}></img>
        </button>
      </div>
    </>
  )
}

export default PlayerThrow
