import { toast } from 'sonner';

export function onError(err: any) {
  const arrayErrors = Object.entries(err?.response?.data || {});
  if (arrayErrors.length > 0) {
    toast.error(
      arrayErrors.map(([_, value]) => value + ''),
      { duration: 3000 }
    );
  } else {
    toast.error(err?.message, { duration: 3000 });
  }
}
