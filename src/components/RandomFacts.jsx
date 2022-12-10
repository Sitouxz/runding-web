import React, { useEffect, useState } from 'react';
import axios from 'axios';

// component yang menggunakan api random facts untuk menampilkan sebuah fakta random
export default function RandomFacts() {
  // eslint-disable-next-line no-unused-vars
  const [fact, setFact] = useState('');

  useEffect(() => {
    axios
      .get('https://api.api-ninjas.com/v1/facts', {
        headers: { 'X-Api-Key': 'dvbT9/uFxbQoQ1CbejxYBA==8B881cIzbr6Stn8b' },
      })
      .then((result) => {
        setFact(result.data[0].fact);
      });
  }, []);

  return (
    <div className="random-facts mt-3 bg-white shadow-lg border-2 rounded-lg p-3 w-96">
      <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start gap-3 w-full ">
        <p className="font-regular mt-2 text-[18px] text-primary-2">
          Here&apos;s a Random Fact! :
        </p>
        <p>{fact}</p>
      </div>
    </div>
  );
}
