import React from 'react'
import './Gift.css'
import building from "../../images/building.jpg"

const Gift = () => {
    return (
        <div className="gift-container">
          <div className="gift">
            <div className="gift-content">
              <h2 className="gift-title">Exclusive Rewards Await You!</h2>
              <p className="gift-description">
                Join our community to discuss current and future properties, get insider tips, and participate in exclusive giveaways and rewards.
              </p>
              <div className="gift-actions">
                <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
                  <button className="gift-button">
                    <i className="fab fa-discord"></i> Join our Discord
                  </button>
                </a>
                <div className="gift-stats">
                  <div className="stat">
                    <span className="stat-number">5K+</span>
                    <span className="stat-label">Community Members</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">$50K</span>
                    <span className="stat-label">In Rewards Given</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gift-image-container">
              <img className="gift-image" src={building} alt="Luxury building"/>
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
    )
}

export default Gift;