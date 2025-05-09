import { FileDownloadIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { Download } from 'lucide-react';

interface PropertyHeaderProps {
  price: string;
  startingPrice: string;
  paymentPlan: string;
  handover: string;
}

export default function PropertyHeader({
  price,
  startingPrice,
  paymentPlan,
  handover,
}: PropertyHeaderProps) {
  return (
    <div className="border rounded-md p-4 bg-[#F5F8FC] my-5 space-y-4 ">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        <div className="bg-white p-4 rounded-md flex flex-col items-center gap-1 justify-between">
          <h1 className="text-lg font-medium text-center">{price}</h1>
          <p>{startingPrice}</p>
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col items-center gap-1 justify-between">
          <h1 className="text-lg font-medium text-center">{price}</h1>
          <p>{paymentPlan}</p>
        </div>
        <div className="bg-white p-4 rounded-md flex flex-col items-center gap-1 justify-between">
          <h1 className="text-lg font-medium text-center">{price}</h1>
          <p>{handover}</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <Button>Property Inquiry</Button>
        <Button
          variant={'outline'}
          className="shadow-none text-primary hover:text-primary flex gap-1"
        >
          <FileDownloadIcon /> Download Brochure
        </Button>
      </div>
    </div>
  );
}
