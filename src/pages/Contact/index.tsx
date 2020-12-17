import React from 'react';
import Media from 'react-media';

import ContactDesktop from './Desktop/index';
import ContactPortable from './Portable/index';

const Contact: React.FC = () => {
  return (
    <>
      <Media query={{ maxWidth: 1000 }}>
        {matches => (matches ? <ContactPortable /> : <ContactDesktop />)}
      </Media>
    </>
  );
};

export default Contact;
