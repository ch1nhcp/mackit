import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import NavigationBar from '@/app/(delete-this-and-modify-page.tsx)/NavigationBar';
import '@/app/globals.css';
import { Footer } from '@/components/mackit/Footer';
import { I18nProvider } from '@/lib/i18n/I18nProvider';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
    weight: ['400', '500', '600', '700']
});

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Mackit — fintech-grade tooling',
    description: 'A Revolut-inspired Next.js 16 starter built on shadcn/ui'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${inter.variable} ${manrope.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ThemeProvider attribute='class'>
                    <I18nProvider>
                        <NavigationBar />
                        {children}
                        <Footer />
                        <Toaster />
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
