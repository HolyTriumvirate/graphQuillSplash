import { Link, withAssetPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link id="morehoverz"
          to="/"
          style={{
            textDecoration: 'none',
          }}
          activeStyle={{color: '#FF00AB'}}
        >
          {siteTitle} </Link>
        <Link id="morehover"
          to="/team/"
          style={{
            textDecoration: 'none',
          }}
          activeStyle={{color: '#FF00AB'}}
        >
          team</Link>
          <span class="white"> | </span>
        <Link id="morehoverb"
          to="/docs/"
          style={{
            textDecoration: 'none',
          }}
          activeStyle={{color: '#FF00AB'}}
        >
          docs</Link>
          <span class="white"> | </span>
        <Link id="morehoverc"
          to="/friends/"
          style={{
            textDecoration: 'none',
          }}
          activeStyle={{color: '#FF00AB'}}
        >friends</Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
