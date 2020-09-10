import React from 'react';
import styled from 'styled-components';
import Logo from './logo.svg';

const Nav = styled.ul`
  display: flex;
  flex-flow: row;
  align-content: center;
`;

const BaseHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-items: space-between;
`;


const Header = () => (
  <BaseHeader>
    <Logo width="300" />
    <div>
      <Nav>
        <li>
          <a href="">Productos</a>
        </li>
        <li>
          <a href="">Nosotros</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </Nav>
    </div>
  </BaseHeader>
);

export default Header;