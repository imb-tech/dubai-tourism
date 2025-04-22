import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';

export default function WtpInfo() {
  return (
    <div>
      <Accordion
        type="multiple"
        defaultValue={['item-1', 'item-2', 'item-3']}
        className="w-full"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="flex items-center py-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white rounded-full p-1.5">
                <ChevronDown className="h-4 w-4" />
              </div>
              <h3 className="text-base font-medium">Voucher Confirmation</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <h4 className="font-medium mb-1">Mobile Voucher</h4>
              <p className="text-sm text-gray-600">
                Use your phone or Print your Voucher
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="flex items-center py-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white rounded-full p-1.5">
                <ChevronDown className="h-4 w-4" />
              </div>
              <h3 className="text-base font-medium">Booking Confirmation</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <h4 className="font-medium mb-1">Instant Confirmation</h4>
              <p className="text-sm text-gray-600 mb-3">
                Instant Tour Confirmation will be Provided
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="flex items-center py-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white rounded-full p-1.5">
                <ChevronDown className="h-4 w-4" />
              </div>
              <h3 className="text-base font-medium">Timings & Duration</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="font-medium text-sm">Transfer Type</div>
                <div className="font-medium text-sm">Pickup Timings</div>
                <div className="font-medium text-sm">Duration Approx</div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="text-sm text-gray-600">Without Transfers</div>
                <div className="text-sm text-gray-600">
                  Pick up will be done around 4:00 pm
                </div>
                <div className="text-sm text-gray-600">02:00 hours</div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-sm text-gray-600">Private Transfers</div>
                <div className="text-sm text-gray-600">
                  <p>Boarding starts at 05:00 PM</p>
                  <p>Departure at 05:30 PM Return at 06:30 PM</p>
                </div>
                <div className="text-sm text-gray-600">01:00 hours</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="flex items-center py-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white rounded-full p-1.5">
                <ChevronDown className="h-4 w-4" />
              </div>
              <h3 className="text-base font-medium">Booking Policy</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <h4 className="font-medium mb-2">Cancellation Policy</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>
                  For all cancellations made 24 hours prior to the tour
                  departure time NO charges will be applicable
                </li>
                <li>
                  If cancellation made within 24 hours of your tour departure
                  time 100% charges will be applicable
                </li>
                <li>
                  If eligible for a refund your amount will be returned back to
                  your booking source
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
