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
    <p>A technical wizard, Alex was able to seamlessly navigate between the VS Code and the graphql environment. Always holding workshops and tutorials for junior developers, Alex looks forward to responding to user issues and making GraphQuill into the best extension it can be.</p>
    <h2>Austin</h2>
    <p>A user experience genius and manager par excelence, Austin is capable of communicated with users, programmers, and codebases young and old. His connections to the wider developer community were brought about the idea of GraphQuill, and it is fondest hope that he and his team continue to deliver useful, relevant work.</p>
    <h2>Ed</h2>
    <p>An X factor, Ed loves parsing and navigating file structures. Because of his eclectic interests, he often finds himself working on code features that other members of the team leave behind, and as a result of his actions, sometimes these ugly ducklings develop into core features.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
