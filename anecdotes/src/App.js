import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const setToSelected = () => {
    let newSelection = getRandom(anecdotes.length)
    setSelected(newSelection)
  }

  const voteAnecdote = () => {
    const voteTally = [...votes]
    voteTally[selected] +=1
    setVotes(voteTally)
    console.log('voteTally after', voteTally)
  }
   
  const getRandom = (max) => {
    let rnumber = Math.floor((Math.random() * max)) 
    return (rnumber)
    }

  const getMostIndex = (array) => {
    if (Array.length === 0) {
      return -1
    }

    var max = array[0]
    var maxIndex = 0

    for (var i = 1; i < array.length; i++) {
      if (array[i] > max) {
        maxIndex = i
        max = array[i]
      }
    }
    console.log('max index', maxIndex)
    return maxIndex
  }
  
  const displayAotD =() => {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}<br></br>
        has {votes[selected]} votes          
      </div>
    )
  }
    
  const displayMostVoted = () => {
    if (votes[getMostIndex(votes)] === 0) {
      return (
        <h1><i>No anecdote has been voted on</i></h1>
      )
    }
      return (
        <div>
          <h1>Anecdote with the most votes</h1>
          {anecdotes[getMostIndex(votes)]}<br></br>
          has {votes[getMostIndex(votes)]} votes
        </div>
    )
  }

  return (
    <div>
      {displayAotD()}
      <Button handleClick={() => voteAnecdote()} text='vote'/>
      <Button handleClick={() => setToSelected()} text='next anecdote'/>    
      {displayMostVoted()}
    </div>
  )
}
export default App