import type { Locale } from '@/lib/i18n/dictionaries';

export type CategoryId =
    | 'browsers'
    | 'communication'
    | 'productivity'
    | 'media'
    | 'developer'
    | 'utilities'
    | 'creative';

export type Localized = Record<Locale, string>;

export type App = {
    id: string;
    name: string;
    type: 'cask' | 'formula';
    category: CategoryId;
    description: Localized;
    homepage: string;
    popular?: boolean;
};

export type Category = {
    id: CategoryId;
    label: Localized;
    accent: string; // background tint for category, kept muted to honor the marketing palette
};

export const categories: Category[] = [
    { id: 'browsers', label: { en: 'Browsers', vi: 'Trình duyệt' }, accent: '#eef0ff' },
    { id: 'communication', label: { en: 'Communication', vi: 'Liên lạc' }, accent: '#fde8ee' },
    { id: 'productivity', label: { en: 'Productivity', vi: 'Năng suất' }, accent: '#e7f5ee' },
    { id: 'media', label: { en: 'Media', vi: 'Đa phương tiện' }, accent: '#fff1de' },
    { id: 'developer', label: { en: 'Developer', vi: 'Nhà phát triển' }, accent: '#e8f1f7' },
    { id: 'utilities', label: { en: 'Utilities', vi: 'Tiện ích' }, accent: '#f1f0eb' },
    { id: 'creative', label: { en: 'Creative', vi: 'Sáng tạo' }, accent: '#f5e9e6' },
];

export const apps: App[] = [
    {
        id: 'google-chrome',
        name: 'Google Chrome',
        type: 'cask',
        category: 'browsers',
        description: { en: 'Web browser', vi: 'Trình duyệt web' },
        homepage: 'https://google.com/chrome',
        popular: true,
    },
    {
        id: 'firefox',
        name: 'Firefox',
        type: 'cask',
        category: 'browsers',
        description: { en: 'Open-source browser', vi: 'Trình duyệt mã nguồn mở' },
        homepage: 'https://firefox.com',
        popular: true,
    },
    {
        id: 'arc',
        name: 'Arc',
        type: 'cask',
        category: 'browsers',
        description: {
            en: 'Browser from The Browser Company',
            vi: 'Trình duyệt từ The Browser Company',
        },
        homepage: 'https://arc.net',
    },
    {
        id: 'brave-browser',
        name: 'Brave',
        type: 'cask',
        category: 'browsers',
        description: { en: 'Privacy-first browser', vi: 'Trình duyệt tập trung quyền riêng tư' },
        homepage: 'https://brave.com',
    },
    {
        id: 'slack',
        name: 'Slack',
        type: 'cask',
        category: 'communication',
        description: { en: 'Team messaging', vi: 'Nhắn tin nhóm' },
        homepage: 'https://slack.com',
        popular: true,
    },
    {
        id: 'discord',
        name: 'Discord',
        type: 'cask',
        category: 'communication',
        description: { en: 'Voice & text chat', vi: 'Trò chuyện thoại & văn bản' },
        homepage: 'https://discord.com',
    },
    {
        id: 'zoom',
        name: 'Zoom',
        type: 'cask',
        category: 'communication',
        description: { en: 'Video conferencing', vi: 'Họp video' },
        homepage: 'https://zoom.us',
        popular: true,
    },
    {
        id: 'notion',
        name: 'Notion',
        type: 'cask',
        category: 'productivity',
        description: { en: 'Notes & docs', vi: 'Ghi chú & tài liệu' },
        homepage: 'https://notion.so',
        popular: true,
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        type: 'cask',
        category: 'productivity',
        description: { en: 'Markdown knowledge base', vi: 'Cơ sở tri thức Markdown' },
        homepage: 'https://obsidian.md',
    },
    {
        id: 'raycast',
        name: 'Raycast',
        type: 'cask',
        category: 'productivity',
        description: { en: 'Spotlight on steroids', vi: 'Spotlight nâng cấp' },
        homepage: 'https://raycast.com',
        popular: true,
    },
    {
        id: '1password',
        name: '1Password',
        type: 'cask',
        category: 'productivity',
        description: { en: 'Password manager', vi: 'Trình quản lý mật khẩu' },
        homepage: 'https://1password.com',
    },
    {
        id: 'spotify',
        name: 'Spotify',
        type: 'cask',
        category: 'media',
        description: { en: 'Music streaming', vi: 'Nghe nhạc trực tuyến' },
        homepage: 'https://spotify.com',
        popular: true,
    },
    {
        id: 'vlc',
        name: 'VLC',
        type: 'cask',
        category: 'media',
        description: { en: 'Plays anything', vi: 'Phát mọi định dạng' },
        homepage: 'https://videolan.org',
    },
    {
        id: 'visual-studio-code',
        name: 'VS Code',
        type: 'cask',
        category: 'developer',
        description: { en: 'Code editor', vi: 'Trình soạn mã' },
        homepage: 'https://code.visualstudio.com',
        popular: true,
    },
    {
        id: 'iterm2',
        name: 'iTerm2',
        type: 'cask',
        category: 'developer',
        description: { en: 'Terminal replacement', vi: 'Thay thế Terminal' },
        homepage: 'https://iterm2.com',
    },
    {
        id: 'docker',
        name: 'Docker',
        type: 'cask',
        category: 'developer',
        description: { en: 'Containers desktop', vi: 'Docker container' },
        homepage: 'https://docker.com',
    },
    {
        id: 'gh',
        name: 'GitHub CLI',
        type: 'formula',
        category: 'developer',
        description: { en: 'GitHub from the terminal', vi: 'GitHub từ terminal' },
        homepage: 'https://cli.github.com',
    },
    {
        id: 'rectangle',
        name: 'Rectangle',
        type: 'cask',
        category: 'utilities',
        description: { en: 'Window manager', vi: 'Quản lý cửa sổ' },
        homepage: 'https://rectangleapp.com',
        popular: true,
    },
    {
        id: 'the-unarchiver',
        name: 'The Unarchiver',
        type: 'cask',
        category: 'utilities',
        description: { en: 'Open every archive', vi: 'Mở mọi định dạng nén' },
        homepage: 'https://theunarchiver.com',
    },
    {
        id: 'figma',
        name: 'Figma',
        type: 'cask',
        category: 'creative',
        description: { en: 'Design & prototyping', vi: 'Thiết kế & dựng mẫu' },
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
