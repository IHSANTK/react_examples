import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import usercontext from './Usercontext'

const ComponentE = () => {
  const name = useContext(usercontext);

  return (
    <div>
      {name}
      <ComponentF />
    </div>
  );
}

export default ComponentE;