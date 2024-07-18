import { useEffect, useState, type FC } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import ProgressBar from "../ProgressBar";
import type { HelmetProps } from "./types";
import styles from "./Helmet.module.scss";

const HelmetLayout: FC<HelmetProps> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.key]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ProgressBar isAnimating={isLoading} key={location.key} />

      <Helmet>
        <title>{title}</title>
      </Helmet>

      {children}
    </div>
  );
};

export default HelmetLayout;
