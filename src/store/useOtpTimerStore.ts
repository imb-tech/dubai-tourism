import { create } from 'zustand';

interface OtpTimerState {
    timer: number;
    isActive: boolean;
    startTimer: (seconds?: number) => void;
    resetTimer: () => void;
}

export const useOtpTimerStore = create<OtpTimerState>((set, get) => {
    let interval: NodeJS.Timeout | null = null;

    return {
        timer: 0,
        isActive: false,
        startTimer: (seconds = 119) => {
            if (interval) clearInterval(interval);
            set({ timer: seconds, isActive: true });

            interval = setInterval(() => {
                const current = get().timer;
                if (current <= 1) {
                    clearInterval(interval!);
                    set({ isActive: false, timer: 0 });
                } else {
                    set({ timer: current - 1 });
                }
            }, 1000);
        },
        resetTimer: () => {
            if (interval) clearInterval(interval);
            set({ timer: 0, isActive: false });
        },

    };
});
