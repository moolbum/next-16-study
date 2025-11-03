import {
  Empty as EmptyComponent,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { EmptyProps } from "./Empty.type";

export const Empty = ({
  title,
  description,
  media,
  children,
  ...props
}: EmptyProps) => {
  return (
    <EmptyComponent {...props}>
      <EmptyHeader>
        {/* Media 영역 */}
        {media && <EmptyMedia>{media}</EmptyMedia>}
        {/* Title 영역 */}
        {title && <EmptyTitle>{title}</EmptyTitle>}
        {/* Description 영역 */}
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
      {/* Content 영역 */}
      {children && <EmptyContent>{children}</EmptyContent>}
    </EmptyComponent>
  );
};
