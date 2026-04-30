'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useI18n } from '@/lib/i18n/I18nProvider';

const HOMEBREW_INSTALL =
    '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"';

export function HomebrewSection() {
    const { t } = useI18n();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const id = setTimeout(() => setCopied(false), 1500);
        return () => clearTimeout(id);
    }, [copied]);

    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(HOMEBREW_INSTALL);
            setCopied(true);
        } catch {
            /* clipboard blocked — user can still select & copy from the pre */
        }
    };

    return (
        <section id='homebrew' className='surface-light'>
            <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-10'>
                <div className='grid gap-12 md:grid-cols-2 md:gap-16'>
                    {/* Left: explainer */}
                    <div className='flex flex-col gap-5'>
                        <span className='display-nav text-muted-foreground'>{t.homebrew.eyebrow}</span>
                        <h2 className='display-section text-foreground'>{t.homebrew.title}</h2>
                        <p className='body-lg text-muted-foreground max-w-xl'>{t.homebrew.body}</p>
                        <div className='mt-2 flex flex-wrap gap-3'>
                            <Link
                                href='https://brew.sh'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn-pill btn-pill-primary'>
                                {t.homebrew.visitSite}
                            </Link>
                            <Link
                                href='https://docs.brew.sh'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn-pill btn-pill-outline'>
                                {t.homebrew.readDocs}
                            </Link>
                        </div>
                    </div>

                    {/* Right: install one-liner */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between gap-3'>
                            <span className='display-nav text-muted-foreground'>{t.homebrew.installEyebrow}</span>
                            <button
                                type='button'
                                onClick={onCopy}
                                aria-label={t.installDialog.copy}
                                className='text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs transition-colors'>
                                <svg
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth={1.75}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='size-4'
                                    aria-hidden='true'>
                                    <rect x='8' y='8' width='12' height='12' rx='2' />
                                    <path d='M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2' />
                                </svg>
                                {copied ? t.installDialog.copied : t.installDialog.copy}
                            </button>
                        </div>
                        <pre className='max-h-72 w-full min-w-0 overflow-auto rounded-2xl bg-[#191c1f] p-4 font-mono text-xs leading-relaxed text-white sm:p-5 sm:text-sm'>
                            <code className='block whitespace-pre'>{HOMEBREW_INSTALL}</code>
                        </pre>
                        <p className='body-base text-muted-foreground'>{t.homebrew.alreadyHave}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
