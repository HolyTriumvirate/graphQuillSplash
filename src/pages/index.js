/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Quill from '../components/quill';
import SEO from '../components/seo';
import "../styles/global.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the home of the GraphQuill VS Code extension!</h1>
    <div class="image">
      <div class="image" style={{ maxWidth: '300px', marginBottom: '1.00rem' }}>
        <Quill />
      </div>
    </div>
    <Link to="/team/">Meet the Team</Link>
    <br />
    <Link to="/docs/">Documentation</Link>
    <br />
    <Link to="/friends/">Friends</Link>
    <br />
    <a href="https://marketplace.visualstudio.com/items?itemName=sproutdeveloping.graphquill">Go to the Extension on Marketplace!</a>
  </Layout>
);

export default IndexPage;
