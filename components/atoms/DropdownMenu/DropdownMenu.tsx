"use client";

import React from "react";
import {
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/atoms/Button/Button";
import { DropdownMenuProps } from "./DropdownMenu.type";

export const DropdownMenu = ({
  children,
  triggerLabel,
  trigger,
  items,
  groups,
  contentWidth = "w-56",
  align = "start",
  modal = true,
  ...props
}: DropdownMenuProps) => {
  // children이 제공되면 완전한 커스터마이징 모드
  if (children) {
    return (
      <DropdownMenuComponent modal={modal} {...props}>
        {children}
      </DropdownMenuComponent>
    );
  }

  // groups 또는 items를 사용하여 렌더링
  const groupsToRender = groups || (items ? [{ items, separator: false }] : []);

  // 트리거 렌더링
  const triggerElement = trigger || (
    <Button variant="outline">{triggerLabel || "Open"}</Button>
  );

  // props에서 DropdownMenuContent 관련 props 추출
  // 타입 안전하게 contentProps를 전달하기 위해 Pick을 사용
  type ContentProps = Omit<
    React.ComponentProps<typeof DropdownMenuContent>,
    "className" | "children" | "align"
  >;
  const contentProps = props as unknown as ContentProps;

  return (
    <DropdownMenuComponent modal={modal}>
      <DropdownMenuTrigger asChild>{triggerElement}</DropdownMenuTrigger>
      <DropdownMenuContent
        {...contentProps}
        className={typeof contentWidth === "string" ? contentWidth : undefined}
        style={
          typeof contentWidth === "number"
            ? { width: `${contentWidth}px` }
            : undefined
        }
        align={align}
      >
        {groupsToRender.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {group.label && (
              <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
            )}
            <DropdownMenuGroup>
              {group.items.map((item, itemIndex) => {
                const {
                  label,
                  value,
                  shortcut,
                  icon,
                  separator,
                  onClick,
                  ...itemProps
                } = item;
                return (
                  <React.Fragment key={value || itemIndex}>
                    <DropdownMenuItem
                      {...itemProps}
                      onSelect={onClick || itemProps.onSelect}
                    >
                      {icon}
                      <span>{label}</span>
                      {shortcut && (
                        <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                      )}
                    </DropdownMenuItem>
                    {separator && <DropdownMenuSeparator />}
                  </React.Fragment>
                );
              })}
            </DropdownMenuGroup>
            {group.separator && groupIndex < groupsToRender.length - 1 && (
              <DropdownMenuSeparator />
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenuComponent>
  );
};
