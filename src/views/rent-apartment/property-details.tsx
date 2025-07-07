interface PropertyDetailsProps {
  developer: string;
  propertyType: string;
  handover: string;
  paymentPlan: string;
  areaName: string;
}

export default function PropertyDetails({
  developer,
  propertyType,
  handover,
  paymentPlan,
  areaName,
}: PropertyDetailsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 border-b pb-2">
          <p className="text-sm text-muted-foreground">Developer</p>
          <p className="font-medium text-end">{developer}</p>
        </div>
        <div className="grid grid-cols-2 border-b pb-2">
          <p className="text-sm text-muted-foreground">Property Type</p>
          <p className="font-medium text-end">{propertyType}</p>
        </div>
        <div className="grid grid-cols-2 border-b pb-2">
          <p className="text-sm text-muted-foreground">Handover</p>
          <p className="font-medium text-end">{handover}</p>
        </div>
        <div className="grid grid-cols-2 border-b pb-2">
          <p className="text-sm text-muted-foreground">Payment Plan</p>
          <p className="font-medium text-end">{paymentPlan}</p>
        </div>
        <div className="grid grid-cols-2 border-b pb-2">
          <p className="text-sm text-muted-foreground">Area name</p>
          <p className="font-medium text-end">{areaName}</p>
        </div>
      </div>
    </div>
  );
}
