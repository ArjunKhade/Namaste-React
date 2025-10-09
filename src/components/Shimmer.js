import React from 'react';

const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(8)
        .fill("")
        .map((_, idx) => (
          <div className="shimmer-card" key={idx}>
            <div className="shimmer-img" />
            <div className="shimmer-line shimmer-title" />
            <div className="shimmer-line shimmer-cuisine" />
            <div className="shimmer-line shimmer-rating" />
            <div className="shimmer-line shimmer-time" />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;