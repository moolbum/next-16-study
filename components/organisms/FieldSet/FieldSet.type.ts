import { SwitchProps } from '@radix-ui/react-switch';
import { InputProps } from '@/components/atoms/Input/Input.type';
import { SelectProps } from '@/components/atoms/Select/Select.type';
import { TextareaProps } from '@/components/atoms/Textarea/Textarea.type';
import { CheckboxGroupProps } from '@/components/molecules/CheckboxGroup/CheckboxGroup.type';
import { ComboboxOption, ComboboxProps } from '@/components/molecules/Combobox/Combobox.type';
import { DatePickerProps } from '@/components/molecules/DatePicker/DatePicker.type';
import { DateRangePickerProps } from '@/components/molecules/DateRangePicker/DateRangePicker.type';
import { RadioGroupProps } from '@/components/molecules/RadioGroup/RadioGroup.type';
import { Field, FieldDescription } from '@/components/ui/field';
import { Label } from '@/components/ui/label';

export type FieldSetItem =
	| {
			type: 'input';
			props?: InputProps;
	  }
	| {
			type: 'textarea';
			props?: TextareaProps;
	  }
	| {
			type: 'select';
			props?: SelectProps;
	  }
	| {
			type: 'checkboxGroup';
			props?: CheckboxGroupProps;
	  }
	| {
			type: 'radioGroup';
			props?: RadioGroupProps;
	  }
	| {
			type: 'combobox';
			props: Omit<ComboboxProps, 'options'> & {
				options: ComboboxOption[];
			};
	  }
	| {
			type: 'switch';
			props?: SwitchProps;
	  }
	| {
			type: 'datePicker';
			props?: DatePickerProps;
	  }
	| {
			type: 'dateRangePicker';
			props?: DateRangePickerProps;
	  };

export type FieldSetItems = {
	id: string;
	label: string | React.ReactNode;
	labelProps?: Omit<React.ComponentProps<typeof Label>, 'children'>;
	description?: string | React.ReactNode;
	descriptionProps?: Omit<React.ComponentProps<typeof FieldDescription>, 'children'>;
	disabled?: boolean;
} & FieldSetItem &
	React.ComponentProps<typeof Field>;

export type FieldSetProps = {
	items: FieldSetItems[];
} & React.ComponentProps<'fieldset'>;
