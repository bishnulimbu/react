import React from "react";

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <h1>hellow new line {props.name} a.k.a {props.alias}</h1>

    </div>
  )
}
// return React.createElement(
//   'div',
//   { id: 'hellow', className: 'dummyclasse' },
//   React.createElement('h1', null, 'hello'))
// }
export default Hello
