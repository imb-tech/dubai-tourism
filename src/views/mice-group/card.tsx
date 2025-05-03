import { Card, CardContent } from 'components/ui/card';
import Image from 'next/image';
import { Diamond, Gem } from 'lucide-react';
import { Button, buttonVariants } from 'components/ui/button';
import { cn } from 'lib/utils';
import Link from 'next/link';

function MiceGroupCard({
  data,
}: {
  data: {
    id: number;
    name: string;
    image: string;
    desc: string;
    comment: string;
    comment2: string;
  };
}) {
  const { comment, comment2, desc, id, image, name } = data;
  return (
    <Card className="overflow-hidden bg-white shadow-none py-0">
      <CardContent className="flex flex-col lg:flex-row gap-4 lg:p-4 p-3 ">
        <div
          className={cn(
            'lg:w-1/2 flex flex-col justify-between order-2 ',
            id % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
          )}
        >
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="bg-[#edcc2555] rounded-full p-1">
                <Image
                  src="/mice.png"
                  alt="Private jet flying over Dubai coastline"
                  className="object-cover rounded-md lg:w-14 lg:h-14 h-9 w-9"
                  priority
                  width={60}
                  height={60}
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">{name}</h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              {desc}
            </p>

            <div className="space-y-3 sm:space-y-4 hidden sm:block">
              <div className="flex items-start gap-2 sm:gap-3">
                <Gem className="h-5 w-5 sm:h-7 sm:w-7 text-blue-500 mt-0.5" />
                <p className="text-gray-800 text-sm sm:text-base">{comment}</p>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <Gem className="h-5 w-5 sm:h-7 sm:w-7 text-blue-500 mt-0.5" />
                <p className="text-gray-800 text-sm sm:text-base">{comment2}</p>
              </div>
            </div>
          </div>

          <Link
            href={`/mice-group/${id}`}
            className={cn(buttonVariants({ size: 'lg' }), 'w-full')}
          >
            See more
          </Link>
        </div>

        <div
          className={cn(
            'lg:w-1/2 h-48 sm:h-56 md:h-64 w-full lg:h-auto relative order-1',
            id % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
          )}
        >
          <Image
            src={image}
            alt="Private jet flying over Dubai coastline"
            className="object-cover rounded-md h-full w-full"
            height={320}
            width={584}
            priority
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default MiceGroupCard;
