'use client';

import Link from 'next/link';

import NavigationLinks from '@/app/(delete-this-and-modify-page.tsx)/NavigationLinks';
import ThemeSwitch from '@/app/(delete-this-and-modify-page.tsx)/ThemeSwitch';
import { LocaleSwitcher } from '@/components/mackit/LocaleSwitcher';
import { useI18n } from '@/lib/i18n/I18nProvider';

const NavigationBar = () => {
    const { t } = useI18n();

    return (
        <header className='border-border/60 border-b'>
            <div className='mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-6 px-6 py-5 sm:flex-row lg:px-10'>
                <div className='flex items-center gap-10'>
                    <Link
                        href='/'
                        aria-label='Mackit'
                        className='display-nav text-foreground inline-flex items-center tracking-tight'>
                        <span>M</span>
                        <svg
                            aria-hidden='true'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='mx-[0.02em] inline-block h-[0.85em] w-[0.85em] translate-y-[-0.02em]'>
                            <path d='M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z' />
                        </svg>
                        <span>ckit</span>
                    </Link>
                    <NavigationLinks />
                </div>
                <div className='flex w-full items-center justify-between gap-3 sm:w-auto'>
                    <LocaleSwitcher />
                    <ThemeSwitch />
                    <Link
                        href='https://github.com/ch1nhcp/mackit'
                        target='_blank'
                        className='btn-pill btn-pill-primary'>
                        {t.nav.getStarted}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;
