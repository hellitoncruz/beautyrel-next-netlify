import { ReactNode, FC, useState, useEffect } from 'react';
import Script from 'next/script';
import Footer from './Footer';
import Loader from './Loader';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> =  ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Exibir o loader por 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        {isLoading ? <Loader /> : (
        <>
          <main>{children}</main>
          <Footer />
          <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
          <Script src="js/core.min.js" strategy="afterInteractive" />
          <Script src="js/script.js" strategy="afterInteractive" />
        </>
        )
      }
    </>
  );
};

export default Layout;
