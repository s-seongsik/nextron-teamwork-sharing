import LayoutHeader from './header'
import LayoutDrawer from './appbar'

type LayoutProps = {
    children: React.ReactNode
};

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutDrawer />
        {children}
    </>
  );
}