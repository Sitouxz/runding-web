import React from 'react';
import axios from 'axios';

export default function RandomFacts() {
  // eslint-disable-next-line no-unused-vars
  let fact = null;

  axios.get('https://api.api-ninjas.com/v1/facts', {
    headers: { 'X-Api-Key': 'dvbT9/uFxbQoQ1CbejxYBA==8B881cIzbr6Stn8b' },
  }).then((result) => {
    // eslint-disable-next-line no-console
    console.log(result.data[0]);
    fact = result;
  });

  return (
    <div className="container mx-auto px-2 mt-4">
      <div className="mt-3 bg-white shadow-lg border-2 rounded-lg p-3">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full ">
          <p>
            Fact :
          </p>
        </div>
      </div>
    </div>
  );
}
