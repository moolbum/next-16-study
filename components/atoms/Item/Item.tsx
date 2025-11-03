"use client";

import {
  Item as ItemComponent,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item";
import { ItemProps } from "./Item.type";

export const Item = ({
  children,
  media,
  mediaVariant,
  title,
  description,
  actions,
  header,
  footer,
  ...props
}: ItemProps) => {
  // children이 있으면 그대로 렌더링 (완전한 커스터마이징)
  if (children) {
    return <ItemComponent {...props}>{children}</ItemComponent>;
  }

  return (
    <ItemComponent className="w-full" {...props}>
      {/* Header 영역 */}
      {header && <ItemHeader>{header}</ItemHeader>}
      {/* Media 영역 */}
      {media && <ItemMedia variant={mediaVariant}>{media}</ItemMedia>}
      {/* Content 영역 */}
      {(title || description) && (
        <ItemContent>
          {title && <ItemTitle>{title}</ItemTitle>}
          {description && <ItemDescription>{description}</ItemDescription>}
        </ItemContent>
      )}
      {/* Actions 영역 */}
      {actions && <ItemActions>{actions}</ItemActions>}
      {/* Footer 영역 */}
      {footer && <ItemFooter>{footer}</ItemFooter>}
    </ItemComponent>
  );
};
