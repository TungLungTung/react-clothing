import React from 'react';
import './menu-item-styles.scss';

import {withRouter} from 'react-router-dom';

/// Component dont hold any state => using functional component instead
const MenuItem = ({title,imageUrl, size, linkUrl, history, match}) => {
  return(
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

/// use withRouter (High Order Component) to return component you can access to history, match
export default withRouter(MenuItem);