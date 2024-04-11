import { FC, PropsWithChildren, ReactElement } from 'react';
import { StyledComponents } from './components/StyledComponents';
import { Footer } from '../footer/Footer';

interface PageProps {
  header: ReactElement;
}

export const Page: FC<PropsWithChildren<PageProps>> = ({
  children,
  header,
}) => {
  return (
    <StyledComponents>
      {header}
      {children}
      <Footer />
    </StyledComponents>
  );
};
