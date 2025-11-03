import { Empty } from "@/components/ui/empty";

export type EmptyProps = React.ComponentProps<typeof Empty> & {
  title?: string;
  description?: string;
  media?: React.ReactNode;
};
