import React from 'react';
import Quill from '../components/quill';
import Layout from '../components/layout';
import SEO from '../components/seo';

const docum = () => (
  <Layout>
    <SEO title="Our Friends" />
    <div>
    <a href="https://reactime.io/">Reactime, a time-traveling React debugger.</a>
    <br/>
    <a href="https://github.com/oslabs-beta/ReactRTC">ReactRTC, real-time WebRTC for React.</a>
    <br/>
    <a href="https://trunq.io">TrunQ, a GraphQL caching solution.</a>
    <div class="image">
      <div class="image" style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Quill />
      </div>
    </div>
    </div>
  </Layout>
);

export default docum;
