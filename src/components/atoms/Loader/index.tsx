import { FC } from "react";
import classNames from "classnames";

import type { TLoaderProps } from "./types";
import styles from "./Loader.module.scss";

const emptyArray = new Array(4).fill("");

const Loader: FC<TLoaderProps> = ({
  size = "20px",
  className = "",
  color = "#fff",
}) => {
  const renderEmptyBlocks = emptyArray.map((_, idx) => (
    <div
      key={idx}
      style={{
        width: size,
        height: size,
        borderTopColor: color,
      }}
    />
  ));

  return (
    <div
      style={{ width: size, height: size }}
      className={classNames(styles.wrapper, className)}
    >
      {renderEmptyBlocks}
    </div>
  );
};

export default Loader;
