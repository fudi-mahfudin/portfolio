'use client';

import { useEffect, useState } from 'react';

export default function LiveClock({ timezone = 'Asia/Jakarta' }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString('en-US', {
        timeZone: timezone,
      });
      // Show only hour:minute
      const timeArray = formattedTime.split(':');
      const timeString = `${timeArray[0]}:${timeArray[1]}`;
      setTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="">
      {time ? (
        <p className="text-3xl font-semibold text-secondary-foreground">
          {timezone.split('/')[1]}, {time}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
