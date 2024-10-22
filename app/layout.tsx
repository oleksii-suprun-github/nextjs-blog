import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={'min-h-dvh text-stone-300'}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
