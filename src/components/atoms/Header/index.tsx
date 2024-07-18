import { Fragment, useState, type FC } from "react";
import classNames from "classnames";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import useDebouncedEffect from "use-debounced-effect";
import { useWindowWidth } from "@react-hook/window-size";

import {
  Logo,
  ArrowIcon,
  PhoneIcon,
  SearchIcon,
  CloseIcon,
  SearchBlack,
} from "assets";
import { useLockBodyScroll } from "hooks";
import { routesList } from "libraries/router/routes";
import { ERoutePaths } from "libraries/router/types";
import { ToastVersions, showNotification } from "libraries/toastify";

import Input from "../Input";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const width = useWindowWidth();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const isTablet = width <= 768;
  const renderListCase = isTablet ? isTablet && isOpen : true;

  const searchHandler = (value: string | number) => {
    setSearchValue(String(value));
  };

  const showSearchHandler = () => {
    setShowSearch(!showSearch);
  };

  const renderHeaderRouteList = routesList.map(({ path, title }) => {
    const selectRoute = title === "Treatments";
    const removeErrorPage = title !== "Error Page";

    return (
      <Fragment key={path}>
        {removeErrorPage && (
          <NavLink
            to={path}
            onClick={() => setOpen(false)}
            aria-label={`Navigate To ${title} page`}
            className={styles.wrapper_block__routes_route}
          >
            {title} {selectRoute && <ArrowIcon />}
          </NavLink>
        )}
      </Fragment>
    );
  });

  useDebouncedEffect(
    () => {
      if (searchValue) {
        console.log(searchValue);
      }
    },
    800,
    [searchValue]
  );

  useLockBodyScroll(isOpen);

  return (
    <header className={styles.header_bg}>
      <div className={classNames("container", styles.wrapper)}>
        <div className={styles.wrapper_block}>
          {isTablet && (
            <div className={styles.wrapper_block__routes__burger}>
              <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
            </div>
          )}

          <div
            className={classNames(styles.wrapper_block__routes, {
              [styles.wrapper_block__routes_active]: isOpen,
            })}
          >
            {renderListCase && renderHeaderRouteList}
          </div>
        </div>

        <NavLink
          to={ERoutePaths.Home}
          onClick={() => setOpen(false)}
          className={styles.wrapper__logo}
          aria-label="Navigate To home page"
        >
          <Logo className={styles.wrapper__logo_img} />
        </NavLink>

        {isTablet && (
          <button
            className={styles.wrapper__book}
            onClick={() => showNotification(ToastVersions.info, "coming soon")}
          >
            Book Now
          </button>
        )}

        {!isTablet ? (
          <div className={styles.wrapper__phone}>
            <PhoneIcon className={styles.wrapper__phone_img} />

            <a href="tel:+37444007171" className={styles.wrapper__phone_number}>
              +374 44 007171
            </a>
          </div>
        ) : (
          <div
            className={classNames(styles.wrapper__search, {
              [styles.wrapper__search_show]: showSearch,
            })}
          >
            {!showSearch && (
              <SearchBlack
                role="button"
                onClick={showSearchHandler}
                className={styles.wrapper__search_icon}
              />
            )}

            {showSearch && (
              <Input
                Icon={SearchIcon}
                placeholder="Search..."
                containerClass={styles.wrapper__search_cont}
                className={styles.wrapper__search_inp}
                onChange={(value) => searchHandler(value)}
              />
            )}
            {showSearch && (
              <CloseIcon
                role="button"
                onClick={() => setShowSearch(false)}
                className={styles.wrapper__search_close}
              />
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
