export type CategoryId =
    | 'browsers'
    | 'communication'
    | 'productivity'
    | 'media'
    | 'developer'
    | 'utilities'
    | 'creative';

export type App = {
    id: string;
    name: string;
    type: 'cask' | 'formula';
    category: CategoryId;
    description: string;
    homepage: string;
    popular?: boolean;
};

export type Category = {
    id: CategoryId;
    label: string;
    accent: string; // background tint for category, kept muted to honor the marketing palette
};

export const categories: Category[] = [
    { id: 'browsers', label: 'Browsers', accent: '#eef0ff' },
    { id: 'communication', label: 'Communication', accent: '#fde8ee' },
    { id: 'productivity', label: 'Productivity', accent: '#e7f5ee' },
    { id: 'media', label: 'Media', accent: '#fff1de' },
    { id: 'developer', label: 'Developer', accent: '#e8f1f7' },
    { id: 'utilities', label: 'Utilities', accent: '#f1f0eb' },
    { id: 'creative', label: 'Creative', accent: '#f5e9e6' },
];

export const apps: App[] = [
    // Browsers
    {
        id: 'google-chrome',
        name: 'Google Chrome',
        type: 'cask',
        category: 'browsers',
        description: 'Web browser',
        homepage: 'https://google.com/chrome',
        popular: true,
    },
    {
        id: 'firefox',
        name: 'Firefox',
        type: 'cask',
        category: 'browsers',
        description: 'Open-source browser',
        homepage: 'https://firefox.com',
        popular: true,
    },
    {
        id: 'arc',
        name: 'Arc',
        type: 'cask',
        category: 'browsers',
        description: 'Browser from The Browser Company',
        homepage: 'https://arc.net',
    },
    {
        id: 'brave-browser',
        name: 'Brave',
        type: 'cask',
        category: 'browsers',
        description: 'Privacy-first browser',
        homepage: 'https://brave.com',
    },
    // Communication
    {
        id: 'slack',
        name: 'Slack',
        type: 'cask',
        category: 'communication',
        description: 'Team messaging',
        homepage: 'https://slack.com',
        popular: true,
    },
    {
        id: 'discord',
        name: 'Discord',
        type: 'cask',
        category: 'communication',
        description: 'Voice & text chat',
        homepage: 'https://discord.com',
    },
    {
        id: 'zoom',
        name: 'Zoom',
        type: 'cask',
        category: 'communication',
        description: 'Video conferencing',
        homepage: 'https://zoom.us',
        popular: true,
    },
    // Productivity
    {
        id: 'notion',
        name: 'Notion',
        type: 'cask',
        category: 'productivity',
        description: 'Notes & docs',
        homepage: 'https://notion.so',
        popular: true,
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        type: 'cask',
        category: 'productivity',
        description: 'Markdown knowledge base',
        homepage: 'https://obsidian.md',
    },
    {
        id: 'raycast',
        name: 'Raycast',
        type: 'cask',
        category: 'productivity',
        description: 'Spotlight on steroids',
        homepage: 'https://raycast.com',
        popular: true,
    },
    {
        id: '1password',
        name: '1Password',
        type: 'cask',
        category: 'productivity',
        description: 'Password manager',
        homepage: 'https://1password.com',
    },
    // Media
    {
        id: 'spotify',
        name: 'Spotify',
        type: 'cask',
        category: 'media',
        description: 'Music streaming',
        homepage: 'https://spotify.com',
        popular: true,
    },
    {
        id: 'vlc',
        name: 'VLC',
        type: 'cask',
        category: 'media',
        description: 'Plays anything',
        homepage: 'https://videolan.org',
    },
    // Developer
    {
        id: 'visual-studio-code',
        name: 'VS Code',
        type: 'cask',
        category: 'developer',
        description: 'Code editor',
        homepage: 'https://code.visualstudio.com',
        popular: true,
    },
    {
        id: 'iterm2',
        name: 'iTerm2',
        type: 'cask',
        category: 'developer',
        description: 'Terminal replacement',
        homepage: 'https://iterm2.com',
    },
    {
        id: 'docker',
        name: 'Docker',
        type: 'cask',
        category: 'developer',
        description: 'Containers desktop',
        homepage: 'https://docker.com',
    },
    {
        id: 'gh',
        name: 'GitHub CLI',
        type: 'formula',
        category: 'developer',
        description: 'GitHub from the terminal',
        homepage: 'https://cli.github.com',
    },
    // Utilities
    {
        id: 'rectangle',
        name: 'Rectangle',
        type: 'cask',
        category: 'utilities',
        description: 'Window manager',
        homepage: 'https://rectangleapp.com',
        popular: true,
    },
    {
        id: 'the-unarchiver',
        name: 'The Unarchiver',
        type: 'cask',
        category: 'utilities',
        description: 'Open every archive',
        homepage: 'https://theunarchiver.com',
    },
    // Creative
    {
        id: 'figma',
        name: 'Figma',
        type: 'cask',
        category: 'creative',
        description: 'Design & prototyping',
        homepage: 'https://figma.com',
        popular: true,
    },
];

export function generateScript(selectedIds: string[]): string {
    const selected = apps.filter((a) => selectedIds.includes(a.id));
    const casks = selected.filter((a) => a.type === 'cask').map((a) => a.id);
    const formulae = selected.filter((a) => a.type === 'formula').map((a) => a.id);

    const lines: string[] = [
        '#!/bin/bash',
        '# Generated by mackit',
        'set -e',
        '',
        'if ! command -v brew &>/dev/null; then',
        '  echo "Installing Homebrew..."',
        '  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
        'fi',
        '',
    ];

    if (casks.length) lines.push(`brew install --cask ${casks.join(' ')}`);
    if (formulae.length) lines.push(`brew install ${formulae.join(' ')}`);

    return lines.join('\n');
}

export function generateOneLiner(selectedIds: string[]): string {
    const selected = apps.filter((a) => selectedIds.includes(a.id));
    const casks = selected.filter((a) => a.type === 'cask').map((a) => a.id);
    const formulae = selected.filter((a) => a.type === 'formula').map((a) => a.id);
    const parts: string[] = [];
    if (casks.length) parts.push(`brew install --cask ${casks.join(' ')}`);
    if (formulae.length) parts.push(`brew install ${formulae.join(' ')}`);
    return parts.join(' && ');
}
