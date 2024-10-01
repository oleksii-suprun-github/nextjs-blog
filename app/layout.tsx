import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'min-h-dvh bg-brand-purple'}>{children}</body>
    </html>
  );
}
