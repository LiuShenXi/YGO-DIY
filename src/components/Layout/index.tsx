import NavigationBar from '../NavigationBar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
