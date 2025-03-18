

const Header = ({name}) =>{
  
    return <div>
      <h1>{name}</h1>
  
    </div>
  }
  
  
  
  
  const Content  =({courses}) =>{
    return <div>
      <p>
        {courses.map(entry  => 
        <Part
         key = {entry.id} 
         part = {entry.name} 
         exercises = {entry.exercises}
         />)}
       
       
        
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
  
  const Total = ({parts}) =>{
    return <div>
      <b>number of exercises {parts.reduce((sum,exercise)=>
         sum + exercise.exercises
  
      ,0)} </b>
    </div>
  }
  
  
  const Course = ({courses}) =>{
    return <div>
    
       {/*
      <Total course = {course}></Total>
  
    
    **/ }
        { courses.map(course => (
          <div key = {course.id}>
          <Header  name = {course.name}/>
          <Content courses = {course.parts}/>
          <Total parts = {course.parts}></Total>
          </div>
        ))
        }
        
  
      </div>
  }

  export default Course