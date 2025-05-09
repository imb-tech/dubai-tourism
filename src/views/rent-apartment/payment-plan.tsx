import { FileDownloadIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import { Download } from 'lucide-react';

export default function PaymentPlan() {
  const paymentSteps = [
    {
      installment: 'Down Payment',
      payment: '10%',
      milestone: 'On Booking Date',
    },
    {
      installment: 'Easy Installment',
      payment: '40%',
      milestone: 'During Construction',
    },
    {
      installment: 'Final Installment',
      payment: '50%',
      milestone: 'Upon Handover',
    },
  ];

  return (
    <div className="bg-[#F5F8FC] rounded-md border p-4">
      <h2 className="text-2xl font-bold mb-4">50/50 Payment Plan</h2>

      <div className=" mb-4">
        <div className="grid grid-cols-3 gap-4 mb-2 font-medium">
          <div>Installments</div>
          <div>Payment</div>
          <div>Milestone</div>
        </div>

        {paymentSteps.map((step, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 py-3 border-t text-muted-foreground"
          >
            <div>{step.installment}</div>
            <div>{step.payment}</div>
            <div>{step.milestone}</div>
          </div>
        ))}
      </div>

      <Button
        variant={'outline'}
        className="shadow-none text-primary hover:text-primary flex gap-1 w-full"
      >
        <FileDownloadIcon /> Download Brochure
      </Button>
    </div>
  );
}
