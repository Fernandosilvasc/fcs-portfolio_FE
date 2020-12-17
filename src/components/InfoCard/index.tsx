import React from 'react';
import Media from 'react-media';

import InfoCardDesktop from './Desktop/index';
import InfoCardPortable from './Portable/index';

interface InfoCardProps {
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title }: InfoCardProps) => {
  return (
    <>
      <Media query={{ maxWidth: 1000 }}>
        {matches =>
          matches ? (
            <InfoCardPortable title={title} />
          ) : (
            <InfoCardDesktop title={title} />
          )}
      </Media>
    </>
  );
};

export default InfoCard;
