'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import CarCard from 'components/shared/car-card';
import { formatMoney } from 'lib/utils';

const iconColors: Record<RentCar['type'], string> = {
  Apartment: '#EF4444',
  Villa: '#22C55E',
  Townhouse: '#A855F7',
};

const MapApartment = ({
  apartments,
}: {
  apartments: RentCar[] | undefined;
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerClusterGroupRef = useRef<L.MarkerClusterGroup | null>(null);
  const [activeFilter, setActiveFilter] = useState<RentCar['type'] | 'All'>(
    'All'
  );
  
  const [selectedApartment, setSelectedApartment] = useState<RentCar | null>(
    null
  );

  const renderMarkers = useCallback(() => {
    if (!mapInstanceRef.current) return;

    if (markerClusterGroupRef.current) {
      mapInstanceRef.current.removeLayer(markerClusterGroupRef.current);
      markerClusterGroupRef.current = null;
    }

    const markers = L.markerClusterGroup({
      chunkedLoading: true,
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount();
        let size = 'w-8 h-8';
        if (count < 10) {
          size = 'w-8 h-8';
        } else if (count < 100) {
          size = 'w-10 h-10';
        } else {
          size = 'w-12 h-12';
        }

        const childTypes = cluster
          .getAllChildMarkers()
          .map((m) => (m as any).options.propertyType);
        const typeCounts = childTypes.reduce((acc, type) => {
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        let clusterColor = '#3B82F6';
        if (typeCounts.Apartment && typeCounts.Apartment === count)
          clusterColor = iconColors.Apartment;
        else if (typeCounts.Villa && typeCounts.Villa === count)
          clusterColor = iconColors.Villa;
        else if (typeCounts.Townhouse && typeCounts.Townhouse === count)
          clusterColor = iconColors.Townhouse;

        return L.divIcon({
          html: `<div class="flex items-center justify-center rounded-full text-white font-bold ${size}" style="background-color: ${clusterColor};">
          ${count}
        </div>`,
          className: 'cluster-icon',
          iconSize: L.point(40, 40),
        });
      },
    });

    const filteredProperties =
      activeFilter === 'All'
        ? apartments
        : apartments?.filter((p) => p.type === activeFilter);

    filteredProperties?.forEach((property) => {
      const icon = L.divIcon({
        html: `
        <div class="flex items-center rounded-full w-3 h-3 text-white font-bold text-xs whitespace-nowrap" style="background-color: ${
          iconColors[property.type]
        };">
        </div>
      `,
        className: 'custom-marker-icon',
        iconAnchor: [0, 24],
        popupAnchor: [0, -20],
      });

      const marker = L.marker([property.lat, property.lon], {
        icon,
        propertyType: property.type,
      } as L.MarkerOptions & {
        propertyType: RentCar['type'];
      });

      const tooltipContent = `
      <div class="flex items-center gap-2">
      <div class="flex items-center rounded-full w-3 h-3 text-white font-bold text-xs whitespace-nowrap" style="background-color: ${
        iconColors[property.type]
      };">
        </div>
      <div style="display: flex; flex-direction: column; align-items: flex-start;">
        <div class="text-sm font-semibold">${formatMoney(
          property.price
        )} mln AED</div>
        <div class="text-xs text-gray-600">${property.name}</div>
      </div>
    `;

      marker.bindTooltip(tooltipContent, {
        permanent: true,
        direction: 'top',
        offset: [5, -25],
      });

      marker.on('click', () => {
        setSelectedApartment(property);
      });

      markers.addLayer(marker);
    });

    mapInstanceRef.current.addLayer(markers);
    markerClusterGroupRef.current = markers;
  }, [activeFilter]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
    }).setView([25.2048, 55.2708], 10);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.control
      .zoom({
        position: 'bottomright',
      })
      .addTo(map);

    map.on('click', () => {
      setSelectedApartment(null);
    });

    renderMarkers();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [renderMarkers]);

  return (
    <div className="relative h-full  overflow-hidden w-full rounded-lg">
      <div ref={mapRef} className="h-full w-full" />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] flex space-x-2 bg-white p-2 rounded-lg shadow-md">
        {['All', 'Apartment', 'Villa', 'Townhouse'].map((type) => (
          <button
            key={type}
            className={`px-4 cursor-pointer py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === type
                ? 'bg-primary/10 text-primary'
                : ' text-gray-700 hover:bg-primary/10 hover:text-primary'
            }`}
            onClick={() => {
              setActiveFilter(type as RentCar['type'] | 'All');
              setSelectedApartment(null);
            }}
          >
            {type === 'All' ? (
              'All'
            ) : (
              <span className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{
                    backgroundColor: iconColors[type as RentCar['type']],
                  }}
                ></span>
                {type}
              </span>
            )}
          </button>
        ))}
      </div>

      {selectedApartment && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] animate-fade-in">
          <CarCard {...selectedApartment} />
        </div>
      )}
    </div>
  );
};

export default MapApartment;
