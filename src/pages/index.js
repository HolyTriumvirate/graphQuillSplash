/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something very super great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/docs/">Documentation</Link>
    <br />
    <Link to="/docs/someOtherDocs">Nested Folder, Documentation</Link>
  </Layout>
);

export default IndexPage;
