import { Button } from 'components/ui/button';
import { BabyIcon as Child, Dumbbell, Droplets, Shield } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: <Child className="h-5 w-5" />, title: 'Children Play Area' },
    { icon: <Droplets className="h-5 w-5" />, title: 'Barbecue Area' },
    { icon: <Dumbbell className="h-5 w-5" />, title: 'Indoor Pool' },
    { icon: <Shield className="h-5 w-5" />, title: 'Security' },
  ];

  return (
    <div className="bg-[#F5F8FC] rounded-md border p-4">
      <h2 className="text-2xl font-bold mb-4">Amenities</h2>

      <p className="text-muted-foreground mb-4">
        Eden House offers premium amenities for residents. There is an adult's
        swimming pool with modern facilities. A separate pool for kids is
        available as well. These come with changing and showering facilities. A
        relaxing spa at this development offers you the best place for
        relaxation. There is also a modern gym that helps you stay fit.
      </p>

      <div className="grid lg:grid-cols-4  grid-cols-2 gap-4 mb-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg "
          >
            <div className="bg-blue-50 p-2 rounded-full text-blue-500 mb-2">
              {amenity.icon}
            </div>
            <p className="text-xs font-medium text-center">{amenity.title}</p>
          </div>
        ))}
      </div>
      <Button className="w-full" >
        Leave a request
      </Button>
    </div>
  );
}
