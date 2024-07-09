import React, { memo } from 'react';

// Components
import {
  LabelTag,
  OutOfStockTag,
  PopularTag,
} from 'components/Tag';

// Styles
import './MenuItem.scss';

function MenuItem({ menuItem }) {
  return (
    <div className={`menu-item ${menuItem.available ? '' : 'menu-item--unavailable'}`}>
      <div className="menu-item__content">
        <div className="menu-item__header">
          <h3 className="menu-item__name">
            { menuItem.name }
          </h3>
          { menuItem.description ? (
            <div className="menu-item__description">
              { menuItem.description }
            </div>
          ) : null }
        </div>
        <div className="menu-item__additional">
          { menuItem.available ? (
            <span className="menu-item__price">
              { menuItem.price }
            </span>
          ) : (
            <OutOfStockTag />
          ) }
          { menuItem.popularFlag ? (
            <PopularTag />
          ) : null }
        </div>
      </div>
      { menuItem.image ? (
        <div className="menu-item__image">
          <img
            src={menuItem.image}
            alt={menuItem.name}
          />
        </div>
      ) : null }
      { menuItem.tags?.length > 0 ? (
        <div className="menu-item__tags">
          { menuItem.tags.map((tag, index) => (
            <LabelTag
              label={tag}
              key={index}
            />
          )) }
        </div>
      ) : null }
    </div>
  );
}

export default memo(MenuItem);
