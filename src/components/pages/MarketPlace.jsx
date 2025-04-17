import React, { useState } from 'react'
import "./MarketPlace.css";
import Property from '../misc/Property';
import properties from "../../datas/properties"
import { useEffect } from 'react';

const MarketPlace = () => {
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="marketplace">
      <div className="marketplace-hero">
        <h1>Discover Premium Properties</h1>
        <p>Invest in carefully selected real estate opportunities</p>
      </div>

      <div className="marketplace-container">
        <div className="marketplace-header">
          <div className="marketplace-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              View All
            </button>
            <button 
              className={`filter-btn ${filter === 'residential' ? 'active' : ''}`}
              onClick={() => setFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
              onClick={() => setFilter('commercial')}
            >
              Commercial
            </button>
          </div>
          <div className="marketplace-sort">
            <select className="sort-select">
              <option value="newest">Newest First</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="roi">Highest ROI</option>
            </select>
          </div>
        </div>

        <div className="properties-grid">
          {properties.map((property, index) => (
            <Property key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketPlace;