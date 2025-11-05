'use client';

import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { CalendarProps } from './Calendar.type';

export const Calendar = ({ ...props }: CalendarProps) => {
	return <CalendarComponent className="rounded-md border shadow-sm" {...props} />;
};
