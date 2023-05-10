import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../Redux/Slices/MessageSlice';

export default function Child1() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputTextValue = inputRef.current.value;
    dispatch(setMessage(inputTextValue));
    inputRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
