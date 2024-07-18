import { TFakeDataProps } from "pages/Home/types";

export const fakeDataForHomePage: TFakeDataProps[] = [
  {
    text: "Aestheic & Anti-Aging",
    id: 1,
    content: [
      {
        text: "Doctor Consultation",
        id: 1,
        content: [
          { text: "Dermal Filler Injections", id: 1 },
          { text: "Botulinum Toxin", id: 2 },
          { text: "Fat Burner Injection", id: 3 },
          { text: "Mesotheraphy", id: 4 },
          {
            text: "PRP",
            id: 5,
            content: [
              { text: "PRP Hair", id: 1 },
              { text: "PRP Face & Neck", id: 2 },
            ],
          },
        ],
      },
      { text: "Injection", id: 2 },
      { text: "Devices", id: 3 },
      { text: "Skin Treatment", id: 4 },
      { text: "IV Drips", id: 5 },
    ],
  },
  { text: "Hardware Cosmetology", id: 2 },
  { text: "Plastic Surgery", id: 3 },
  { text: "Dental", id: 4 },
  { text: "Hair Transplant", id: 5 },
];
