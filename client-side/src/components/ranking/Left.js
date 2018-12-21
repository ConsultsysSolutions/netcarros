import React, { Component } from 'react';

const Left = () => {
  return (
    <div className="backArrow" onClick={ props.goToPrevSlide }>
      <i className="fas fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default Left;
