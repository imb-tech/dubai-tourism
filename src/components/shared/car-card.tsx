import Image from 'next/image';
import Link from 'next/link';
import { cn } from 'lib/utils';
import { buttonVariants } from 'components/ui/button';
import { Badge } from 'components/ui/badge';
import Money from './money';
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

type CustomCardProps = Product & {
  searchParams?: Record<string, string>;
};

export default function CustomCard({
  image,
  poster,
  name,
  address,
  rating,
  area,
  gear,
  bathrooms,
  price,
  discount,
  comment_count,
  km_per_day,
  slug,
  tag,
  year,
  bedrooms,
  best_seller,
  other,
  searchParams,
}: CustomCardProps) {
  const query = searchParams
    ? '?' +
      Object.entries(searchParams)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
        .join('&')
    : '';

  const personSuffix = (
    <span className="flex items-center">
      1 <User2Icon size={24} />
    </span>
  );

  const suffixMap: Record<string, React.ReactNode> = {
    atraction: personSuffix,
    'tour-packages': personSuffix,
    'transfer-service': 'one way',
    rent: 'day',
    'vip-concierge': 'hr',
  };

  const buttonText: Record<string, string> = {
    'transfer-service': 'Select',
    rent: 'Make an order',
  };

  const suffix: React.ReactNode = other ? suffixMap[other] || '' : '';

  const url =
    other === 'transfer-service'
      ? `/${other}/${slug}${query}`
      : other === 'rent'
      ? `/rent-cars/${slug}`
      : `/${other}/${slug}`;

  return (
    <div className="relative bg-white rounded-lg border flex flex-col justify-between p-2 gap-2 min-w-[320px] lg:min-w-40">
      {best_seller && (
        <Badge className="absolute bg-[#FF5533] top-0 left-0 p-2 text-white text-xs font-medium rounded-none rounded-tl-lg rounded-br-lg">
          Best seller
        </Badge>
      )}
      <div className="w-full h-48">
        <Image
          src={(poster ?? image) || '/image.jpg'}
          width={400}
          height={300}
          alt={name ?? ''}
          className="rounded-md object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{name}</h3>

        {address ? (
          <Badge className="bg-[#FFDDD6] text-[#FF5533] mb-2 py-1 px-2 rounded-2xl">
            <LocationIcon size={30} />
            {address}
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

        {comment_count || rating ? (
          <ul className="flex items-center py-1 w-full gap-3">
            {comment_count ? (
              <li className="flex items-center gap-1 text-[#74AEF8]">
                <User2Icon size={20} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {comment_count} sharhlar
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

        {area || bedrooms || bathrooms ? (
          <ul className="flex items-center py-1 w-full gap-5">
            {area ? (
              <li className="flex items-center gap-1 text-primary">
                <BagIconCar size={20} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {area} sqFt
                </span>
              </li>
            ) : null}
            {bedrooms ? (
              <li className="flex items-center gap-1 text-primary">
                <RoomIcon size={20} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {bedrooms}
                </span>
              </li>
            ) : null}
            {bathrooms ? (
              <li className="flex items-center gap-1 text-primary">
                <BathIcon size={20} />
                <span className="text-black font-medium md:text-sm text-sm">
                  {bathrooms}
                </span>
              </li>
            ) : null}
          </ul>
        ) : null}

        <Money
          price={price}
          discount={discount}
          suffix={suffix}
          className="mb-3"
        />

        <Link
          href={url}
          className={cn(
            buttonVariants({ size: 'default' }),
            'w-full',
            'text-base'
          )}
        >
          {other ? buttonText[other] || 'More' : 'More'}
        </Link>
      </div>
    </div>
  );
}
