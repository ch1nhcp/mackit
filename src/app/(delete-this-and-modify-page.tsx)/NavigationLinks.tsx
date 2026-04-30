'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useI18n } from '@/lib/i18n/I18nProvider';

const NavigationLinks = () => {
    const pathname = usePathname();
    const { t } = useI18n();

    const links = [
        { href: '/', label: t.nav.home },
        { href: '/examples', label: t.nav.examples },
    ];

    return (
        <nav className='hidden items-center gap-2 sm:flex'>
            {links.map((link) => {
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
