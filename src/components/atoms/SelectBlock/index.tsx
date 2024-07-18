import type { FC } from "react";
import classNames from "classnames";
import { useWindowWidth } from "@react-hook/window-size";

import { Arroww } from "assets";
import { reusableActiveHandler } from "pages/Home/utils";

import SelectItem from "../SelectItem";
import type { TSelectBlockProps } from "./types";
import styles from "./SelectBlock.module.scss";

const SelectBlock: FC<TSelectBlockProps> = ({
  item,
  activeId,
  setActiveId,
  localFiltering,
  setLocalFiltering,
  fakeDataForHomePage,
}) => {
  const width = useWindowWidth();
  const isWide = width <= 950;

  return (
    <div
      className={classNames({
        [styles.active]:
          item.id === activeId?.first && isWide && item?.content?.length,
      })}
    >
      <SelectItem
        text={item.text}
        unActive={!item?.content?.length}
        className={classNames({
          [styles.item]:
            item.id === activeId?.first && isWide && item?.content?.length,
          [styles.item_active]:
            item.id === activeId?.first && isWide && item?.content?.length,
        })}
        onClick={reusableActiveHandler(
          item.id,
          "first",
          setActiveId,
          fakeDataForHomePage,
          setLocalFiltering
        )}
        active={activeId?.first === item.id && !!localFiltering?.first?.length}
      />

      {item.id === activeId.first &&
        isWide &&
        !!localFiltering?.first?.length && (
          <div className={styles.active__first}>
            {localFiltering.first?.map((element) => (
              <div key={element.id}>
                <p
                  className={classNames(styles.item_childe, {
                    [styles.item_childe_disabled]: !element.content?.length,
                  })}
                  onClick={reusableActiveHandler(
                    element.id,
                    "second",
                    setActiveId,
                    localFiltering?.first,
                    setLocalFiltering
                  )}
                >
                  {element.text}
                  {!!element?.content?.length && (
                    <Arroww className={styles.item_childe_black_icon} />
                  )}
                </p>

                {element.id === activeId.first &&
                  isWide &&
                  !!localFiltering?.second?.length && (
                    <div className={styles.active__first__second}>
                      {localFiltering.second?.map((elemSecond) => (
                        <div key={elemSecond.id}>
                          <p
                            role="button"
                            onClick={reusableActiveHandler(
                              elemSecond.id,
                              "third",
                              setActiveId,
                              localFiltering?.second,
                              setLocalFiltering
                            )}
                            className={classNames(
                              styles.active__first__second_text,
                              {
                                [styles.item_childe_disabled]:
                                  !elemSecond?.content?.length,
                              }
                            )}
                          >
                            {elemSecond.text}
                            {!!elemSecond?.content?.length && (
                              <Arroww
                                className={styles.item_childe_black_icon}
                              />
                            )}
                          </p>

                          {elemSecond.id === activeId.third && isWide && (
                            <div className={styles.active__first__second_third}>
                              {localFiltering?.third?.map((elemThird) => (
                                <div key={elemThird.id}>
                                  <p
                                    className={classNames(
                                      styles.active__first__second_third_text,
                                      {
                                        [styles.item_childe_disabled]:
                                          !elemThird?.content?.length,
                                      }
                                    )}
                                  >
                                    {elemThird.text}
                                    {!!elemThird?.content?.length && (
                                      <Arroww
                                        className={
                                          styles.item_childe_black_icon
                                        }
                                      />
                                    )}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default SelectBlock;
