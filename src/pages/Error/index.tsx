import { useEffect, type FC } from "react";
import { NavLink } from "react-router-dom";

import { ERoutePaths } from "libraries/router/types";
import { ToastVersions, showNotification } from "libraries/toastify";

import styles from "./Error.module.scss";

const Error: FC = () => {
  useEffect(() => {
    showNotification(ToastVersions.warning, "Failed route");
  }, []);

  return (
    <div className={styles.error}>
      <h1 className={styles.error__text}>
        There is no such route in the project.
      </h1>
      <NavLink className={styles.error_btn} to={ERoutePaths.Home}>
        Lets go to Home
      </NavLink>
    </div>
  );
};

export default Error;
