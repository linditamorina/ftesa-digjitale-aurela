import type { Metadata } from 'next';
import { Cormorant_Garamond, Alex_Brush } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
});

// Importojmë Alex Brush
const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alex-brush',
});

export const metadata: Metadata = {
  title: 'Fejesa e Rrezonit dhe Aurelës',
  description: 'Ftesë Digjitale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq" className={`${cormorant.variable} ${alexBrush.variable}`}>
      <body className="font-serif antialiased bg-[#fdfaf9]">{children}</body>
    </html>
  );
}