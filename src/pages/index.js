/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import "../styles/global.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the home of the GraphQuill VS Code extension!</h1>
    <p>Here you will find information about the extension.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Meet the Team</Link>
    <br />
    <Link to="/docs/">Documentation</Link>
    <br />
    <Link to="/docs/someOtherDocs">Friends</Link>
    <br />
    <a href="https://marketplace.visualstudio.com/items?itemName=sproutdeveloping.graphquill">Go to the Extension on Marketplace!</a>
  </Layout>
);

export default IndexPage;
