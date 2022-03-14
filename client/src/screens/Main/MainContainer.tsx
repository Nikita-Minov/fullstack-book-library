import * as React from 'react';
import Main from './Main';


export const MainContainer = ({}) => {
  React.useEffect(() => {
    document.title = 'Book Library';
  });
  return (
    <Main/>
  );
};

export default MainContainer;
