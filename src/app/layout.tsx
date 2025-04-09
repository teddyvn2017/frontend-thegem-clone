import './globals.css';
import 'boxicons/css/boxicons.min.css';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Grocery Store - TheGem',
	description: 'Shop fresh groceries online at TheGem! Browse a wide selection of fruits, vegetables, beverages, honey, and more for your daily needs.',
};

export default function RootLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (
	  <html lang="en">
		<body className={inter.className}>
			<Header />
				<main>{children}</main>
			<Footer />
		</body>
	  </html>
	);
  }