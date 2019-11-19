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
            color: 'gray',
            textDecoration: 'none',
          }}
        >
          Team
        </Link>
        <Link
          to="/team/"
          style={{
            color: 'gray',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <Link
          to="/docs/"
          style={{
            color: 'gray',
            textDecoration: 'none',
          }}
        >
          Docs
        </Link>
        <Link
          to="/docs/friends"
          style={{
            color: 'gray',
            textDecoration: 'none',
          }}
        >
          Friends
        </Link>
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
