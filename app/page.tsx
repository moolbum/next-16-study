"use client";
import { useState } from "react";
import {
  Checkbox,
  Button,
  Card,
  Input,
  Label,
  Select,
  Switch,
  Textarea,
  Tooltip,
  Alert,
  Accordion,
  Popover,
  Spinner,
  Calendar,
  Command,
  DropdownMenu,
  Avatar,
} from "@/components/atoms";
import {
  Dialog,
  AlertDialog,
  DatePicker,
  DateRangePicker,
} from "@/components/molecule";
import { AlertCircleIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";
import { chunk } from "es-toolkit/array";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [selectedDateSingle, setSelectedDateSingle] = useState<
    Date | undefined
  >(undefined);
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(undefined);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedDateRangePicker, setSelectedDateRangePicker] = useState<
    DateRange | undefined
  >(undefined);

  const ACCORDION_ITEMS = [
    {
      value: "avatar",
      trigger: "Avatar",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Avatar src="https://github.com/shadcn.png" />
        </div>
      ),
    },
    {
      value: "date-range-picker",
      trigger: "Date Range Picker",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <DateRangePicker
            placeholder="YYYY.MM.DD - YYYY.MM.DD"
            date={selectedDateRangePicker}
            onSelect={(range: DateRange | undefined) =>
              setSelectedDateRangePicker(range)
            }
          />
        </div>
      ),
    },
    {
      value: "alert-dialog",
      trigger: "Alert Dialog",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <AlertDialog
            open={isAlertDialogOpen}
            onOpenChange={setIsAlertDialogOpen}
            title="Alert Dialog Title"
            description="Alert Dialog Description"
            trigger={<Button className="flex-1">Alert Dialog 열기</Button>}
            action={<Button variant="outline">Action</Button>}
            cancel={<Button variant="outline">Cancel</Button>}
          />
        </div>
      ),
    },
    {
      value: "card",
      trigger: "Card",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Card
            className="w-96"
            title="Card Title"
            description="Card Description"
            action={
              <Button variant="outline" size="sm">
                Action
              </Button>
            }
            footer={<p>Card Footer</p>}
          >
            <p>Card Content</p>
          </Card>
        </div>
      ),
    },
    {
      value: "checkbox",
      trigger: "Checkbox",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Checkbox />
        </div>
      ),
    },
    {
      value: "command",
      trigger: "Command",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Command
            placeholder="Type a command or search..."
            emptyMessage="No results found."
            groups={[
              {
                heading: "Suggestions",
                items: [
                  { label: "Calendar" },
                  { label: "Search Emoji" },
                  { label: "Calculator", disabled: true },
                ],
              },
              {
                heading: "Settings",
                items: [
                  { label: "Profile", shortcut: "⌘P" },
                  { label: "Billing", shortcut: "⌘B" },
                  { label: "Settings", shortcut: "⌘S" },
                ],
              },
            ]}
          />
        </div>
      ),
    },
    {
      value: "date-picker",
      trigger: "Date Picker",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <DatePicker
            placeholder="YYYY.MM.DD"
            date={selectedDate}
            onSelect={(date: Date | undefined) => {
              setSelectedDate(date);
            }}
          />
          <DatePicker
            disabled
            placeholder="YYYY.MM.DD (disabled)"
            date={selectedDate}
            onSelect={(date: Date | undefined) => {
              setSelectedDate(date);
            }}
          />
        </div>
      ),
    },
    {
      value: "dialog",
      trigger: "Dialog",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Dialog
            title="프로필 편집"
            open={isOpen}
            onOpenChange={setIsOpen}
            description="프로필을 수정하세요. 완료되면 저장을 클릭하세요."
            trigger={<Button className="flex-1">Dialog 열기</Button>}
            footer={
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  저장
                </Button>
              </div>
            }
          >
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="name">이름</label>
                <Input id="name" defaultValue="홍길동" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="username">사용자명</label>
                <Input id="username" defaultValue="@honggildong" />
              </div>
            </div>
          </Dialog>
        </div>
      ),
    },
    {
      value: "dropdown-menu",
      trigger: "Dropdown Menu",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <DropdownMenu
            items={[
              { label: "Calendar" },
              { label: "Search Emoji" },
              { label: "Calculator", disabled: true },
            ]}
          />
        </div>
      ),
    },
    {
      value: "input",
      trigger: "Input",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Input />
        </div>
      ),
    },
    {
      value: "label",
      trigger: "Label",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Label htmlFor="name">Label</Label>
        </div>
      ),
    },
    {
      value: "sonner",
      trigger: "Sonner",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => toast("Event has been created")}
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Event has been created")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.info("Be at the area 10 minutes before the event time")
            }
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning("Event start time cannot be earlier than 8am")
            }
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Event has not been created")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast.promise<{ name: string }>(
                () =>
                  new Promise((resolve) =>
                    setTimeout(() => resolve({ name: "Event" }), 2000)
                  ),
                {
                  loading: "Loading...",
                  success: (data) => `${data.name} has been created`,
                  error: "Error",
                }
              );
            }}
          >
            Promise
          </Button>
        </div>
      ),
    },
    {
      value: "switch",
      trigger: "Switch",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Switch />
        </div>
      ),
    },
    {
      value: "textarea",
      trigger: "Textarea",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Textarea />
        </div>
      ),
    },
    {
      value: "alert",
      trigger: "Alert",
      content: (
        <Alert
          icon={<Tooltip trigger={<AlertCircleIcon />}>test tooltip</Tooltip>}
          title="Alert Title"
          description="Alert Description"
        />
      ),
    },
    {
      value: "button",
      trigger: "Button",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="flex gap-2">
            <Button>Button</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      ),
    },
    {
      value: "calendar-date-range",
      trigger: "Calendar Date Range",
      content: (
        <div className="flex justify-center">
          <Calendar
            mode="range"
            selected={selectedDateRange}
            onSelect={(range: DateRange | undefined) =>
              setSelectedDateRange(range)
            }
          />
        </div>
      ),
    },
    {
      value: "calendar-date-single",
      trigger: "Calendar Date Single",
      content: (
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDateSingle}
            onSelect={(date: Date | undefined) => setSelectedDateSingle(date)}
          />
        </div>
      ),
    },
    {
      value: "popover",
      trigger: "Popover",
      content: (
        <Popover
          open={isPopoverOpen}
          onOpenChange={setIsPopoverOpen}
          trigger={<Button className="flex-1">Popover 열기</Button>}
          content={
            <div className="w-40 rounded-md bg-background p-4">
              <p className="text-sm text-foreground">Popover Content</p>
            </div>
          }
        />
      ),
    },
    {
      value: "select",
      trigger: "Select",
      content: (
        <div className="flex justify-center items-center flex-col gap-2">
          <Select
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
            placeholder="Select an option"
            onValueChange={(value) => setSelectedOption(value)}
            value={selectedOption}
          />
        </div>
      ),
    },
    {
      value: "spinner",
      trigger: "Spinner",
      content: (
        <div className="flex justify-center items-center gap-2">
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
          <Spinner className="size-10" />
        </div>
      ),
    },
    {
      value: "tooltip",
      trigger: "Tooltip",
      content: (
        <div className="flex justify-center items-center gap-2">
          <Tooltip trigger={<AlertCircleIcon />}>test tooltip</Tooltip>
        </div>
      ),
    },
  ];

  const accordionChunks = chunk(
    [...ACCORDION_ITEMS].sort((a, b) => a.trigger.localeCompare(b.trigger)),
    10
  );

  return (
    <div className="p-4 flex flex-col gap-2">
      <main className="flex flex-col gap-2 w-4xl mx-auto">
        <div className="flex gap-2">
          {accordionChunks.map((chunk, index) => (
            <Accordion
              key={index}
              type="multiple"
              onValueChange={(value) => console.log("click", value)}
              items={chunk}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
