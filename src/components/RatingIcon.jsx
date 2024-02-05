import React from 'react';

const RatingIcon = ({ rating }) => {
  // Ensure rating is between 0 and 100
  const percentage = Math.min(100, Math.max(0, rating));

  // Calculate the dash value for the rating ring
  const dashValue = (percentage / 100) * 1000;

  // Styles for the rating ring (outer ring)
  const ratingRingStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    background: 'transparent',
    border: `12px solid #FFC44D`,
    borderImage: `conic-gradient(#FFC44D ${dashValue}deg, transparent ${dashValue}deg)`,
    borderImageSlice: '1',
    position: 'absolute',
    overflow: 'hidden', 
  };

  // Styles for the outline ring (inner ring)
  const outlineRingStyles = {
    width: '63px',
    height: '63px',
    borderRadius: '50%',
    backgroundColor: '#4A3F29',
    border: '2px solid black',
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
    fontSize: '16px',
    fontWeight: 'bold',
  };

  // Styles for the inner circle (background for rating text)
  const innerCircleStyles = {
    width: 'calc(100% - 26px)',
    height: 'calc(100% - 26px)',
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
      {/* <div style={innerCircleStyles}></div>
      <div style={ratingTextStyles}>{percentage}%</div> */}
    </div>
  );
};

export default RatingIcon;
