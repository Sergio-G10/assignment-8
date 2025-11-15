import './App.css'


function Result(props) {
  return (
    <>
      <div id="result">
        <h2>Result:</h2>
        <p>{props.game}</p>
      </div>
    </>
  )
}

export default Result
