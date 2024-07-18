export type TInitialActiveIDValueProps = {
  first: null | number;
  second: null | number;
  third: null | number;
};

export type TFakeDataProps = {
  text: string;
  id: number;
  content?: TFakeDataProps[];
};

export type TLocalFilteringProps = {
  first?: TFakeDataProps[];
  second?: TFakeDataProps[];
  third?: TFakeDataProps[];
};
