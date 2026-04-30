export const LOCALES = ['en', 'vi'] as const;
export type Locale = (typeof LOCALES)[number];

export type Dict = {
    nav: {
        home: string;
        examples: string;
        getStarted: string;
    };
    hero: {
        eyebrow: string;
        headline1: string;
        headline2: string;
        body: string;
        cta: string;
        ctaSecondary: string;
    };
    popular: {
        eyebrow: string;
        title: string;
        appsCountSuffix: string;
    };
    how: {
        eyebrow: string;
        title: string;
        step1: string;
        step2: string;
        step3: string;
    };
    selectionBar: {
        appsSelected: (n: number) => string;
        clear: string;
        getInstall: string;
    };
    installDialog: {
        title: string;
        description: (n: number) => string;
        tabOneLiner: string;
        tabFullScript: string;
        copy: string;
        copied: string;
        download: string;
    };
    theme: {
        switchToDark: string;
        switchToLight: string;
    };
    locale: {
        switchTo: (target: string) => string;
    };
    footer: {
        tagline: string;
        sourceCode: string;
        license: string;
        rights: (year: number) => string;
    };
};

const dictionaries: Record<Locale, Dict> = {
    en: {
        nav: { home: 'Home', examples: 'Examples', getStarted: 'Get started' },
        hero: {
            eyebrow: 'mackit · macOS, batched',
            headline1: 'Install your Mac apps',
            headline2: 'in one command.',
            body: "Tick the apps you want. We'll generate a single Homebrew command you paste into Terminal — no installers, no clicking through wizards, no babysitting.",
            cta: 'Browse apps',
            ctaSecondary: 'How it works',
        },
        popular: {
            eyebrow: 'Popular picks',
            title: 'The essentials.',
            appsCountSuffix: 'apps',
        },
        how: {
            eyebrow: 'How it works',
            title: 'Three steps. No surprises.',
            step1: 'Tick the apps you want from the categories above.',
            step2: 'We generate a single Homebrew command for everything you picked.',
            step3: 'Paste it into Terminal. Brew handles the rest, including its own install if needed.',
        },
        selectionBar: {
            appsSelected: (n) => (n === 1 ? 'app selected' : 'apps selected'),
            clear: 'Clear',
            getInstall: 'Get install command',
        },
        installDialog: {
            title: 'Run this in Terminal',
            description: (n) =>
                `${n} ${n === 1 ? 'app' : 'apps'} — Homebrew will be installed first if missing.`,
            tabOneLiner: 'One-liner',
            tabFullScript: 'Full script',
            copy: 'Copy command',
            copied: 'Copied',
            download: 'Download .sh',
        },
        theme: {
            switchToDark: 'Switch to dark theme',
            switchToLight: 'Switch to light theme',
        },
        locale: { switchTo: (target) => `Switch to ${target}` },
        footer: {
            tagline: 'macOS apps in one command, via Homebrew.',
            sourceCode: 'Source',
            license: 'MIT License',
            rights: (year) => `© ${year} mackit`,
        },
    },
    vi: {
        nav: { home: 'Trang chủ', examples: 'Ví dụ', getStarted: 'Bắt đầu' },
        hero: {
            eyebrow: 'mackit · macOS, gộp một lần',
            headline1: 'Cài ứng dụng Mac',
            headline2: 'bằng một lệnh.',
            body: 'Chọn ứng dụng bạn muốn. Chúng tôi sẽ tạo một lệnh Homebrew duy nhất để bạn dán vào Terminal — không trình cài đặt, không nhấn qua wizard, không phải chăm chút.',
            cta: 'Xem ứng dụng',
            ctaSecondary: 'Cách hoạt động',
        },
        popular: {
            eyebrow: 'Lựa chọn phổ biến',
            title: 'Những thứ cần thiết.',
            appsCountSuffix: 'ứng dụng',
        },
        how: {
            eyebrow: 'Cách hoạt động',
            title: 'Ba bước. Không bất ngờ.',
            step1: 'Chọn ứng dụng bạn muốn từ các danh mục bên trên.',
            step2: 'Chúng tôi tạo một lệnh Homebrew cho tất cả các ứng dụng bạn chọn.',
            step3: 'Dán vào Terminal. Brew lo phần còn lại, kể cả việc tự cài Homebrew nếu cần.',
        },
        selectionBar: {
            appsSelected: () => 'ứng dụng đã chọn',
            clear: 'Bỏ chọn',
            getInstall: 'Lấy lệnh cài đặt',
        },
        installDialog: {
            title: 'Chạy lệnh này trong Terminal',
            description: (n) => `${n} ứng dụng — Homebrew sẽ được cài trước nếu chưa có.`,
            tabOneLiner: 'Một dòng',
            tabFullScript: 'Toàn bộ script',
            copy: 'Sao chép lệnh',
            copied: 'Đã sao chép',
            download: 'Tải .sh',
        },
        theme: {
            switchToDark: 'Chuyển sang giao diện tối',
            switchToLight: 'Chuyển sang giao diện sáng',
        },
        locale: { switchTo: (target) => `Chuyển sang ${target}` },
        footer: {
            tagline: 'Cài ứng dụng macOS bằng một lệnh, qua Homebrew.',
            sourceCode: 'Mã nguồn',
            license: 'Giấy phép MIT',
            rights: (year) => `© ${year} mackit`,
        },
    },
};

export const localeLabels: Record<Locale, string> = {
    en: 'EN',
    vi: 'VI',
};

export function getDict(locale: Locale): Dict {
    return dictionaries[locale];
}
