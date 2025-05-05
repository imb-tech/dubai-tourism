interface PropertyDetailsProps {
    developer: string
    propertyType: string
    handover: string
    paymentPlan: string
    areaName: string
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
          <div className="border-b pb-2">
            <p className="text-sm text-muted-foreground">Developer</p>
            <p className="font-medium">{developer}</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-sm text-muted-foreground">Property Type</p>
            <p className="font-medium">{propertyType}</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-sm text-muted-foreground">Handover</p>
            <p className="font-medium">{handover}</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-sm text-muted-foreground">Payment Plan</p>
            <p className="font-medium">{paymentPlan}</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-sm text-muted-foreground">Area name</p>
            <p className="font-medium">{areaName}</p>
          </div>
        </div>
      </div>
    )
  }
  