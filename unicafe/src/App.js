import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.titles}
      </h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tbody>
      <tr><td>{props.text}</td><td>{props.value} {props.bonus}</td></tr>
    </tbody>
  )
}

const Statistics = (props) => {
  if (props.good+props.neutral+props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
        <table>
          <StatisticsLine text="good" value = {props.good} />
          <StatisticsLine text="neutral" value = {props.neutral} />
          <StatisticsLine text="bad" value = {props.bad} />
          <StatisticsLine text="all" value = {props.good+props.neutral+props.bad} />
          <StatisticsLine text="average" value = {(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
          <StatisticsLine text="positive" value = {props.good*100/(props.good+props.neutral+props.bad)} bonus ="%"/>
        </table>
    </div>
  )
}

const App = () => {
  const titles = {
    title1: 'give feedback',
    title2: 'statistics',
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header titles={titles.title1} />
      <Button
        onClick={increaseGood}
        text='good'
      />
      <Button
        onClick={increaseNeutral}
        text='neutral'
      />     
      <Button
        onClick={increaseBad}
        text='bad'
      />
      <Header titles={titles.title2} />
      <Statistics good={good} neutral={neutral} bad={bad}/>  
    </div>
  )
}

export default App