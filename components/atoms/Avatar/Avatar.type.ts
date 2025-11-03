import { Avatar as AvatarComponent } from "@/components/ui/avatar";

export type AvatarProps = React.ComponentProps<typeof AvatarComponent> & {
  src?: string;
  fallback?: React.ReactNode;
};
