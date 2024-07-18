import { Fragment, type FC } from "react";

import { Header } from "components";
import { RoutesWrapper } from "libraries/router";

import styles from "./PageLayout.module.scss";

const PageLayout: FC = () => (
  <Fragment>
    <Header />

    <main className={styles.wrapper}>
      <RoutesWrapper />
    </main>
  </Fragment>
);

export default PageLayout;
