'use client';

import { useMemo, useState } from 'react';

import { apps, categories } from '@/lib/catalog';

import { AppCard } from './AppCard';
import { InstallDialog } from './InstallDialog';
import { SelectionBar } from './SelectionBar';

export function MackitHome() {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [dialogOpen, setDialogOpen] = useState(false);

    const toggle = (id: string) =>
        setSelected((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });

    const popular = useMemo(() => apps.filter((a) => a.popular), []);
    const selectedIds = useMemo(() => [...selected], [selected]);

    return (
        <main className='flex flex-col pb-32'>
            {/* HERO */}
            <section className='mx-auto w-full max-w-7xl px-6 pt-16 pb-12 sm:pt-24 lg:px-10 lg:pt-28'>
                <div className='flex flex-col gap-8'>
                    <span className='display-nav text-muted-foreground'>mackit · macOS, batched</span>
                    <h1 className='display-mega text-foreground'>
                        Install your Mac apps
                        <br />
                        <span className='text-muted-foreground'>in one command.</span>
                    </h1>
                    <p className='body-lg text-muted-foreground max-w-2xl'>
                        Tick the apps you want. We&apos;ll generate a single Homebrew command you paste into
                        Terminal — no installers, no clicking through wizards, no babysitting.
                    </p>
                    <div className='flex flex-wrap items-center gap-3'>
                        <a href='#popular' className='btn-pill btn-pill-primary'>
                            Browse apps
                        </a>
                        <a href='#how' className='btn-pill btn-pill-outline'>
                            How it works
                        </a>
                    </div>
                </div>
            </section>

            {/* POPULAR */}
            <section id='popular' className='mx-auto w-full max-w-7xl px-6 py-12 lg:px-10'>
                <div className='mb-8 flex items-end justify-between gap-6'>
                    <div className='flex max-w-2xl flex-col gap-2'>
                        <span className='display-nav text-muted-foreground'>Popular picks</span>
                        <h2 className='display-section text-foreground'>The essentials.</h2>
                    </div>
                    <span className='text-muted-foreground hidden text-sm sm:block'>
                        {popular.length} apps
                    </span>
                </div>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {popular.map((app) => (
                        <AppCard
                            key={app.id}
                            app={app}
                            selected={selected.has(app.id)}
                            onToggle={toggle}
                        />
                    ))}
                </div>
            </section>

            {/* CATEGORIES */}
            {categories.map((cat) => {
                const list = apps.filter((a) => a.category === cat.id);
                if (list.length === 0) return null;
                return (
                    <section
                        key={cat.id}
                        id={cat.id}
                        className='mx-auto w-full max-w-7xl px-6 py-10 lg:px-10'>
                        <div className='mb-6 flex items-end justify-between gap-6'>
                            <div className='flex items-center gap-4'>
                                <span
                                    aria-hidden
                                    className='inline-block h-10 w-10 rounded-2xl'
                                    style={{ backgroundColor: cat.accent }}
                                />
                                <h2
                                    className='text-3xl font-medium sm:text-4xl'
                                    style={{
                                        fontFamily: 'var(--font-manrope), sans-serif',
                                        letterSpacing: '-0.02em',
                                    }}>
                                    {cat.label}
                                </h2>
                            </div>
                            <span className='text-muted-foreground hidden text-sm sm:block'>
                                {list.length} {list.length === 1 ? 'app' : 'apps'}
                            </span>
                        </div>
                        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {list.map((app) => (
                                <AppCard
                                    key={app.id}
                                    app={app}
                                    selected={selected.has(app.id)}
                                    onToggle={toggle}
                                />
                            ))}
                        </div>
                    </section>
                );
            })}

            {/* HOW IT WORKS */}
            <section id='how' className='surface-dark mt-16'>
                <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-10'>
                    <div className='mb-12 flex max-w-3xl flex-col gap-4'>
                        <span className='display-nav text-white/60'>How it works</span>
                        <h2 className='display-section'>Three steps. No surprises.</h2>
                    </div>
                    <div className='grid gap-12 md:grid-cols-3'>
                        <div className='space-y-3'>
                            <p className='display-card'>01</p>
                            <p className='body-base text-white/70'>
                                Tick the apps you want from the categories above.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <p className='display-card'>02</p>
                            <p className='body-base text-white/70'>
                                We generate a single Homebrew command for everything you picked.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <p className='display-card'>03</p>
                            <p className='body-base text-white/70'>
                                Paste it into Terminal. Brew handles the rest, including its own install if needed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <SelectionBar
                count={selected.size}
                onClear={() => setSelected(new Set())}
                onGenerate={() => setDialogOpen(true)}
            />
            <InstallDialog open={dialogOpen} onOpenChange={setDialogOpen} selectedIds={selectedIds} />
        </main>
    );
}
