import localFont from 'next/font/local';

import Navbar from '../components/common/navbar';
import './globals.css';

const charcoal = localFont({
  src: '../public/fonts/Charcoal.ttf',
  display: 'swap',
});

export const metadata = {
  title: 'Gitswitch',
  description: 'Super sick site by Gitswitch',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={charcoal.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
