'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

const ThemeSwitch: React.FC = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDark = mounted && resolvedTheme === 'dark';
    const next = isDark ? 'light' : 'dark';

    return (
        <button
            type='button'
            aria-label={`Switch to ${next} theme`}
            onClick={() => setTheme(next)}
            className='text-foreground hover:bg-foreground/5 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={1.75}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='size-[18px]'
                aria-hidden='true'>
                {isDark ? (
                    <>
                        <circle cx='12' cy='12' r='4' />
                        <path d='M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.06 1.06M17.34 17.34l1.06 1.06M5.6 18.4l1.06-1.06M17.34 6.66l1.06-1.06' />
                    </>
                ) : (
                    <path d='M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z' />
                )}
            </svg>
        </button>
    );
};

export default ThemeSwitch;
