import React, { Component } from 'react';

const Right = () => {
  return (
    <div className="nextArrow" onClick={ props.goToNextSlide }>
      <i className="fas fa-angle-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default Right;
