import Link from 'next/link';

import ExtensionDetails from '@/app/(delete-this-and-modify-page.tsx)/ExtensionDetails';
import SetupDetails from '@/app/(delete-this-and-modify-page.tsx)/SetupDetails';

const HomePage: React.FC = () => {
    return (
        <main className='flex flex-col'>
            {/* HERO — billboard scale, white surface, near-black ink */}
            <section className='mx-auto w-full max-w-7xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:px-10 lg:pt-32 lg:pb-40'>
                <div className='flex flex-col gap-12'>
                    <div className='flex max-w-5xl flex-col gap-8'>
                        <span className='display-nav text-muted-foreground'>Next.js 16 · React 19 · shadcn/ui</span>
                        <h1 className='display-mega text-foreground'>
                            Build interfaces
                            <br />
                            <span className='text-muted-foreground'>at stadium scale.</span>
                        </h1>
                        <p className='body-lg text-muted-foreground max-w-2xl'>
                            A fintech-grade starter kit. Aeonik-inspired display type, Inter for prose, and a
                            disciplined near-black-and-white palette that puts your product at the centre.
                        </p>
                    </div>
                    <div className='flex flex-wrap items-center gap-3'>
                        <Link
                            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-pill btn-pill-primary'>
                            Deploy now
                        </Link>
                        <Link
                            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-pill btn-pill-outline'>
                            Read the docs
                        </Link>
                    </div>
                </div>
            </section>

            {/* DARK SECTION — feature stats */}
            <section className='surface-dark'>
                <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-10 lg:py-32'>
                    <div className='grid gap-12 md:grid-cols-3'>
                        <div className='space-y-3'>
                            <p className='display-card'>16</p>
                            <p className='body-base text-white/70'>
                                Built on Next.js 16 with the App Router and React 19 server components.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <p className='display-card'>40+</p>
                            <p className='body-base text-white/70'>
                                shadcn/ui primitives wired and ready — accordion, dialog, table, command and more.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <p className='display-card'>0</p>
                            <p className='body-base text-white/70'>
                                Shadows. Depth comes from contrast, not blur — flat surfaces, sharp edges.
                            </p>
                        </div>
                    </div>
                    <div className='mt-16 flex flex-wrap gap-3'>
                        <Link
                            href='https://github.com/SiddharthaMaity/nextjs-16-starter-shadcn'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-pill btn-pill-ghost-dark'>
                            View on GitHub
                        </Link>
                        <Link
                            href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-pill btn-pill-secondary'>
                            Visit nextjs.org
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-10 lg:py-32'>
                <div className='mb-12 flex max-w-3xl flex-col gap-4'>
                    <span className='display-nav text-muted-foreground'>Whats inside</span>
                    <h2 className='display-section text-foreground'>Every primitive you need.</h2>
                    <p className='body-lg text-muted-foreground'>
                        A curated stack built on production-tested defaults — TypeScript, Tailwind, Prettier and
                        ESLint, all pre-configured to ship.
                    </p>
                </div>
                <SetupDetails />
            </section>

            {/* LIGHT-SURFACE CARD — code snippet */}
            <section className='mx-auto w-full max-w-7xl px-6 pb-20 sm:pb-28 lg:px-10 lg:pb-32'>
                <div className='card-revolut flex flex-col gap-6'>
                    <span className='display-nav text-muted-foreground'>Quickstart</span>
                    <h3 className='display-card text-foreground'>Edit, save, ship.</h3>
                    <ol className='body-base text-muted-foreground list-inside list-decimal space-y-2'>
                        <li>
                            Get started by editing{' '}
                            <code className='bg-foreground/10 text-foreground rounded-md px-2 py-0.5 font-mono text-sm'>
                                src/app/page.tsx
                            </code>
                        </li>
                        <li>Save the file and watch the change appear instantly.</li>
                    </ol>
                </div>
            </section>

            {/* VS CODE EXTENSIONS */}
            <section className='mx-auto w-full max-w-7xl px-6 pb-24 sm:pb-32 lg:px-10 lg:pb-40'>
                <div className='mb-12 flex max-w-3xl flex-col gap-4'>
                    <span className='display-nav text-muted-foreground'>Tooling</span>
                    <h2 className='display-section text-foreground'>VS Code extensions, curated.</h2>
                    <p className='body-lg text-muted-foreground'>
                        The exact set the maintainers use day-to-day. Install one click at a time.
                    </p>
                </div>
                <ExtensionDetails />
            </section>

            {/* FOOTER — dark CTA */}
            <section className='surface-dark'>
                <div className='mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-6 py-20 sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:px-10'>
                    <h2 className='display-hero max-w-3xl'>
                        Ready to build something
                        <br />
                        worth shipping?
                    </h2>
                    <div className='flex flex-wrap gap-3'>
                        <Link
                            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-pill btn-pill-secondary'>
                            Deploy with Vercel
                        </Link>
                        <Link
                            href='https://github.com/SiddharthaMaity/nextjs-16-starter-shadcn'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-pill btn-pill-ghost-dark'>
                            Star on GitHub
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
