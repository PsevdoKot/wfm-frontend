import { PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps): JSX.Element {
  return(
    <>
      <div>

      </div>
      <main>{ children }</main>
    </>
  );
}
