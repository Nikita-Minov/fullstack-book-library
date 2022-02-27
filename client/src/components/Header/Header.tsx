import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {
  HeaderProps,
  LinkProps,
} from '../../types/components/Header/header.types';

const Header = ({links}:HeaderProps) => {
  return (
    <Wrapper>
      <Container>
        <Logo to='/'>
          BookLibrary
        </Logo>
        <Links length={links.length}>
          {links.map((el, id) => {
            return (<MenuLink key={id} to={el.url}>{el.name}</MenuLink>);
          })}
        </Links>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  width: 20%;
`;

const Links = styled.ul`
  width: ${(props: LinkProps) => props.length * 7}%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;


export default Header;
