import React, { useState, useEffect, Fragment } from 'react';

export default function Welcome() {
  const [name, setName] = useState('John');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    document.title = `Welcome ${name}`;
  }, [name]);

  useEffect(() => {
    console.log(`Like componentDidMount & componentDidUpdate`);
    return () => { console.log(`Like componentWillUnmount & componentWillUpdate`) };
  });

  return (
    <Fragment>
      <fieldset>
        <legend>Choose your name</legend>
        <input type="text" value={name} onChange={handleChangeName} />
      </fieldset>
    </Fragment>
  );
}