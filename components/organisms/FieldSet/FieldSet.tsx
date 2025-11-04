"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldContent,
  FieldSet as FieldSetComponent,
} from "@/components/ui/field";
import { FieldSetItems, FieldSetProps } from "./FieldSet.type";
import { isString } from "es-toolkit/predicate";
import { Input, Select, Switch, Textarea } from "@/components/atoms";
import {
  CheckboxGroup,
  Combobox,
  DatePicker,
  DateRangePicker,
  RadioGroup,
} from "@/components/molecule";

export const FieldSet = ({ items, ...props }: FieldSetProps) => {
  const renderLabel = (
    item: FieldSetItems,
    label: string | React.ReactNode
  ) => {
    if (isString(label)) {
      return (
        <FieldLabel htmlFor={item.id} {...item.labelProps}>
          {label}
        </FieldLabel>
      );
    }
    return label;
  };

  const renderDescription = (
    item: FieldSetItems,
    description?: string | React.ReactNode
  ) => {
    if (isString(description)) {
      return (
        <FieldDescription {...item.descriptionProps}>
          {description}
        </FieldDescription>
      );
    }
    return description;
  };

  const renderContent = (item: FieldSetItems) => {
    switch (item.type) {
      case "input":
        return <Input {...item.props} />;
      case "textarea":
        return <Textarea {...item.props} />;
      case "select":
        return <Select {...item.props} />;
      case "combobox":
        return <Combobox {...item.props} />;
      case "checkboxGroup":
        return item.props?.options ? <CheckboxGroup {...item.props} /> : null;
      case "radioGroup":
        return item.props?.options ? <RadioGroup {...item.props} /> : null;
      case "switch":
        return <Switch {...item.props} />;
      case "datePicker":
        return <DatePicker {...item.props} />;
      case "dateRangePicker":
        return <DateRangePicker {...item.props} />;
      default:
        return null;
    }
  };

  return (
    <FieldSetComponent {...props}>
      <FieldGroup>
        {items.map((item) => {
          return (
            <Field key={item.id}>
              <FieldContent>
                {renderLabel(item, item.label)}
                {item?.description && renderDescription(item, item.description)}
                {renderContent(item)}
              </FieldContent>
            </Field>
          );
        })}
      </FieldGroup>
    </FieldSetComponent>
  );
};
