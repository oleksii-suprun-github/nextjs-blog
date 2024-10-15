import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'min-h-dvh'}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
