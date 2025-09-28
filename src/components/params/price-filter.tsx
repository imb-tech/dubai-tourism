'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn, formatMoney } from 'lib/utils';

interface PriceFilterProps {
  minPrice?: number;
  maxPrice?: number;
  currency?: string;
}

function generatePriceDistribution(
  minPrice: number,
  maxPrice: number,
  segments = 24
): number[] {
  const distribution: number[] = [];
  const range = maxPrice - minPrice;

  if (range === 0) {
    return Array(segments).fill(1);
  }

  const step = range / segments;

  for (let i = 0; i < segments; i++) {
    const midpoint = minPrice + i * step + step / 2;

    const normalized = Math.log10(range || 1);
    const base = 5 + normalized * 5;

    const value = Math.round(
      base * Math.exp(-((maxPrice - midpoint) / range) * 2.5) +
        Math.random() * 3
    );

    distribution.push(value);
  }

  return distribution;
}

export default function PriceFilter({
  minPrice = 0,
  maxPrice = 50000,
  currency = 'AED',
}: PriceFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const maxParam = searchParams.get('max_price');
  const minParam = searchParams.get('min_price');
  const defaultMaxPrice = maxPrice > 0 ? maxPrice : 50000;

  const initialRangeRef = useRef({
    min: parseInt(minParam || '') || minPrice,
    max: parseInt(maxParam || '') || defaultMaxPrice,
  });

  const [values, setValues] = useState({
    min: initialRangeRef.current.min,
    max: initialRangeRef.current.max,
  });

  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);

  const priceDistribution = useMemo(
    () => generatePriceDistribution(minPrice, defaultMaxPrice),
    [minPrice, defaultMaxPrice]
  );
  const maxDistribution = Math.max(...priceDistribution);

  function getPercent(
    value: number,
    minPrice: number,
    maxPrice: number
  ): number {
    const percent = ((value - minPrice) / (maxPrice - minPrice)) * 100;
    return Math.max(0, Math.min(100, percent));
  }

  const minPercent = getPercent(values.min, minPrice, defaultMaxPrice);
  const maxPercent = getPercent(values.max, minPrice, defaultMaxPrice);

  useEffect(() => {
    const min = Number(searchParams.get('price_min') || minPrice);
    const max = Number(searchParams.get('price_max') || defaultMaxPrice);

    setValues({ min, max });
  }, [searchParams, minPrice, defaultMaxPrice]);

  const updateURL = useCallback(
    (min: number, max: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('price_min', min.toString());
      params.set('price_max', max.toString());
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const handleMouseDown = (type: 'min' | 'max') => {
    setIsDragging(type);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const slider = document.getElementById('price-slider');
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const percent = Math.max(
        0,
        Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
      );
      const value = Math.round(
        (percent / 100) * (defaultMaxPrice - minPrice) + minPrice
      );

      setValues((prev) => {
        const newValues = { ...prev };

        if (isDragging === 'min') {
          newValues.min = Math.min(value, prev.max - 1000);
        } else {
          newValues.max = Math.max(value, prev.min + 1000);
        }

        return newValues;
      });
    },
    [isDragging, minPrice, defaultMaxPrice]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(null);
      updateURL(values.min, values.max);
    }
  }, [isDragging, updateURL, values.min, values.max]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);


  return (
    <div className="w-full relative select-none">
      <div
        className={cn(
          ' px-5 py-2 cursor-pointer flex items-center justify-between w-full  bg-secondary rounded-lg ',
          isOpen && 'bg-primary/10 text-primary'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">Price</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5  transition-transform" />
        ) : (
          <ChevronDown className="h-5 w-5  transition-transform" />
        )}
      </div>

      {isOpen && (
        <div className="p-5 space-y-6 absolute  top-full mt-1 z-20 border bg-white shadow-2xl w-full rounded-lg ">
          <div className="relative h-24 flex items-end justify-between gap-0.5 px-1">
            {priceDistribution.map((value, index) => {
              const height = (value / maxDistribution) * 100;

              const pricePoint =
                minPrice +
                (index / (priceDistribution.length - 1)) *
                  (defaultMaxPrice - minPrice);

              const isInRange =
                pricePoint >= values.min && pricePoint <= values.max;

              return (
                <div
                  key={index}
                  className={`rounded-t-sm transition-colors duration-200 ${
                    isInRange ? 'bg-blue-500' : 'bg-blue-300'
                  }`}
                  style={{
                    height: `${Math.max(height, 5)}%`,
                    width: `${100 / priceDistribution.length - 0.5}%`,
                  }}
                />
              );
            })}
          </div>

          {/* Range Slider */}
          <div className="relative mt-8 mb-6">
            <div
              id="price-slider"
              className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
            >
              {/* Active Range */}
              <div
                className="absolute h-2 bg-blue-500 rounded-full"
                style={{
                  left: `${minPercent}%`,
                  width: `${Math.max(maxPercent - minPercent, 0)}%`,
                }}
              />

              {/* Min Handle */}
              <div
                className="absolute w-6 h-6 bg-white border-3 border-blue-500 rounded-full shadow-lg cursor-grab active:cursor-grabbing transform -translate-y-2 hover:scale-110 transition-transform"
                style={{ left: `calc(${minPercent}% - 14px)` }}
                onMouseDown={() => handleMouseDown('min')}
              />

              {/* Max Handle */}
              <div
                className="absolute w-6 h-6 bg-white border-3 border-blue-500 rounded-full shadow-lg cursor-grab active:cursor-grabbing transform -translate-y-2 hover:scale-110 transition-transform"
                style={{ left: `calc(${maxPercent}% - 14px)` }}
                onMouseDown={() => handleMouseDown('max')}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-secondary flex items-center gap-3 rounded-lg px-6 py-2 ">
              <div className="text-gray-500 text-sm font-semibold ">From:</div>
              <div className="text-gray-900 font-semibold">
                {formatMoney(values.min)} {currency}
              </div>
            </div>

            <div className="bg-secondary flex items-center gap-3 rounded-lg px-6 py-2 ">
              <div className="text-gray-500 text-sm font-semibold ">To:</div>
              <div className="text-gray-900 font-semibold">
                {formatMoney(values.max)} {currency}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
