import { createRef, useEffect, useState } from 'react';

export default function Demo() {
  const [val, setVal] = useState('');

  const inputRef = createRef();

  useEffect(() => {
    console.log(inputRef.current.value); 
  }, [inputRef]);

  return (
    <div>
      <input 
        type="text" 
        ref={inputRef} 
        value={val} 
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  );
}