import Navigation from './copmonents/Navigation';

export const metadata = {
  title: 'The Wild Oasis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
