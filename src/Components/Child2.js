import React from 'react';
import { useSelector } from 'react-redux';

export default function Child2() {
  const message = useSelector(state => state.MessageReducer.message);

  return (
    <div>
      Data from Child1: {message}
    </div>
  );
}
