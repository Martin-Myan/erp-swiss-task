import { useEffect, type FC } from "react";
import { NavLink } from "react-router-dom";

import { ERoutePaths } from "libraries/router/types";
import { ToastVersions, showNotification } from "libraries/toastify";

import styles from "./ComingSoon.module.scss";

const ComingSoon: FC = () => {
  useEffect(() => {
    showNotification(ToastVersions.info, "Page is coming soon");
  }, []);

  return (
    <div className={styles.coming_soon}>
      <h1 className={styles.coming_soon__text}>Page is coming soon</h1>
      <NavLink className={styles.coming_soon_btn} to={ERoutePaths.Home}>
        Lets go to Home
      </NavLink>
    </div>
  );
};

export default ComingSoon;
