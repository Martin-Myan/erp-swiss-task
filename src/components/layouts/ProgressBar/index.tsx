import type { FC } from "react";
import classNames from "classnames";
import { useNProgress } from "@tanem/react-nprogress";

import type { TProgressBarProps } from "./types";
import styles from "./ProgressBar.module.scss";

const ProgressBar: FC<TProgressBarProps> = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
    incrementDuration: 1000,
  });

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.wrapper__finished]: isFinished,
      })}
      style={{
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className={styles.wrapper__container}
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      >
        <div className={styles.wrapper__container__nested} />
      </div>
    </div>
  );
};

export default ProgressBar;
