import { TooltipProps as TooltipPropsPrimitive } from '@radix-ui/react-tooltip';

export type TooltipProps = {
	trigger?: React.ReactNode;
} & TooltipPropsPrimitive;
