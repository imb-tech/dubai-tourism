import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'components/ui/tooltip';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

type thisProps = {
  children: ReactNode;
  content?: ReactNode;
  indicatorClassName?: ClassNameValue;
};

export function Tooltip({ children, content, indicatorClassName }: thisProps) {
  return (
    <TooltipProvider>
      <ShadcnTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="bg-white"
          indicatorClassName={indicatorClassName}
        >
          {content}
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
}
