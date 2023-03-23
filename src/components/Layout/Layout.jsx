import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Container,
  MenuContainer,
  MenuItem,
  StyledLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <MenuContainer>
            <MenuItem>
              <StyledLink to="/">Домашня</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/dogs">Колекція</StyledLink>
            </MenuItem>
          </MenuContainer>
        </nav>
      </header>

      <main style={{ marginRight: '20px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </Container>
  );
};
