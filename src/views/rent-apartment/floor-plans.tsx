import { FileDownloadIcon } from 'components/icons';
import { Button } from 'components/ui/button';
import Image from 'next/image';

export default function FloorPlans() {
  const plans = [
    { title: '5 Bedroom Villas Villa', size: '7,820 sq.ft' },
    { title: '5 Bedroom Villas Villa', size: '7,820 sq.ft' },
    { title: '5 Bedroom Villas Villa', size: '7,820 sq.ft' },
  ];

  return (
    <div className="bg-[#F5F8FC] rounded-md border p-4">
      <h2 className="text-2xl font-bold mb-4">Property Types & Floor Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4">
            <div className="aspect-square relative mb-4">
              <Image
                src="/map.png"
                alt={plan.title}
                width={200}
                height={200}
                className="w-full object-contain"
              />
            </div>
            <h1 className="font-medium mb-1 text-lg">{plan.title}</h1>
            <p className="text-sm text-muted-foreground mb-3">
              From {plan.size}
            </p>
            <Button variant="default" className="w-full">
              Register your Interest
            </Button>
          </div>
        ))}
      </div>

      <Button className="shadow-none flex gap-1 w-full">
        <FileDownloadIcon /> Download all floor plans
      </Button>
    </div>
  );
}
