import Link from 'next/link';

interface Feature {
    name: string;
}

interface Plugin {
    name: string;
    githubUrl: string;
}

const FEATURES: Feature[] = [
    { name: 'Next.js 16' },
    { name: 'React 19' },
    { name: 'Typescript 5' },
    { name: 'Tailwind CSS 4' },
    { name: 'ESLint 9' },
    { name: 'Shadcn UI' },
    { name: 'Prettier 3' },
    { name: 'App Directory' },
    { name: 'Light & Dark Mode' },
    { name: 'Bundle Analyzer' },
    { name: 'Dockerfile (Node + Bun)' }
];

const ESLINT_PLUGINS: Plugin[] = [
    { name: '@eslint/js', githubUrl: 'https://github.com/eslint/eslint' },
    { name: 'typescript-eslint', githubUrl: 'https://github.com/typescript-eslint/typescript-eslint' },
    { name: 'eslint-plugin-react', githubUrl: 'https://github.com/jsx-eslint/eslint-plugin-react' },
    { name: '@next/eslint-plugin-next', githubUrl: 'https://github.com/vercel/next.js' },
    { name: 'eslint-plugin-tailwindcss', githubUrl: 'https://github.com/francoismassart/eslint-plugin-tailwindcss' },
    { name: 'eslint-config-prettier', githubUrl: 'https://github.com/prettier/eslint-config-prettier' },
    { name: 'eslint-plugin-import', githubUrl: 'https://github.com/import-js/eslint-plugin-import' },
    { name: 'eslint-plugin-promise', githubUrl: 'https://github.com/eslint-community/eslint-plugin-promise' }
];

const PRETTIER_PLUGINS: Plugin[] = [
    { name: 'prettier-plugin-tailwindcss', githubUrl: 'https://github.com/tailwindlabs/prettier-plugin-tailwindcss' },
    {
        name: '@trivago/prettier-plugin-sort-imports',
        githubUrl: 'https://github.com/trivago/prettier-plugin-sort-imports'
    }
];

const SetupDetails: React.FC = () => {
    return (
        <div className='space-y-10'>
            <ul className='flex flex-wrap gap-2'>
                {FEATURES.map((feature) => (
                    <li
                        key={feature.name}
                        className='border-border/70 text-foreground display-nav rounded-full border px-4 py-2 text-base'>
                        {feature.name}
                    </li>
                ))}
            </ul>

            <div className='border-border/60 grid gap-10 border-t pt-10 md:grid-cols-2'>
                <div className='space-y-4'>
                    <h3 className='display-card text-foreground text-2xl'>ESLint plugins</h3>
                    <ul className='flex flex-wrap gap-x-4 gap-y-2'>
                        {ESLINT_PLUGINS.map((setup) => (
                            <li key={setup.name}>
                                <Link
                                    href={setup.githubUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-muted-foreground hover:text-foreground text-sm transition-colors'>
                                    {setup.name}
                                    <span className='ml-1'>↗</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h3 className='display-card text-foreground text-2xl'>Prettier plugins</h3>
                    <ul className='flex flex-wrap gap-x-4 gap-y-2'>
                        {PRETTIER_PLUGINS.map((plugin) => (
                            <li key={plugin.name}>
                                <Link
                                    href={plugin.githubUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-muted-foreground hover:text-foreground text-sm transition-colors'>
                                    {plugin.name}
                                    <span className='ml-1'>↗</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SetupDetails;
