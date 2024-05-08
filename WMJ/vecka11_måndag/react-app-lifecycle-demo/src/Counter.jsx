import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Initializing state variable 'count' with initial value 0
  const [count2, setCount2] = useState(0); // Initializing state variable 'count2' with initial value 0

  // No dependency passed
  // useEffect(() => {
  //   //Runs on every render
  // });

  // componentDidMount
  // useEffect(() => {
  //   console.log("The useEffect ran, runs ONLY on first render");
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  /*
    Runs on the first render and any time any dependency value changes
  */
  //   console.log("The useEffect ran");
  // }, [count, count2]);

  // componentWillUnmount
  // useEffect(() => {
  //   console.log("The use effect ran");
  //   return () => {
  //     console.log("The return is being ran");
  //   };
  // }, []);

  // useEffect for 'count' state variable
  useEffect(() => {
    console.log(`The count has updated to ${count}`); // Logging the updated value of 'count'
    return () => {
      console.log(`We are in the cleanup - the count is ${count}`); // Cleanup function logging the value of 'count'
    };
  }, [count]); // Dependency array contains 'count', effect runs whenever 'count' changes

  // useEffect for 'count2' state variable
  useEffect(() => {
    console.log(`The count2 has updated to ${count2}`); // Logging the updated value of 'count2'
    return () => {
      console.log(`We are in the cleanup - the count is ${count2}`); // Cleanup function logging the value of 'count2'
    };
  }, [count2]); // Dependency array contains 'count2', effect runs whenever 'count2' changes

  // useEffect to initialize 'count2' to 10 on first render and reset it to 0 on cleanup
  useEffect(() => {
    setCount2(10); // Setting 'count2' to 10, overwriting its initial value
    return () => {
      setCount2(0); // Resetting 'count2' to 0 on cleanup
    };
  }, []); // Empty dependency array, runs only on first render

  return (
    <div>
      <h6>Counter</h6>
      <p>Current count: {count}</p>
      <p>Count2 is: {count2} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
      {" "}
      <button onClick={() => setCount2(count2 + 1)}>increment count 2</button>
    </div>
  );
};

export default Counter; // Exporting the Counter component as default