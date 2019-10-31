import React, { useState } from 'react';

export default function PersonForm() {
  const [personName, setPerson] = useState();

  const handleSubmit = () => {
    // Post person to server
    // Server expects
    // {
    //   name: 'PersonNameWithNoSpaces'
    // }
  };

  const handleCancel = () => {};

  /*
    Card that renders a button and when pressed renders more elements
    Text Field for Person name
  */
  return null;
}