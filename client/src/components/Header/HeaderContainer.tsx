import * as React from 'react';
import Header from './Header';
import {Link} from '../../types/components/Header/header.types';

export const HeaderContainer = ({}) => {
  const links: Array<Link> = [
    {name: 'Main', url: '/'},
    {name: 'Contacts', url: '/contacts'},
  ];
  return (
    <Header links={links}/>
  );
};

export default HeaderContainer;
