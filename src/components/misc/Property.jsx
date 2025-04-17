import React from 'react';
import './Property.css';
import {Link} from "react-router-dom"

const Property = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.images[0]} alt={property.name} />
        <div className="property-badge">Available</div>
      </div>
      <div className="property-content">
        <h3 className="property-title">{property.name}</h3>
        <div className="property-stats">
          <div className="stat">
            <span>{property.profit}% profitability</span>
          </div>
        </div>
        <div className="property-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${property.funded}%` }}
            ></div>
          </div>
          <span className="progress-text">{property.investors} Investors</span>
        </div>
        <Link to={`/property/${property.id}`}>
       <button className="invest-btn">Details</button></Link>
      </div>
    </div>
  );
};

export default Property;
