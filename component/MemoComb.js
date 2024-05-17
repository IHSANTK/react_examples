import React from 'react'

 function MemoComb({name}) {
    console.log("Rendering Memo Combonent");
  return (
    <div>
      OK
      {name}
    </div>
  )
}

export default React.memo(MemoComb)