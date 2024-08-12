import { useState } from 'react'



const Statistics = (props) => {
  const totalAmount = props.good + props.neutral + props.bad

  

  if (totalAmount === 0) {
    return <p>no feedback given</p>
  }

  let avarege = 0
  let positive = 0

  if (totalAmount > 0) {
   avarege = (props.good - props.bad) / totalAmount
   positive = (props.good / totalAmount) * 100
  }
  
  const StatisticLine = ({text, value}) => {
    return (
      <p>{text} {value}</p>
    )
  }
    return (
      <div>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={totalAmount}/>
        <StatisticLine text='avarege' value={avarege.toFixed(1)}/>
        <StatisticLine text='positive' value={`${positive.toFixed(1)}%`}/>
        
      </div>
    )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

