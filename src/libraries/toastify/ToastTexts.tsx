import type { FC } from "react";

import type { TToastTextsProps } from "./types";
import styles from "./Toast.module.scss";

const ToastTexts: FC<TToastTextsProps> = ({ color, title, description }) => (
  <div className={styles.container}>
    <p style={{ color: color }} className={styles.container__title}>
      {title}
    </p>
  </div>
);

export default ToastTexts;
