import type { App } from '@/lib/catalog';
import { categories } from '@/lib/catalog';

type Props = { app: App; size?: number };

export function AppIcon({ app, size = 56 }: Props) {
    const category = categories.find((c) => c.id === app.category);
    const initials = app.name
        .replace(/[^A-Za-z0-9 ]/g, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join('');
    return (
        <div
            className='flex shrink-0 items-center justify-center font-medium'
            style={{
                width: size,
                height: size,
                borderRadius: 14,
                backgroundColor: category?.accent ?? '#f4f4f4',
                color: '#191c1f',
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: size * 0.36,
                letterSpacing: '-0.02em',
            }}
            aria-hidden>
            {initials || '?'}
        </div>
    );
}
