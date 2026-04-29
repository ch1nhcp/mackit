'use client';

import type { App } from '@/lib/catalog';

import { AppIcon } from './AppIcon';

type Props = {
    app: App;
    selected: boolean;
    onToggle: (id: string) => void;
};

export function AppCard({ app, selected, onToggle }: Props) {
    return (
        <button
            type='button'
            onClick={() => onToggle(app.id)}
            aria-pressed={selected}
            className={[
                'group relative flex flex-col gap-4 rounded-2xl border p-5 text-left transition',
                'focus-visible:ring-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                selected
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-background text-foreground hover:border-foreground/40',
            ].join(' ')}>
            <div className='flex items-start justify-between gap-3'>
                <AppIcon app={app} size={52} />
                <span
                    aria-hidden
                    className={[
                        'mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 transition',
                        selected
                            ? 'border-background bg-background text-foreground'
                            : 'border-border bg-transparent group-hover:border-foreground/40',
                    ].join(' ')}>
                    {selected ? (
                        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' aria-hidden>
                            <path
                                d='M2 6.5L4.8 9.2L10 4'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    ) : null}
                </span>
            </div>
            <div className='flex flex-col gap-1'>
                <span
                    className='font-medium'
                    style={{ fontFamily: 'var(--font-manrope), sans-serif', letterSpacing: '-0.01em' }}>
                    {app.name}
                </span>
                <span
                    className={[
                        'text-sm leading-snug',
                        selected ? 'text-background/70' : 'text-muted-foreground',
                    ].join(' ')}>
                    {app.description}
                </span>
            </div>
        </button>
    );
}
