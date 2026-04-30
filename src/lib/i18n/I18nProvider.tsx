'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import type { Dict, Locale } from './dictionaries';
import { LOCALES, getDict } from './dictionaries';

const STORAGE_KEY = 'mackit:locale';

type Ctx = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

function isLocale(value: string | null): value is Locale {
    return value !== null && (LOCALES as readonly string[]).includes(value);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (isLocale(stored)) {
            setLocaleState(stored);
            return;
        }
        const browser = navigator.language.toLowerCase();
        if (browser.startsWith('vi')) setLocaleState('vi');
    }, []);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const setLocale = (next: Locale) => {
        setLocaleState(next);
        localStorage.setItem(STORAGE_KEY, next);
    };

    return (
        <I18nContext.Provider value={{ locale, setLocale, t: getDict(locale) }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
    return ctx;
}
