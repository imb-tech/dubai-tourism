import { Badge } from "components/ui/badge";

export default function AboutProject() {
  return (
    <div >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">About Project</h2>
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Check Project</Badge>
      </div>
      <p className="text-muted-foreground mb-4">
        Pelazzo is a modern residential complex in Dubai Marina. It offers a premium selection of studios and 1-3BR apartments. The unit sizes range from 386 sq. ft to 1528 sq. ft. Residences in this development come with quality kitchen appliances.
      </p>
      <p className="text-muted-foreground mb-4">
        This ensures convenience & luxury for the residents. The properties start at AED 1.8M with a flexible 50/50 payment plan. This makes it an attractive investment opportunity. Residents can enjoy all the lifestyle amenities with proximity to the Dubai Marina Mall.
      </p>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Dubai, Business Bay, 12.4</span>
      </div>
    </div>
  );
}
