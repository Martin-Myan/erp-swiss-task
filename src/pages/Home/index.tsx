import { useState, type FC } from "react";
import classNames from "classnames";
import useDebouncedEffect from "use-debounced-effect";
import { useWindowWidth } from "@react-hook/window-size";

import { fakeDataForHomePage } from "utils";
import { Rectangle, SearchIcon } from "assets";
import { Input, SelectBlock, SelectItem } from "components";

import type { TInitialActiveIDValueProps, TLocalFilteringProps } from "./types";
import {
  initialActiveIDValue,
  initialFilteringIDValue,
  reusableActiveHandler,
} from "./utils";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const width = useWindowWidth();
  const isWide = width <= 950;
  const isTablet = width <= 768;

  const [activeId, setActiveId] =
    useState<TInitialActiveIDValueProps>(initialActiveIDValue);
  const [localFiltering, setLocalFiltering] = useState<TLocalFilteringProps>(
    initialFilteringIDValue
  );
  const [searchValue, setSearchValue] = useState<string>("");

  const searchHandler = (value: string | number) => {
    setSearchValue(String(value));
  };

  const renderMainPlanningList = fakeDataForHomePage?.map((item) => (
    <SelectBlock
      key={item.id}
      item={item}
      activeId={activeId}
      setActiveId={setActiveId}
      localFiltering={localFiltering}
      setLocalFiltering={setLocalFiltering}
      fakeDataForHomePage={fakeDataForHomePage}
    />
  ));

  const renderMainPlanningFirstList = localFiltering?.first?.map((item) => (
    <SelectItem
      key={item.id}
      text={item.text}
      unActive={!item?.content?.length}
      onClick={reusableActiveHandler(
        item.id,
        "second",
        setActiveId,
        localFiltering?.first,
        setLocalFiltering
      )}
      active={activeId?.second === item.id && !!localFiltering?.second?.length}
    />
  ));

  const renderMainPlanningSecondList = localFiltering?.second?.map((item) => (
    <SelectItem
      key={item.id}
      text={item.text}
      unActive={!item?.content?.length}
      onClick={reusableActiveHandler(
        item.id,
        "third",
        setActiveId,
        localFiltering?.second,
        setLocalFiltering
      )}
      active={activeId?.third === item.id && !!localFiltering?.third?.length}
    />
  ));

  const renderMainPlanningThirdList = localFiltering?.third?.map((item) => (
    <SelectItem key={item.id} text={item.text} />
  ));

  useDebouncedEffect(
    () => {
      if (searchValue) {
        console.log(searchValue);
      }
    },
    800,
    [searchValue]
  );

  return (
    <section>
      {!isTablet && (
        <div className={styles.head_part}>
          <div className={classNames("container", styles.head_part_wrapper)}>
            <p className={styles.head_part_wrapper_text}>
              Choose Your Appointment
            </p>

            <Input
              Icon={SearchIcon}
              placeholder="Search..."
              onChange={(value) => searchHandler(value)}
            />
          </div>
        </div>
      )}

      <div className={classNames("container", styles.main)}>
        <p className={styles.schedule}>Schedule an Appointment</p>

        <div className={styles.main_planning}>
          <div
            className={classNames(styles.main_planning__block, {
              [styles.main_planning__block_width]:
                !!localFiltering?.first?.length,
            })}
          >
            <div
              className={classNames(styles.main_planning__block_list, {
                [styles.main_planning__block_list_transparent]:
                  !!localFiltering?.first?.length,
              })}
            >
              {renderMainPlanningList}
            </div>

            {!!localFiltering?.first?.length && !isWide && (
              <div
                className={classNames(styles.main_planning__block_list, {
                  [styles.main_planning__block_list_transparent]:
                    !!localFiltering?.second?.length,
                })}
              >
                {renderMainPlanningFirstList}
              </div>
            )}

            {!!localFiltering?.first?.length &&
              !!localFiltering?.second?.length &&
              !isWide && (
                <div
                  className={classNames(styles.main_planning__block_list, {
                    [styles.main_planning__block_list_transparent]:
                      !!localFiltering?.third?.length,
                  })}
                >
                  {renderMainPlanningSecondList}
                </div>
              )}

            {!!localFiltering?.first?.length &&
              !!localFiltering?.second?.length &&
              !!localFiltering?.third?.length &&
              !isWide && (
                <div className={styles.main_planning__block_list}>
                  {renderMainPlanningThirdList}
                </div>
              )}
          </div>

          {!localFiltering?.first?.length && !isWide && (
            <img src={Rectangle} alt="" className={styles.main_planning_img} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
