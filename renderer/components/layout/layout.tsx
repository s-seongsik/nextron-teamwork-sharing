import LayoutHeader from './header'
import LayoutAppbar from './appbar'

type LayoutProps = {
    children: React.ReactNode
};

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutAppbar />
        {children}
    </>
  );
}