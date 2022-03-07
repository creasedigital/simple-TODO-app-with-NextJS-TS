import { useState, useEffect } from 'react';

export default function Social() {
  const [subscribers, setSubscribers] = useState(1000);
  useEffect(() => {
    const interval = setInterval(()=> {
      setSubscribers(subs => subs + 1);
    }, Math.ceil(Math.random() * 30000))
  }, [])
  return(
    <h2>subscribers: {subscribers}</h2>
  )
}