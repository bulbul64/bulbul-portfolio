import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Syne } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { ThemeProvider } from '@/components/theme/theme-provider';

// ==========================
// Fonts
// ==========================
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

// ==========================
// Metadata (ONLY ONCE)
// ==========================
export const metadata: Metadata = {
  title: {
    default: 'Bulbul Portfolio',
    template: '%s | Bulbul Portfolio',
  },
  description: 'Bulbul Portfolio - Full Stack Web Developer',

  metadataBase: new URL('https://your-domain.com'),

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Bulbul Portfolio',
    description: 'Full Stack Web Developer Portfolio',
    url: 'https://your-domain.com',
    siteName: 'Bulbul Portfolio',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bulbul Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bulbul Portfolio',
    description: 'Full Stack Web Developer Portfolio',
    images: ['/og-image.png'],
  },
};

// ==========================
// Root Layout
// ==========================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        syne.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}