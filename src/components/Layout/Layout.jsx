import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;
export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Домашня</StyledLink>
          </li>
          <li>
            <StyledLink to="/dogs">Колекція</StyledLink>
          </li>
        </ul>
      </header>

      <main style={{ marginRight: '20px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </div>
  );
};
