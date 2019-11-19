/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Our Team</h1>
    <h2>Alex</h2>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Alex />
    </div>
    <p>A technical wizard, Alex is able to seamlessly navigate between the VS Code and the GraphQL environment. Always holding workshops and tutorials for junior developers, Alex looks forward to responding to user issues and making GraphQuill into the best extension it can be. <em><a href="https://github.com/alexchao26">GitHub</a></em></p>
    <h2>Austin</h2>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Austin />
    </div>
    <p>A user experience genius and manager par excelence, Austin is capable of communicating with users, programmers, and codebases young and old. His connections to the wider developer community brought about the idea of GraphQuill, and it is his fondest hope that he and his team continue to deliver useful, relevant work. <em><a href="https://github.com/austinjruby">GitHub</a></em></p>
    <h2>Ed</h2>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Ed />
    </div>
    <p>An X factor, Ed loves parsing and navigating file structures. Because of his eclectic interests, he often finds himself working on code features that other members of the team leave behind, and as a result of his actions, sometimes these ugly ducklings develop into core features. <em><a href="https://github.com/ewgewgewg">GitHub</a></em></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
