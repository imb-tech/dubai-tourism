import Image from 'next/image';
import Link from 'next/link';
import { cn } from 'lib/utils';
import { buttonVariants } from 'components/ui/button';
import Money from './money';
import { Badge } from 'components/ui/badge';
import {
  BagIconCar,
  BathIcon,
  EngineIcon,
  KarobkaIcon,
  LocationIcon,
  MapIcon,
  RateIcon,
  RoomIcon,
  User2Icon,
} from 'components/icons';

export default function CustomCard({
  image,
  name,
  location,
  rating,
  areaSqFt,
  gear,
  baths,
  price,
  discount,
  reviewsCount,
  km_per_day,
  slug,
  tag,
  year,
  beds,
  best_seller,
  suffix,
  url = '/',
}: Product) {
  return (
    <div className="relative rounded-lg border flex flex-col p-2 gap-2 min-w-[320px] lg:min-w-40">
      {best_seller && (
        <Badge className="absolute bg-[#FF5533] top-0 left-0 p-2 text-white text-xs font-medium rounded-none rounded-tl-lg rounded-br-lg">
          Best seller
        </Badge>
      )}
      <div className="w-full h-48">
        <Image
          src={image || '/image.jpg'}
          width={400}
          height={300}
          alt={name}
          className="rounded-md object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{name}</h3>

        {location ? (
          <Badge className="bg-[#FFDDD6] text-[#FF5533] mb-2 py-1 px-2 rounded-2xl">
            <LocationIcon size={30} />
            {location}
          </Badge>
        ) : null}
        {tag ? (
          <Badge className="bg-[#FFDDD6] text-[#FF5533] mb-2 py-1 px-2 rounded-2xl">
            # {tag}
          </Badge>
        ) : null}

        {km_per_day || year || gear ? (
          <ul className="flex items-center justify-between gap-1 py-1 w-full">
            {km_per_day && (
              <li className="flex items-center gap-1 text-[#74AEF8]">
                <MapIcon size={18} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {km_per_day} km {suffix ? '/' : ''} {suffix}
                </span>
              </li>
            )}
            {year ? (
              <li className="flex items-center gap-1 text-[#74AEF8]">
                <EngineIcon size={18} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {year}
                </span>
              </li>
            ) : null}
            {gear ? (
              <li className="flex items-center gap-1 text-[#74AEF8]">
                <KarobkaIcon size={18} />
                <span className="text-black font-medium md:text-sm text-sm capitalize">
                  {gear}
                </span>
              </li>
            ) : null}
          </ul>
        ) : null}

        {reviewsCount || rating ? (
          <ul className="flex items-center py-1 w-full gap-3">
            {reviewsCount ? (
              <li className="flex items-center gap-1 text-[#74AEF8]">
                <User2Icon size={20} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {reviewsCount} sharhlar
                </span>
              </li>
            ) : null}
            {rating ? (
              <li className="flex items-center gap-1 text-[#74AEF8]">
                <RateIcon size={18} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {rating}
                </span>
              </li>
            ) : null}
          </ul>
        ) : null}

        {areaSqFt || beds || baths ? (
          <ul className="flex items-center py-1 w-full gap-5">
            {areaSqFt ? (
              <li className="flex items-center gap-1 text-primary">
                <BagIconCar size={20} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {areaSqFt} sqFt
                </span>
              </li>
            ) : null}
            {beds ? (
              <li className="flex items-center gap-1 text-primary">
                <RoomIcon size={20} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {beds}
                </span>
              </li>
            ) : null}
            {baths ? (
              <li className="flex items-center gap-1 text-primary">
                <BathIcon size={20} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {baths}
                </span>
              </li>
            ) : null}
          </ul>
        ) : null}

        <Money
          price={price}
          discount={discount}
          suffix={suffix}
          className="my-3"
        />

        <Link
          href={`${url}/${slug}`}
          className={cn(buttonVariants({ size: 'lg' }), 'w-full')}
        >
          Buyurtma qilish
        </Link>
      </div>
    </div>
  );
}
