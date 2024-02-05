import React from 'react';

const RatingIcon = ({ rating }) => {
  // Ensure rating is between 0 and 100
  const percentage = Math.min(100, Math.max(0, rating));


  // Styles for the rating ring 
  const ratingRingStyles = {
    width: '100%',
    height: '100%',
    border:'1px solid black',
    borderRadius: '50%',
    background: `conic-gradient(#FFC44D ${percentage}%, transparent ${percentage}%)`,
    borderImageSlice: '1',
    position: 'absolute',
    overflow: 'hidden', 
  };

  // Styles for the outline ring (inner ring)
  const outlineRingStyles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#4A3F29',
    border: '1px solid black',
    position: 'relative',
    overflow: 'hidden', 
    top: '0',
    left: '0',
  };

  // Styles for the rating text
  const ratingTextStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '13px',
    fontWeight: 'bold',
  };

  // Styles for the inner circle (background for rating text)
  const innerCircleStyles = {
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    borderRadius: '50%',
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={outlineRingStyles}>
      <div style={ratingRingStyles}></div>
      <div style={innerCircleStyles}></div>
      <div style={ratingTextStyles}>{percentage}<sup>%</sup></div>
    </div>
  );
};

export default RatingIcon;
