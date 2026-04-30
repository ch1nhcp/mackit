'use client';

import { useEffect, useState } from 'react';

import { generateOneLiner, generateScript } from '@/lib/catalog';
import { useI18n } from '@/lib/i18n/I18nProvider';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/registry/new-york-v4/ui/dialog';

type Tab = 'oneliner' | 'script';

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    selectedIds: string[];
};

export function InstallDialog({ open, onOpenChange, selectedIds }: Props) {
    const { t } = useI18n();
    const [tab, setTab] = useState<Tab>('oneliner');
    const [copied, setCopied] = useState(false);

    const oneLiner = generateOneLiner(selectedIds);
    const script = generateScript(selectedIds);
    const display = tab === 'oneliner' ? oneLiner : script;

    useEffect(() => {
        if (!copied) return;
        const t = setTimeout(() => setCopied(false), 1500);
        return () => clearTimeout(t);
    }, [copied]);

    const onCopy = async () => {
        await navigator.clipboard.writeText(display);
        setCopied(true);
    };

    const onDownload = () => {
        const blob = new Blob([script], { type: 'text/x-shellscript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mackit-install.sh';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='w-full max-w-2xl rounded-2xl p-0 sm:max-w-2xl'>
                <div className='min-w-0 p-5 sm:p-7'>
                    <DialogHeader>
                        <DialogTitle
                            className='text-2xl'
                            style={{ fontFamily: 'var(--font-manrope), sans-serif', letterSpacing: '-0.02em' }}>
                            {t.installDialog.title}
                        </DialogTitle>
                        <DialogDescription className='text-muted-foreground'>
                            {t.installDialog.description(selectedIds.length)}
                        </DialogDescription>
                    </DialogHeader>

                    <div className='mt-5 inline-flex rounded-full bg-[#f4f4f4] p-1 text-sm'>
                        <button
                            type='button'
                            onClick={() => setTab('oneliner')}
                            className={[
                                'rounded-full px-4 py-1.5 transition',
                                tab === 'oneliner' ? 'bg-foreground text-background' : 'text-muted-foreground',
                            ].join(' ')}>
                            {t.installDialog.tabOneLiner}
                        </button>
                        <button
                            type='button'
                            onClick={() => setTab('script')}
                            className={[
                                'rounded-full px-4 py-1.5 transition',
                                tab === 'script' ? 'bg-foreground text-background' : 'text-muted-foreground',
                            ].join(' ')}>
                            {t.installDialog.tabFullScript}
                        </button>
                    </div>

                    <pre className='mt-4 max-h-72 w-full min-w-0 overflow-auto rounded-2xl bg-[#191c1f] p-4 font-mono text-xs leading-relaxed text-white sm:p-5 sm:text-sm'>
                        <code className='block whitespace-pre'>{display}</code>
                    </pre>

                    <div className='mt-5 flex flex-wrap gap-2'>
                        <button type='button' onClick={onCopy} className='btn-pill btn-pill-primary'>
                            {copied ? t.installDialog.copied : t.installDialog.copy}
                        </button>
                        <button type='button' onClick={onDownload} className='btn-pill btn-pill-outline'>
                            {t.installDialog.download}
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
