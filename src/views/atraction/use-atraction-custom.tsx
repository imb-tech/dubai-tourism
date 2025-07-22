import { ReactNode, useCallback, useEffect, useMemo } from 'react';
import {
  UseFieldArrayReturn,
  useFieldArray,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import { formatMoney } from 'lib/utils';
import { format } from 'date-fns';

type OptionType = {
  id: number;
  name: number;
};

interface Params {
  adult: number;
  child: number;
  infant: number;
  adult_price: number;
  child_price: number;
  infant_price: number;
  discount_adults?: number;
  discount_child?: number;
  discount_infant?: number;
  transfer_price?: number;
  is_discount?: boolean;
}

type UseAtractionCustomReturn = {
  updateRow: (index: number, data: Partial<AtractionOffers>) => void;
  getOptions: (max?: number) => OptionType[];
  fields: UseFieldArrayReturn<AtractionDetail, 'offers'>['fields'];
  offers: AtractionOffers[];
  renderPrice: any;
  today: string;
  totalAmount: number;
};

export function usePriceCalculator() {
  const calculate = (params: Params) => {
    const {
      adult,
      child,
      infant,
      adult_price,
      child_price,
      infant_price,
      discount_adults = 0,
      discount_child = 0,
      discount_infant = 0,
      transfer_price = 0,
      is_discount = false,
    } = params;

    const original =
      adult * adult_price +
      child * child_price +
      infant * infant_price +
      transfer_price;

    const discounted =
      adult * (adult_price - discount_adults) +
      child * (child_price - discount_child) +
      infant * (infant_price - discount_infant) +
      transfer_price;

    return {
      original,
      discounted,
      display: formatMoney(is_discount ? discounted : original),
    };
  };

  return { calculate };
}

export function useAtractionCustom(): UseAtractionCustomReturn {
  const today = format(new Date(), 'yyyy-MM-dd');

  const form = useFormContext<AtractionDetail>();
  const { fields, update } = useFieldArray<AtractionDetail, 'offers'>({
    control: form.control,
    name: 'offers',
  });
  const { calculate } = usePriceCalculator();

  const offers =
    useWatch({
      control: form.control,
      name: 'offers',
    }) ?? [];

  const updateRow = useCallback(
    (index: number, data: Partial<AtractionOffers>) => {
      update(index, { ...fields[index], ...data });
    },
    [fields, update]
  );

  const renderPrice = useCallback(
    (row: AtractionOffers) => {
      return calculate({
        adult: row.adult ?? 1,
        child: row.child ?? 0,
        infant: row.infant ?? 0,
        adult_price: row.adult_price ?? 0,
        child_price: row.child_price ?? 0,
        infant_price: row.infant_price ?? 0,
        discount_adults: row.discount_adults,
        discount_child: row.discount_child,
        discount_infant: row.discount_infant,
        transfer_price: Number(row.selected_transfer?.price ?? 0),
        is_discount: row.selected_transfer?.is_discount ?? false,
      });
    },
    [calculate]
  );

  const getOptions = (max = 5) =>
    Array.from({ length: max + 1 }, (_, i) => ({ id: i, name: i }));

  const totalAmount = useMemo(() => {
    return offers.reduce((sum, row) => {
      const { discounted, original } = calculate({
        adult: row.adult ?? 1,
        child: row.child ?? 0,
        infant: row.infant ?? 0,
        adult_price: row.adult_price ?? 0,
        child_price: row.child_price ?? 0,
        infant_price: row.infant_price ?? 0,
        discount_adults: row.discount_adults,
        discount_child: row.discount_child,
        discount_infant: row.discount_infant,
        transfer_price: Number(row.selected_transfer?.price ?? 0),
        is_discount: row.selected_transfer?.is_discount ?? false,
      });
      return sum + (row.selected_transfer?.is_discount ? discounted : original);
    }, 0);
  }, [offers, calculate]);

  useEffect(() => {
    offers.forEach((row, index) => {
      const currentTransfer = row.selected_transfer;
      const options = row.transfer_options;

      if (!currentTransfer && !!options?.length) {
        const [first] = options;
        update(index, {
          ...fields[index],
          selected_transfer: {
            id: first.id,
            price: first.price,
            is_discount: first.is_discount,
          },
        });
      }
    });
  }, [fields, offers, update]);

  return {
    updateRow,
    getOptions,
    fields,
    offers,
    renderPrice,
    today,
    totalAmount,
  };
}
