import './globals.css';

export const metadata = {
  title: 'Hassan Ali — Amazon Brand & PPC Manager',
  description: 'Amazon Brand and PPC Manager with 5+ years of experience helping brands scale profitably across US and UK marketplaces.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
