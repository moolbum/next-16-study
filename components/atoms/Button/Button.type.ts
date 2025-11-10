import { VariantProps } from 'class-variance-authority';
import { Button } from '@/components/ui/button';

export type ButtonProps = VariantProps<typeof Button> & React.ComponentProps<'button'>;
