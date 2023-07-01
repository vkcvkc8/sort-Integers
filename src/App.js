import React from 'react';
import './style.css';

export default function App() {
  const sortIntegersAscending = (array) => {
    return array.slice().sort((a, b) => a - b);
  };

  // Example usage
  const integers = [8, 3, 1, 6, 2, 7, 4, 5];
  const sortedIntegers = sortIntegersAscending(integers);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Sorted Integers: {sortedIntegers.join(', ')}</p>
    </div>
  );
}
