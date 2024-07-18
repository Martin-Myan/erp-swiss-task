import type { SVGProps, FC, Dispatch, SetStateAction } from "react";

export type TSVG = FC<SVGProps<SVGSVGElement>>;

export type useStateType<T> = Dispatch<SetStateAction<T>>;
