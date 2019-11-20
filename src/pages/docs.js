import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Documentation = () => (
  <Layout>
    <h1>What is GraphQuill?</h1>
    <p>GraphQuill is a VS Code extension that performs GraphQL API endpoint testing within the VS Code environment. GraphQuill intends to remove the need for switching between VS Code and GraphiQL, Postman, or another API development tool.</p>
    <h1>Features</h1>
    <h2>Core Features</h2>
    <ol>
      <li>Starts your GraphQL server (if it is not already running).</li>
      <li>Parses GraphQL queries/mutations that are typed into the current open document in VS Code.</li>
      <li>Sends the queries/mutations to your GraphQL API.</li>
      <li>Renders the responses to the GraphQuill output channel on VS Code.</li>
    </ol>
    <h2>Additional Features</h2>
    <ul>
      <li>Output the current schema of your GraphQL API in the GraphQuill output channel.</li>
    </ul>
    <h1>Getting Started</h1>
    <h2>Installation</h2>
    <p>Graphquill can be installed from <a href="https://marketplace.visualstudio.com/items?itemName=sproutdeveloping.graphquill">the VS Code Extensions marketplace.</a></p>
    <h2>Getting up the config file</h2>
    <p>Open the command palette in VS Code (Cmd/Ctrl + Shift + P) and select <code>"GraphQuill: Create GraphQuill Config File"</code>. A default config file will be generated. Update the entry point and port number to finish your GraphQuill setup.</p>
    <h1>Write your first GraphQuill query</h1>
    <p>Search for GraphQuill from the command palette in VS Code (Cmd/Ctrl + Shift + P) and run the Activate command. If the <code>graphQuill</code> function is not defined, GraphQuill will inject a function definition on the top line of your file.</p>
    <p>Anywhere in your open file, put a GraphQL query inside a graphQuill function invocation.</p>
    <p>On every save, GraphQuill will send any requests inside of the graphQuill functions to your GraphQL API and show responses in the GraphQuill Output Channel. To send another request, create a new invokation of the <code>graphQuill</code> function and put the new request as the argument.</p>
    <h1>Contributing and Issues</h1>
    <p>We are always looking to improve. If there are any contributions or issues you have, please check out our <a href="https://github.com/oslabs-beta/GraphQuill">documentation</a> on contributions or issues.</p>
    <h1>Release Notes</h1>
    <p>Created by: Alex Chao, Austin Ruby and Edward Greenberg</p>
    <p>0.11.0 | Initial release of GraphQuill, More to come!</p>
  </Layout>
);

export default Documentation;
