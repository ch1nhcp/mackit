'use client';

import { LOCALES, localeLabels } from '@/lib/i18n/dictionaries';
import { useI18n } from '@/lib/i18n/I18nProvider';

export function LocaleSwitcher() {
    const { locale, setLocale, t } = useI18n();

    return (
        <div
            role='group'
            aria-label='Language'
            className='border-border/60 inline-flex items-center rounded-full border p-0.5'>
            {LOCALES.map((code) => {
                const active = code === locale;
                return (
                    <button
                        key={code}
                        type='button'
                        aria-pressed={active}
                        aria-label={t.locale.switchTo(localeLabels[code])}
                        onClick={() => setLocale(code)}
                        className={[
                            'rounded-full px-2.5 py-1 text-xs font-medium transition-colors',
                            active
                                ? 'bg-foreground text-background'
                                : 'text-muted-foreground hover:text-foreground',
                        ].join(' ')}>
                        {localeLabels[code]}
                    </button>
                );
            })}
        </div>
    );
}
