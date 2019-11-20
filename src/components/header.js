import { Link } from 'gatsby';
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
        <Link
          to="/"
          style={{
            color: '#FF00AB',
            textDecoration: 'none',
          }}
        >
          {siteTitle} </Link>
        <Link className="hoverable" id="morehover"
          to="/team/"
          style={{
            textDecoration: 'none',
          }}
        >
          team, </Link>
        <Link
          to="/docs/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          docs, </Link>
        <Link
          to="/docs/friends"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
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
