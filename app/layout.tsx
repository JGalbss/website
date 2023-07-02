import localFont from 'next/font/local';

import Navbar from '../components/common/navbar';
import './globals.css';
import { cx } from 'class-variance-authority';

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
      <body className={cx(charcoal.className, 'bg-indigo-8')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
