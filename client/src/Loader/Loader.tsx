import React, { FC } from 'react';
import './Lodader.css';

const Loader: FC = () => {
  return (
    <>
      <div id='page-overlay'>
        <div className='loader-container'></div>
      </div>
    </>
  );
};

export default Loader;
