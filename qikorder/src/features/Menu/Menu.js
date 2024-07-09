import React, { memo, useEffect, useState, useCallback } from 'react';
import menuJSON from 'data/menu';

// Components
import MenuItem from 'components/MenuItem';

// Styles
import './Menu.scss';

function Menu() {
  const [menu, setMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getHeaderTitle = useCallback((menu, isLoading) => {
    if (isLoading) {
      return 'Loading menu...';
    }

    return menu?.name || 'Menu';
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMenu(menuJSON);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="menu">
      <div className="menu__header">
        <h2 className="menu__header__title">
          { getHeaderTitle(menu, isLoading) }
        </h2>
      </div>
      { !isLoading ? (
        <div className="menu__content">
          { menu.items.map(item => (
            <MenuItem
              menuItem={item}
              key={item.id}
            />
          )) }
        </div>
      ) : null }
    </div>
  );
}

export default memo(Menu);
