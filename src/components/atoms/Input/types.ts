import type {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  HTMLInputTypeAttribute,
} from "react";

import type { TSVG } from "../../../types";

export type TInput = {
  Icon?: TSVG;
  name?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  iconClass?: string;
  className?: string;
  placeholder: string;
  autoComplete?: string;
  containerClass?: string;
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  onBlur?: (data: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (data: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (data: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (
    value: string | number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};
