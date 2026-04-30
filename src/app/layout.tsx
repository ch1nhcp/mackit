import type { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';
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

const SITE_TITLE = 'mackit — install macOS apps in one command';
const SITE_DESCRIPTION =
    'Pick your Mac apps and mackit generates a single Homebrew command you paste into Terminal. No installers, no accounts, no daemons — just a transparent shell script you run yourself.';

export const metadata: Metadata = {
    title: {
        default: SITE_TITLE,
        template: '%s · mackit',
    },
    description: SITE_DESCRIPTION,
    applicationName: 'mackit',
    keywords: [
        'macOS',
        'Homebrew',
        'brew',
        'mac apps',
        'app installer',
        'batch install',
        'developer tools',
    ],
    authors: [{ name: 'mackit' }],
    creator: 'mackit',
    publisher: 'mackit',
    openGraph: {
        type: 'website',
        siteName: 'mackit',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        locale: 'en_US',
        alternateLocale: ['vi_VN'],
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#191c1f' },
    ],
    colorScheme: 'light dark',
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
