import { useStateType } from "types";
import { TInitialActiveIDValueProps, TLocalFilteringProps } from "./types";

export const initialActiveIDValue = {
  first: null,
  second: null,
  third: null,
};

export const initialFilteringIDValue = {
  first: [],
  second: [],
  third: [],
};

export const reusableActiveHandler =
  (
    id: number,
    key: string,
    setActiveId: useStateType<TInitialActiveIDValueProps>,
    filteredArray: any,
    setLocalFiltering: useStateType<TLocalFilteringProps>
  ) =>
  () => {
    const updatedData = filteredArray?.filter((item: any) => item.id === id);
    setActiveId((prevState: any) => ({
      ...prevState,
      second: key === "first" ? null : prevState.id,
      third: key === "first" || key === "second" ? null : prevState.id,
      [key]: id,
    }));
    setLocalFiltering((prevState: any) => ({
      ...prevState,
      second: key === "first" ? [] : prevState.second,
      third: key === "first" || key === "second" ? [] : prevState.third,
      [key]: updatedData[0]?.content || [],
    }));
  };
