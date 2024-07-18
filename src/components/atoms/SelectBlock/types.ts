import {
  TFakeDataProps,
  TInitialActiveIDValueProps,
  TLocalFilteringProps,
} from "pages/Home/types";
import { useStateType } from "types";

export type TSelectBlockProps = {
  item: TFakeDataProps;
  activeId: TInitialActiveIDValueProps;
  setActiveId: useStateType<TInitialActiveIDValueProps>;
  localFiltering: TLocalFilteringProps;
  setLocalFiltering: useStateType<TLocalFilteringProps>;
  fakeDataForHomePage: TFakeDataProps[];
};
