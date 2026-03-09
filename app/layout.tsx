import type {Metadata} from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Sistem AMI FAMA | Agri Market Insight',
  description: 'Platform digital pengumpulan, analisis dan penyebaran maklumat harga komoditi agromakanan Malaysia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ms" className={`${inter.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
