type TransferOrderCreate = {
  payment_type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  meet_sign: string;
  promo_code: string | null;
  transfer: {
    transfer_rate: number;
    pickup_date: string;
    return_date: string | null;
    passengers: number;
    child_seat: number;
    booster_seat: number;
    driver_notes: string | null;
    flight_number: string | null;
  };
};
