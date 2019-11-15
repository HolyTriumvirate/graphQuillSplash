import React from 'react';
import Image from '../../components/image';

const docum = () => (
  <>
    <div>some doc inside another folder...</div>
    <div className="400PXHERE" style={{ maxWidth: '400px' }}>
      {/* wrapping an image in a div with a max width can be used to control it's size... */}
      {/* could alternatively use a class to style the div boxes that should
      all be the same width? */}
      <Image />
    </div>
  </>
);

export default docum;
