'use client';

import { useState } from 'react';
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
	Item,
	Empty,
	Skeleton,
	Tabs,
	Toggle,
} from '@/components/atoms';
import {
	Dialog,
	AlertDialog,
	DatePicker,
	DateRangePicker,
	Combobox,
	RadioGroup,
	CheckboxGroup,
} from '@/components/molecules';
import { AlertCircleIcon, BookmarkIcon, FolderCode } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { toast } from 'sonner';
import { chunk } from 'es-toolkit/array';
import { FieldSet } from '@/components/organisms';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
	const [selectedDateSingle, setSelectedDateSingle] = useState<Date | undefined>(undefined);
	const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(undefined);
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
	const [selectedDateRangePicker, setSelectedDateRangePicker] = useState<DateRange | undefined>(
		undefined,
	);
	const [selectedTab, setSelectedTab] = useState<string | undefined>('tabs_item_a');
	const [isTogglePressed, setIsTogglePressed] = useState(false);
	const [selectedCombobox, setSelectedCombobox] = useState<string | undefined>(undefined);
	const [selectedRadioGroup, setSelectedRadioGroup] = useState<string | undefined>(undefined);
	const [selectedCheckboxGroup, setSelectedCheckboxGroup] = useState<string[] | undefined>(
		undefined,
	);
	const [selectedFieldSetCheckboxGroup, setSelectedFieldSetCheckboxGroup] = useState<
		string[] | undefined
	>(undefined);
	const [selectedFieldSetRadioGroup, setSelectedFieldSetRadioGroup] = useState<string | undefined>(
		undefined,
	);
	const [selectedFieldSetSelect, setSelectedFieldSetSelect] = useState<string | undefined>(
		undefined,
	);
	const [accordionValues, setAccordionValues] = useState<string[]>([]);
	const [selectedFieldSetSwitch, setSelectedFieldSetSwitch] = useState<boolean>(false);

	const TABS_ITEMS = [
		{
			value: 'tabs_item_a',
			label: 'Tabs Item A',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<p>Tabs Item A</p>
				</div>
			),
		},
		{
			value: 'tabs_item_b',
			label: 'Tabs Item B',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<p>Tabs Item B</p>
				</div>
			),
		},
	];

	const ACCORDION_ITEMS = [
		{
			value: 'field-set-combobox',
			trigger: 'FieldSet (Combobox)',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<FieldSet
						items={[
							{
								id: 'field-set-combobox-horizontal',
								type: 'combobox',
								label: 'Combobox Horizontal',
								orientation: 'horizontal',
								props: {
									value: selectedCombobox,
									onValueChange: (value) => {
										console.log('selectedCombobox', value);
										setSelectedCombobox(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
							{
								id: 'field-set-combobox-vertical',
								type: 'combobox',
								label: 'Combobox Vertical',
								orientation: 'vertical',
								props: {
									value: selectedCombobox,
									onValueChange: (value) => {
										console.log('selectedCombobox', value);
										setSelectedCombobox(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
							{
								id: 'field-set-combobox-disabled',
								type: 'combobox',
								label: 'Combobox Disabled',
								orientation: 'horizontal',
								props: {
									disabled: true,
									value: selectedCombobox,
									onValueChange: (value) => {
										console.log('selectedCombobox', value);
										setSelectedCombobox(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'field-set-date-picker',
			trigger: 'FieldSet (Date Picker)',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<FieldSet
						items={[
							{
								id: 'field-set-date-picker-horizontal',
								type: 'datePicker',
								label: 'Date Picker Horizontal',
								orientation: 'horizontal',
								props: {
									disabled: true,
									date: selectedDate,
									onSelect: (value: Date | undefined) => {
										console.log('selectedDatePicker', value);
										setSelectedDate(value);
									},
								},
							},
							{
								id: 'field-set-date-picker-vertical',
								type: 'datePicker',
								label: 'Date Picker Vertical',
								orientation: 'vertical',
								props: {
									date: selectedDate,
									onSelect: (value: Date | undefined) => {
										console.log('selectedDatePicker', value);
										setSelectedDate(value);
									},
								},
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'field-set-date-range-picker',
			trigger: 'FieldSet (Date Range Picker)',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<FieldSet
						items={[
							{
								id: 'field-set-date-range-picker-horizontal',
								type: 'dateRangePicker',
								label: 'Date Range Picker Horizontal',
								orientation: 'horizontal',
								props: {
									disabled: true,
									date: selectedDateRangePicker,
									onSelect: (value) => {
										console.log('selectedDateRangePicker', value);
										setSelectedDateRangePicker(value);
									},
								},
							},
							{
								id: 'field-set-date-range-picker-vertical',
								type: 'dateRangePicker',
								label: 'Date Range Picker Vertical',
								orientation: 'vertical',
								props: {
									date: selectedDateRangePicker,
									onSelect: (value) => {
										console.log('selectedDateRangePicker', value);
										setSelectedDateRangePicker(value);
									},
								},
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'field-set-switch',
			trigger: 'FieldSet (Switch)',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<FieldSet
						items={[
							{
								id: 'field-set-switch-horizontal',
								type: 'switch',
								label: 'Switch Horizontal',
								orientation: 'horizontal',
								props: {
									checked: selectedFieldSetSwitch,
									onCheckedChange: (checked: boolean) => {
										console.log('selectedFieldSetSwitch', checked);
										setSelectedFieldSetSwitch(checked);
									},
								},
							},
							{
								id: 'field-set-switch-vertical',
								type: 'switch',
								label: 'Switch Vertical',
								orientation: 'vertical',
								props: {
									checked: selectedFieldSetSwitch,
									onCheckedChange: (checked: boolean) => {
										console.log('selectedFieldSetSwitch', checked);
										setSelectedFieldSetSwitch(checked);
									},
								},
							},
							{
								id: 'field-set-switch-disabled',
								type: 'switch',
								label: 'Switch Disabled',
								orientation: 'vertical',
								props: {
									disabled: true,
								},
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'field-set-select',
			trigger: 'FieldSet (Select)',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<FieldSet
						items={[
							{
								id: 'field-set-select-horizontal',
								type: 'select',
								label: 'Select Horizontal',
								orientation: 'horizontal',
								props: {
									value: selectedFieldSetSelect,
									onValueChange: (value) => {
										console.log('selectedFieldSetSelect', value);
										setSelectedFieldSetSelect(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
							{
								id: 'field-set-select-vertical',
								type: 'select',
								label: 'Select Vertical',
								orientation: 'vertical',
								props: {
									value: selectedFieldSetSelect,
									onValueChange: (value) => {
										console.log('selectedFieldSetSelect', value);
										setSelectedFieldSetSelect(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
							{
								id: 'field-set-select-disabled',
								type: 'select',
								label: 'Select Disabled',
								orientation: 'vertical',
								props: {
									disabled: true,
									value: selectedFieldSetSelect,
									onValueChange: (value) => {
										console.log('selectedFieldSetSelect', value);
										setSelectedFieldSetSelect(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'field-set-radio-group',
			trigger: 'FieldSet (Radio Group)',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<FieldSet
						items={[
							{
								id: 'field-set-radio-group-horizontal',
								type: 'radioGroup',
								label: 'Radio Group Horizontal',
								orientation: 'horizontal',
								props: {
									value: selectedFieldSetRadioGroup,
									onValueChange: (value) => {
										console.log('selectedFieldSetRadioGroup', value);
										setSelectedFieldSetRadioGroup(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
							{
								id: 'field-set-radio-group-vertical',
								type: 'radioGroup',
								label: 'Radio Group Vertical',
								orientation: 'vertical',
								props: {
									value: selectedFieldSetRadioGroup,
									onValueChange: (value) => {
										console.log('selectedFieldSetRadioGroup', value);
										setSelectedFieldSetRadioGroup(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'field-set-checkbox-group  ',
			trigger: 'FieldSet (Checkbox Group)',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<FieldSet
						items={[
							{
								id: 'field-set-checkbox-group-horizontal',
								type: 'checkboxGroup',
								label: 'Checkbox Group Horizontal',
								orientation: 'horizontal',
								props: {
									value: selectedFieldSetCheckboxGroup,
									onValueChange: (value) => {
										console.log('selectedFieldSetCheckboxGroup', value);
										setSelectedFieldSetCheckboxGroup(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
							{
								id: 'field-set-checkbox-group-vertical',
								type: 'checkboxGroup',
								label: 'Checkbox Group Vertical',
								orientation: 'vertical',
								props: {
									value: selectedFieldSetCheckboxGroup,
									onValueChange: (value) => {
										console.log('selectedFieldSetCheckboxGroup', value);
										setSelectedFieldSetCheckboxGroup(value);
									},
									options: [
										{ value: 'OPTION_1', label: 'Option 1' },
										{ value: 'OPTION_2', label: 'Option 2' },
										{ value: 'OPTION_3', label: 'Option 3', disabled: true },
									],
								},
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'field-set-input',
			trigger: 'FieldSet (Input, Textarea)',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<FieldSet
						items={[
							{
								id: 'field-set-input-vertical',
								type: 'input',
								label: 'Input Vertical',
								orientation: 'vertical',
								props: {
									defaultValue: 'Field Value',
									placeholder: 'Field Placeholder',
									onChange: (e) => {
										console.log('value', e.target.value);
									},
								},
							},
							{
								id: 'field-set-input-horizontal',
								type: 'input',
								label: 'Input Horizontal',
								orientation: 'horizontal',
								props: {
									defaultValue: 'Field Value',
									placeholder: 'Field Placeholder',
									onChange: (e) => {
										console.log('value', e.target.value);
									},
								},
							},
							{
								id: 'field-set-input-disabled',
								type: 'input',
								label: 'Input Disabled',
								orientation: 'horizontal',
								props: {
									disabled: true,
									defaultValue: 'Field Value',
									placeholder: 'Field Placeholder',
									onChange: (e) => {
										console.log('value', e.target.value);
									},
								},
							},
							{
								id: 'field-set-textarea-vertical',
								type: 'textarea',
								label: 'Textarea Vertical',
								orientation: 'vertical',
								props: {
									placeholder: 'Field Textarea Placeholder',
									onChange: (e) => {
										console.log('value', e.target.value);
									},
								},
							},
							{
								id: 'field-set-textarea-horizontal',
								type: 'textarea',
								label: 'Textarea Horizontal',
								orientation: 'horizontal',
							},
							{
								id: 'field-set-textarea-disabled',
								type: 'textarea',
								label: 'Textarea Disabled',
								orientation: 'vertical',
								props: {
									disabled: true,
									placeholder: 'Field Textarea Placeholder',
									onChange: (e) => {
										console.log('value', e.target.value);
									},
								},
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'checkbox-group',
			trigger: 'Checkbox Group',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<CheckboxGroup
						value={selectedCheckboxGroup}
						onValueChange={(value) => {
							console.log('selectedCheckboxGroup', value);
							setSelectedCheckboxGroup(value);
						}}
						options={[
							{ value: 'OPTION_1', label: 'Option 1' },
							{ value: 'OPTION_2', label: 'Option 2' },
							{ value: 'OPTION_3', label: 'Option 3', disabled: true },
						]}
					/>
				</div>
			),
		},
		{
			value: 'radio-group',
			trigger: 'Radio Group',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<RadioGroup
						value={selectedRadioGroup}
						onValueChange={(value) => {
							console.log('selectedRadioGroup', value);
							setSelectedRadioGroup(value);
						}}
						options={[
							{ value: 'OPTION_1', label: 'Option 1' },
							{ value: 'OPTION_2', label: 'Option 2' },
							{ value: 'OPTION_3', label: 'Option 3', disabled: true },
						]}
					/>
				</div>
			),
		},
		{
			value: 'combobox',
			trigger: 'Combobox',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Combobox
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' },
							{
								value: 'option4',
								label: 'Option 4 (disabled)',
								disabled: true,
							},
						]}
						value={selectedCombobox}
						onValueChange={setSelectedCombobox}
					/>
				</div>
			),
		},
		{
			value: 'toggle',
			trigger: 'Toggle',
			content: (
				<div className="flex flex-col gap-2">
					<div className="flex gap-2">
						<Toggle pressed={isTogglePressed} onPressedChange={setIsTogglePressed}>
							<BookmarkIcon />
							Bookmark
						</Toggle>
						<Toggle pressed>
							<BookmarkIcon />
							Bookmark
						</Toggle>
						<Toggle disabled>
							<BookmarkIcon />
							Bookmark
						</Toggle>
					</div>
					<div className="flex gap-2">
						<Toggle
							variant="outline"
							pressed={isTogglePressed}
							onPressedChange={setIsTogglePressed}
						>
							<BookmarkIcon />
							Bookmark
						</Toggle>
						<Toggle variant="outline" pressed>
							<BookmarkIcon />
							Bookmark
						</Toggle>
						<Toggle variant="outline" disabled>
							<BookmarkIcon />
							Bookmark
						</Toggle>
					</div>
				</div>
			),
		},
		{
			value: 'tabs',
			trigger: 'Tabs',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Tabs value={selectedTab} onValueChange={setSelectedTab} tabs={TABS_ITEMS} />
				</div>
			),
		},
		{
			value: 'skeleton',
			trigger: 'Skeleton',
			content: (
				<div className="flex justify-center flex-col gap-6">
					<Skeleton type="card" />
					<Skeleton type="profile" />
				</div>
			),
		},
		{
			value: 'empty',
			trigger: 'Empty',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Empty title="Empty Title" description="Empty Description" media={<FolderCode />}>
						<Button>Empty Action</Button>
					</Empty>
				</div>
			),
		},
		{
			value: 'item',
			trigger: 'Item',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Item
						title="아이템 제목"
						description="아이템 설명"
						variant="default"
						actions={<Button size="sm">확인</Button>}
					/>
					<Item
						title="아이템 제목"
						description="아이템 설명"
						variant="muted"
						actions={<Button size="sm">확인</Button>}
					/>
					<Item
						title="아이템 제목"
						description="아이템 설명"
						variant="outline"
						actions={<Button size="sm">확인</Button>}
					/>
				</div>
			),
		},
		{
			value: 'avatar',
			trigger: 'Avatar',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Avatar src="https://github.com/shadcn.png" />
				</div>
			),
		},
		{
			value: 'date-range-picker',
			trigger: 'Date Range Picker',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<DateRangePicker
						placeholder="YYYY.MM.DD - YYYY.MM.DD"
						date={selectedDateRangePicker}
						onSelect={(range) => setSelectedDateRangePicker(range)}
					/>
				</div>
			),
		},
		{
			value: 'alert-dialog',
			trigger: 'Alert Dialog',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
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
			value: 'card',
			trigger: 'Card',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
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
			value: 'checkbox',
			trigger: 'Checkbox',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Checkbox />
				</div>
			),
		},
		{
			value: 'command',
			trigger: 'Command',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Command
						placeholder="Type a command or search..."
						emptyMessage="No results found."
						groups={[
							{
								heading: 'Suggestions',
								items: [
									{ label: 'Calendar' },
									{ label: 'Search Emoji' },
									{ label: 'Calculator', disabled: true },
								],
							},
							{
								heading: 'Settings',
								items: [
									{ label: 'Profile', shortcut: '⌘P' },
									{ label: 'Billing', shortcut: '⌘B' },
									{ label: 'Settings', shortcut: '⌘S' },
								],
							},
						]}
					/>
				</div>
			),
		},
		{
			value: 'date-picker',
			trigger: 'Date Picker',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
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
			value: 'dialog',
			trigger: 'Dialog',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
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
			value: 'dropdown-menu',
			trigger: 'Dropdown Menu',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<DropdownMenu
						items={[
							{ label: 'Calendar' },
							{ label: 'Search Emoji' },
							{ label: 'Calculator', disabled: true },
						]}
					/>
				</div>
			),
		},
		{
			value: 'input',
			trigger: 'Input',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Input />
					<Input disabled defaultValue="Disabled Input" />
				</div>
			),
		},
		{
			value: 'label',
			trigger: 'Label',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Label htmlFor="name">Label</Label>
				</div>
			),
		},
		{
			value: 'sonner',
			trigger: 'Sonner',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Button variant="outline" onClick={() => toast('Event has been created')}>
						Default
					</Button>
					<Button variant="outline" onClick={() => toast.success('Event has been created')}>
						Success
					</Button>
					<Button
						variant="outline"
						onClick={() => toast.info('Be at the area 10 minutes before the event time')}
					>
						Info
					</Button>
					<Button
						variant="outline"
						onClick={() => toast.warning('Event start time cannot be earlier than 8am')}
					>
						Warning
					</Button>
					<Button variant="outline" onClick={() => toast.error('Event has not been created')}>
						Error
					</Button>
					<Button
						variant="outline"
						onClick={() => {
							toast.promise<{ name: string }>(
								() => new Promise((resolve) => setTimeout(() => resolve({ name: 'Event' }), 2000)),
								{
									loading: 'Loading...',
									success: (data) => `${data.name} has been created`,
									error: 'Error',
								},
							);
						}}
					>
						Promise
					</Button>
				</div>
			),
		},
		{
			value: 'switch',
			trigger: 'Switch',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Switch />
				</div>
			),
		},
		{
			value: 'textarea',
			trigger: 'Textarea',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Textarea />
				</div>
			),
		},
		{
			value: 'alert',
			trigger: 'Alert',
			content: (
				<Alert
					icon={<Tooltip trigger={<AlertCircleIcon />}>test tooltip</Tooltip>}
					title="Alert Title"
					description="Alert Description"
				/>
			),
		},
		{
			value: 'button',
			trigger: 'Button',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
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
			value: 'calendar-date-range',
			trigger: 'Calendar Date Range',
			content: (
				<div className="flex justify-center">
					<Calendar
						mode="range"
						selected={selectedDateRange}
						onSelect={(range) => setSelectedDateRange(range)}
					/>
				</div>
			),
		},
		{
			value: 'calendar-date-single',
			trigger: 'Calendar Date Single',
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
			value: 'popover',
			trigger: 'Popover',
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
			value: 'select',
			trigger: 'Select',
			content: (
				<div className="flex justify-center items-center flex-col gap-2 p-2">
					<Select
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' },
						]}
						placeholder="Select an option"
						onValueChange={(value) => setSelectedOption(value)}
						value={selectedOption}
					/>
				</div>
			),
		},
		{
			value: 'spinner',
			trigger: 'Spinner',
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
			value: 'tooltip',
			trigger: 'Tooltip',
			content: (
				<div className="flex justify-center items-center gap-2">
					<Tooltip trigger={<AlertCircleIcon />}>test tooltip</Tooltip>
				</div>
			),
		},
	];

	const accordionChunks = chunk(
		[...ACCORDION_ITEMS].sort((a, b) => a.trigger.localeCompare(b.trigger)),
		10,
	);

	const allAccordionValues = ACCORDION_ITEMS.map((item) => item.value);

	const handleOpenAll = () => {
		setAccordionValues(allAccordionValues);
	};

	const handleCloseAll = () => {
		setAccordionValues([]);
	};

	const handleAccordionValueChange = (value: string[]) => {
		setAccordionValues(value);
	};

	return (
		<div className="p-4 flex flex-col gap-2">
			<div className="flex flex-col gap-2 w-full mx-auto">
				{/* Header */}
				<section className="flex items-center gap-3">
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold">컴포넌트 목록</h1>
						<p className="text-gray-500">아코디언 개수 ({ACCORDION_ITEMS.length})</p>
					</div>

					<section className="flex gap-2">
						<Button onClick={handleOpenAll} size="lg">
							모두 열기
						</Button>
						<Button variant="outline" size="lg" onClick={handleCloseAll}>
							모두 닫기
						</Button>
					</section>
				</section>

				{/* Accordion */}
				<section className="flex gap-2">
					{accordionChunks.map((chunk, index) => (
						<Accordion
							key={index}
							type="multiple"
							value={accordionValues}
							onValueChange={handleAccordionValueChange}
							items={chunk}
						/>
					))}
				</section>
			</div>
		</div>
	);
}
