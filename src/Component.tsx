import React from 'react';

type Props = {
  property: string;
};

const Component = ({property}: Props) => {
  return(
    <>
      <p>{property}</p>
    </>
  );
};

export default Component;