'use client';

type Props = {
    count: number;
    onClear: () => void;
    onGenerate: () => void;
};

export function SelectionBar({ count, onClear, onGenerate }: Props) {
    if (count === 0) return null;
    return (
        <div className='pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-6'>
            <div className='surface-dark pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-4 rounded-full px-5 py-3 sm:px-7 sm:py-4'>
                <div className='flex items-center gap-3'>
                    <span
                        className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-medium text-[#191c1f]'
                        style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        {count}
                    </span>
                    <span className='text-sm text-white/80 sm:text-base'>
                        {count === 1 ? 'app selected' : 'apps selected'}
                    </span>
                </div>
                <div className='flex items-center gap-2'>
                    <button
                        type='button'
                        onClick={onClear}
                        className='hidden rounded-full px-4 py-2 text-sm text-white/70 transition hover:text-white sm:inline-flex'>
                        Clear
                    </button>
                    <button
                        type='button'
                        onClick={onGenerate}
                        className='inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#191c1f] transition hover:opacity-85 sm:px-6 sm:py-3 sm:text-base'
                        style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
                        Get install command
                    </button>
                </div>
            </div>
        </div>
    );
}
