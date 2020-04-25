import React, { useState, useEffect, Fragment } from 'react';

export default function Welcome() {
  const [name, setName] = useState('John');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    document.title = `Welcome ${name}`;
  }, [name]);

  return (
    <Fragment>
      <input type="text" value={name} onChange={handleChangeName} />
      <input type="text" value={age} onChange={handleChangeAge} />
    </Fragment>
  );
}