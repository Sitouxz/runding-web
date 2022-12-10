import React from 'react';

import ellipse from '../assets/img/Ellipse_accessible.svg';
import ellipse2 from '../assets/img/Ellipse-1_accessible.svg';
import ellipse3 from '../assets/img/Ellipse-2_accessible.svg';

// komponen yang merender background accessible dari assets
export default function BackgroundAccessible(props) {
  const { noBig } = props;
  return (
    <div>
      {!noBig && (
        <img
          src={ellipse}
          alt=""
          className="absolute top-0 right-0 -z-10 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[700px]"
        />
      )}
      <img src={ellipse2} alt="" className="absolute top-96 left-0 -z-10" />
      <img src={ellipse3} alt="" className="absolute bottom-10 right-0 -z-10" />
    </div>
  );
}
