import Link from 'next/link';

import NavigationLinks from '@/app/(delete-this-and-modify-page.tsx)/NavigationLinks';
import ThemeSwitch from '@/app/(delete-this-and-modify-page.tsx)/ThemeSwitch';

const NavigationBar = () => {
    return (
        <header className='border-border/60 border-b'>
            <div className='mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-6 px-6 py-5 sm:flex-row lg:px-10'>
                <div className='flex items-center gap-10'>
                    <Link href='/' className='display-nav text-foreground tracking-tight'>
                        Mackit
                    </Link>
                    <NavigationLinks />
                </div>
                <div className='flex w-full items-center justify-between gap-4 sm:w-auto'>
                    <ThemeSwitch />
                    <Link
                        href='https://github.com/SiddharthaMaity/nextjs-16-starter-shadcn'
                        target='_blank'
                        className='btn-pill btn-pill-primary'>
                        Get started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;
