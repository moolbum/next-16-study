"use client";

import React from "react";
import {
  Command as CommandComponent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { CommandProps } from "./Command.type";

export const Command = ({
  children,
  placeholder = "Type a command or search...",
  emptyMessage = "No results found.",
  groups,
  items,
  ...props
}: CommandProps) => {
  // children이 제공되면 완전한 커스터마이징 모드
  if (children) {
    return <CommandComponent {...props}>{children}</CommandComponent>;
  }

  // groups 또는 items를 사용하여 렌더링
  const groupsToRender = groups || (items ? [{ items }] : []);

  return (
    <CommandComponent {...props}>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{emptyMessage}</CommandEmpty>
        {groupsToRender.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <CommandGroup heading={group.heading}>
              {group.items.map((item, itemIndex) => (
                <CommandItem
                  key={item.value || itemIndex}
                  value={item.value || item.label}
                  disabled={item.disabled}
                  onSelect={item.onSelect}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.shortcut && (
                    <CommandShortcut>{item.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
            {groupIndex < groupsToRender.length - 1 && <CommandSeparator />}
          </React.Fragment>
        ))}
      </CommandList>
    </CommandComponent>
  );
};
