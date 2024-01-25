import React from 'react'

// function Greet() {
//   return <h1>Hellow world</h1>
//

// }
export const MyComponent = (props) => {
  console.log(props)
  return (
    <div>
      <h1>hellow world {props.name} {props.children}</h1>
      <button>submit</button>
    </div >
  )
}


// export default Greet 
