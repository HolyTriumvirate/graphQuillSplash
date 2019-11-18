import React from 'react';
import Image from '../../components/image';

const docum = () => (
  <Layout>
      <>
    <div>
    <a href="https://reactime.io/">Reactime, a time-traveling React debugger.</a>
    <br/>
    <a href="https://trunq.io">TrunQ, a GraphQL caching solution.</a>
    </div>
    <div className="400PXHERE" style={{ maxWidth: '400px' }}>
      {/* wrapping an image in a div with a max width can be used to control it's size... */}
      {/* could alternatively use a class to style the div boxes that should
      all be the same width? */}
      <Image />
    </div>
  </>
  </Layout>

);

export default docum;
