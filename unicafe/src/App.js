import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let points = props.good*1 + props.neutral*0 + props.bad*(-1)
  let average = points/all
  let positive = props.good / all * 100 
  
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }  
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positive + '%'}/>
        </tbody>
      </table>
    </div>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => {
    setGood(newGood)
    console.log(newGood)
  }
  const setToNeutral = (newNeutral) => {
    setNeutral(newNeutral)
    console.log(newNeutral)
  }
  const setToBad = (newBad) => {
    setBad(newBad)
    console.log(newBad)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App