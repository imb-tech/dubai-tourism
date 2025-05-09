import { User3Icon } from 'components/icons';
import { cn } from 'lib/utils';
import React, { useMemo, useState } from 'react';

type Props = {
  setStep?: (v: number) => void;
};

export default function TransferSteps({ setStep }: Props) {
  const [active, _setActive] = useState<number>(1);

  const images = useMemo(
    () => steps?.filter((c) => c.id >= active || active - c.id === 1),
    [active]
  );

  function setActive(v: number) {
    _setActive(v);
    setStep?.(v);
  }

  return (
    <div className="max-w-full overflow-x-hidden">
      <div className="grid grid-cols-4 sm:grid-cols-3 py-3 gap-3 px-2 sm:px-0 min-w-[600px] md:hidden">
        {images?.map((st) => {
          const Ic = st.icon;
          return (
            <div
              key={st.id}
              className={cn(
                'flex flex-col gap-2 items-center text-primary py-5 rounded-md cursor-pointer relative',
                st.id === active ? 'bg-primary text-white' : 'bg-primary/5'
              )}
              onClick={() => setActive(st.id)}
            >
              <span className="absolute bg-background size-8 rounded-full text-primary flex items-center justify-center left-2 top-2">
                {st.id}
              </span>
              <span>
                <Ic size={32} />
              </span>
              <span className={st.id === active ? 'text-white' : 'text-black'}>
                {st.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="hidden md:grid grid-cols-4 sm:grid-cols-3 py-3 gap-3 px-2 sm:px-0 min-w-[600px]">
        {steps.map((st, i) => {
          const Ic = st.icon;
          return (
            <div
              key={st.id}
              className={cn(
                'flex flex-col gap-2 items-center text-primary py-5 rounded-md cursor-pointer relative',
                st.id === active ? 'bg-primary text-white' : 'bg-primary/5'
              )}
              onClick={() => setActive(st.id)}
            >
              <span className="absolute bg-background size-8 rounded-full text-primary flex items-center justify-center left-2 top-2">
                {i + 1}
              </span>
              <span className="">
                <Ic size={32} />
              </span>
              <span className={st.id === active ? 'text-white' : 'text-black'}>
                {st.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const NoteIcon = ({ size = 32 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      opacity="0.4"
      d="M9.82536 29.3327H22.1587C25.7454 29.3327 28.652 26.426 28.652 22.8393V11.1593C28.652 7.57268 25.7454 4.66602 22.1587 4.66602H9.82536C6.2387 4.66602 3.33203 7.57268 3.33203 11.1593V22.826C3.33203 26.426 6.2387 29.3327 9.82536 29.3327Z"
      fill="currentColor"
    />
    <path
      d="M11.0547 8.38601C10.4947 8.38601 10.0547 7.93268 10.0547 7.38601V3.66602C10.0547 3.11935 10.4947 2.66602 11.0547 2.66602C11.6147 2.66602 12.0547 3.11935 12.0547 3.66602V7.37268C12.0547 7.93268 11.6147 8.38601 11.0547 8.38601Z"
      fill="currentColor"
    />
    <path
      d="M20.9453 8.38601C20.3853 8.38601 19.9453 7.93268 19.9453 7.38601V3.66602C19.9453 3.10602 20.3986 2.66602 20.9453 2.66602C21.5053 2.66602 21.9453 3.11935 21.9453 3.66602V7.37268C21.9453 7.93268 21.5053 8.38601 20.9453 8.38601Z"
      fill="currentColor"
    />
    <path
      d="M19.7058 18.2793H9.8125C9.2525 18.2793 8.8125 17.826 8.8125 17.2793C8.8125 16.7326 9.26583 16.2793 9.8125 16.2793H19.7058C20.2658 16.2793 20.7058 16.7326 20.7058 17.2793C20.7058 17.826 20.2658 18.2793 19.7058 18.2793Z"
      fill="currentColor"
    />
    <path
      d="M15.9992 23.2266H9.8125C9.2525 23.2266 8.8125 22.7732 8.8125 22.2266C8.8125 21.6666 9.26583 21.2266 9.8125 21.2266H15.9992C16.5592 21.2266 16.9992 21.6799 16.9992 22.2266C16.9992 22.7732 16.5592 23.2266 15.9992 23.2266Z"
      fill="currentColor"
    />
  </svg>
);

const InvoiceIcon = ({ size = 32 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M29.332 7.99995V11.2266C29.332 13.3333 27.9987 14.6666 25.892 14.6666H21.332V5.34661C21.332 3.86661 22.5454 2.65328 24.0254 2.66661C25.4787 2.67995 26.812 3.26661 27.772 4.22661C28.732 5.19995 29.332 6.53328 29.332 7.99995Z"
      fill="currentColor"
    />
    <path
      opacity="0.4"
      d="M2.66797 9.33329V28C2.66797 29.1066 3.9213 29.7333 4.8013 29.0666L7.0813 27.36C7.61464 26.96 8.3613 27.0133 8.8413 27.4933L11.0546 29.72C11.5746 30.24 12.428 30.24 12.948 29.72L15.188 27.48C15.6546 27.0133 16.4013 26.96 16.9213 27.36L19.2013 29.0666C20.0813 29.72 21.3346 29.0933 21.3346 28V5.33329C21.3346 3.86663 22.5346 2.66663 24.0013 2.66663H9.33464H8.0013C4.0013 2.66663 2.66797 5.05329 2.66797 7.99996V9.33329Z"
      fill="currentColor"
    />
    <path
      d="M16 16.3467H12C11.4533 16.3467 11 16.8 11 17.3467C11 17.8933 11.4533 18.3467 12 18.3467H16C16.5467 18.3467 17 17.8933 17 17.3467C17 16.8 16.5467 16.3467 16 16.3467Z"
      fill="currentColor"
    />
    <path
      d="M12 13.0134H16C16.5467 13.0134 17 12.5601 17 12.0134C17 11.4668 16.5467 11.0134 16 11.0134H12C11.4533 11.0134 11 11.4668 11 12.0134C11 12.5601 11.4533 13.0134 12 13.0134Z"
      fill="currentColor"
    />
    <path
      d="M7.95833 10.6801C7.21167 10.6801 6.625 11.2801 6.625 12.0134C6.625 12.7467 7.225 13.3467 7.95833 13.3467C8.69167 13.3467 9.29167 12.7467 9.29167 12.0134C9.29167 11.2801 8.69167 10.6801 7.95833 10.6801Z"
      fill="currentColor"
    />
    <path
      d="M7.95833 16.0134C7.21167 16.0134 6.625 16.6134 6.625 17.3468C6.625 18.0801 7.225 18.6801 7.95833 18.6801C8.69167 18.6801 9.29167 18.0801 9.29167 17.3468C9.29167 16.6134 8.69167 16.0134 7.95833 16.0134Z"
      fill="currentColor"
    />
  </svg>
);

const steps = [
  {
    id: 1,
    label: 'Extra notes',
    icon: NoteIcon,
  },
  {
    id: 2,
    label: 'Passenger info',
    icon: User3Icon,
  },
  {
    id: 3,
    label: 'Payment',
    icon: InvoiceIcon,
  },
];
