import {
  forwardRef,
  type FocusEvent,
  type ChangeEvent,
  type LegacyRef,
  type KeyboardEvent,
} from "react";
import classNames from "classnames";

import type { TInput } from "./types";
import styles from "./Input.module.scss";

const Input = forwardRef(
  (
    {
      name,
      Icon,
      value,
      onBlur,
      onFocus,
      disabled,
      type = "text",
      onChange,
      maxLength,
      minLength,
      onKeyDown,
      iconClass = "",
      className = "",
      placeholder = "",
      containerClass = "",
      autoComplete = "off",
    }: TInput,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onChange?.(value, e);
    };

    const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
    };

    const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
      onFocus?.(e);
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e);
    };

    return (
      <div
        className={classNames(styles.wrapper, {
          [containerClass]: containerClass,
        })}
      >
        {Icon ? (
          <Icon className={classNames(styles.wrapper__icon, iconClass)} />
        ) : null}

        <input
          ref={ref}
          name={name}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          autoComplete={autoComplete}
          onKeyDown={onKeyDownHandler}
          onChange={onChangeValueHandler}
          placeholder={String(placeholder)}
          className={classNames(className, styles.input, {
            [styles.input__is_icon]: Icon,
          })}
          type={type}
        />
      </div>
    );
  }
);

export default Input;
