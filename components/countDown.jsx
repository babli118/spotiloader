import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    // Function to decrement the timer every second
    const decrementTimer = () => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    };

    // Set up an interval to call decrementTimer every second
    const intervalId = setInterval(decrementTimer, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [seconds]); // Include 'seconds' in the dependency array to update the interval on each change

  return (
    <div>
      <p> {seconds} seconds</p>
      {/* You can add more components or functionality here */}
    </div>
  );
};

export default CountdownTimer;
