import Link from 'next/link';
import { useState } from 'react';
import CustomLink from 'ui/atoms/CustomLink';

import { Hamburger, HeaderWrapper, InnerWrapper, LogoColumn, NavColumn } from './index.styled';

const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <h1>sweet</h1>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
