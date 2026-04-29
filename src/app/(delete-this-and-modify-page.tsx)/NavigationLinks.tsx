'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVIGATION_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/examples', label: 'Examples' }
];

const NavigationLinks = () => {
    const pathname = usePathname();

    return (
        <nav className='hidden items-center gap-2 sm:flex'>
            {NAVIGATION_LINKS.map((link) => {
                const active = link.href === '/' ? pathname === link.href : pathname.includes(link.href);

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`display-nav rounded-full px-4 py-2 text-base transition-opacity hover:opacity-70 ${
                            active ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavigationLinks;
