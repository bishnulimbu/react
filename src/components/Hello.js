import React from "react";

const Hello = () => {
  // return (
  //   <div>
  //     <h1>hellow new line</h1>
  //
  //   </div>
  // )
  return React.createElement(
    'div',
    { id: 'hellow', className: 'dummyclasse' },
    React.createElement('h1', null, 'hello'))
}
export default Hello
