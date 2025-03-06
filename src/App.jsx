const Header = (props) =>{
  return <div>
    <h1>{props.course}</h1>

  </div>
}


const Content  =(props) =>{
  return <div>
    <p>
     <Part part = {props.part} exercises = {props.exercises}>
      {props.part}  {props.excercise}
      </Part>
    </p>
  </div>

}

const Part = (props) =>{
  return <div>
    <p>
      {props.part} {props.exercises}
    </p>
    
  </div>

}

const Total = (props) =>{
  return <div>
    number of excercises {props.exercises1 + props.exercises2 + props.exercises3}
  </div>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}></Header>
      <Content part = {part1} excercise = {exercises1} ></Content>
      <Content part = {part2} excercise = {exercises2} ></Content>
      <Content part = {part3} excercise = {exercises3} ></Content>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}></Total>
    </div>
  )
}

export default App