import { InputProps } from "@/components/atoms/Input/Input.type";
import { TextareaProps } from "@/components/atoms/Textarea/Textarea.type";
import { SelectProps } from "@/components/atoms/Select/Select.type";
import {
  ComboboxProps,
  ComboboxOption,
} from "@/components/molecule/Combobox/Combobox.type";
import { DatePickerProps } from "@/components/molecule/DatePicker/DatePicker.type";
import { DateRangePickerProps } from "@/components/molecule/DateRangePicker/DateRangePicker.type";
import { FieldDescription } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { SwitchProps } from "@radix-ui/react-switch";

export type FieldSetItem =
  | {
      type: "input";
      props?: InputProps;
    }
  | {
      type: "textarea";
      props?: TextareaProps;
    }
  | {
      type: "select";
      props?: SelectProps;
    }
  | {
      type: "combobox";
      props: Omit<ComboboxProps, "options"> & {
        options: ComboboxOption[];
      };
    }
  | {
      type: "switch";
      props?: SwitchProps;
    }
  | {
      type: "datePicker";
      props?: DatePickerProps;
    }
  | {
      type: "dateRangePicker";
      props?: DateRangePickerProps;
    };

export type FieldSetItems = {
  id: string;
  label: string | React.ReactNode;
  labelProps?: Omit<React.ComponentProps<typeof Label>, "children">;
  description?: string | React.ReactNode;
  descriptionProps?: Omit<
    React.ComponentProps<typeof FieldDescription>,
    "children"
  >;
} & FieldSetItem;

export type FieldSetProps = {
  items: FieldSetItems[];
} & React.ComponentProps<"fieldset">;
