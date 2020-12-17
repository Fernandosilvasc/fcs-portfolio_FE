/* eslint-disable prettier/prettier */
import React from 'react';
import Media from 'react-media';

import GitHubFeedsDesktop from './Desktop/index';
import GitHubFeedsPortable from './Portable/index';

const GitHubFeeds: React.FC = () => {
  return (
    <>
      <Media query={{ maxWidth: 1000 }}>
        {matches =>
          matches ? <GitHubFeedsPortable /> : <GitHubFeedsDesktop />}
      </Media>
    </>
  );
};

export default GitHubFeeds;
