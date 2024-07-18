import type { FC } from "react";
import { noop } from "lodash";
import classNames from "classnames";
import { useWindowWidth } from "@react-hook/window-size";

import { ArrowIcon } from "assets";

import type { TSelectItemProps } from "./types";
import styles from "./SelectItem.module.scss";

const SelectItem: FC<TSelectItemProps> = ({
  unActive,
  text,
  active,
  className = "",
  onClick = noop,
}) => {
  const width = useWindowWidth();
  const isWide = width <= 950;

  return (
    <p
      className={classNames(styles.item, {
        [styles.item_un_active]: unActive,
        [className]: className,
      })}
      role="button"
      onClick={onClick}
    >
      {text} {!isWide ? active : isWide && <ArrowIcon />}
    </p>
  );
};

export default SelectItem;
