/** A JSON-serializable schema used to render and validate a dynamic form. */
export interface FormSchema {
  title: string;
  description?: string;
  sections: FormSection[];
}

export interface FormSection {
    id: string;
    title: string;
    description?: string;
    fields: FormField[];
}

export type FormFieldType =
  | 'text' | 'textarea' | 'number' | 'email' | 'password' | 'tel' | 'url'
  | 'search' | 'date' | 'datetime-local' | 'time' | 'month' | 'week'
  | 'file' | 'checkbox' | 'radio' | 'select' | 'multiselect' | 'toggle' | 'hidden';

export type FormFieldValue = string | number | boolean | null | string[];

export interface FormField {
  id: string;
  name?: string;
  label: string;
  type: FormFieldType;
  defaultValue?: FormFieldValue;

  ui?: FormFieldUi;
  validation?: FormFieldValidation;
  options?: FormFieldOption[];
  logic?: FormFieldLogic;
  dataSource?: FormFieldDataSource;
}

export interface FormFieldUi {
  placeholder?: string;
  hint?: string;
  tooltip?: string;
  readonly?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}

export interface FormFieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  errorMessages?: Record<string, string>;
}

export interface FormFieldOption {
  label: string;
  value: string | number | boolean;
  disabled?: boolean;
}

/** Conditions remain JSON-serializable rather than storing executable functions. */
export interface FormFieldLogic {
  visibleWhen?: FormFieldCondition;
  enabledWhen?: FormFieldCondition;
  requiredWhen?: FormFieldCondition;
}

export type FormFieldCondition =
  | FormFieldRule
  | { all: FormFieldCondition[] }
  | { any: FormFieldCondition[] }
  | { not: FormFieldCondition };

export interface FormFieldRule {
  fieldId: string;
  operator:
    | 'equals' | 'notEquals' | 'contains' | 'notContains' | 'in' | 'notIn'
    | 'greaterThan' | 'greaterThanOrEqual' | 'lessThan' | 'lessThanOrEqual'
    | 'isEmpty' | 'isNotEmpty';
  value?: FormFieldValue | FormFieldValue[];
}

interface FormFieldDataSource {
    type: 'static' | 'api';
    url?: string;
    method?: 'GET' | 'POST';
    valueField?: string;
    labelField?: string;
}

