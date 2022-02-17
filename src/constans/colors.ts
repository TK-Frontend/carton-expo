export interface ColorValue {
  BLACK: string;
  BLUE: string;
  GOLD: string;
  GREY: string;
  WHITE: string;
  GRADIENT_BLUE: Array<string>;
  GRADIENT_ORANGE: Array<string>;
  GRADIENT_BROWN: Array<string>;
  GRADIENT_BROWN2: Array<string>;
  GRADIENT_GREY: Array<string>;
}

export const Colors: ColorValue = {
  BLACK: "#000000",
  BLUE: "#2BA8E0",
  GOLD: "#F7B900",
  GREY: "#B0B2B4",
  WHITE: "#ffffff",
  GRADIENT_BLUE: ["#20457d", "#182a5f", "#181a4b"],
  GRADIENT_ORANGE: ["#C79E79", "#C18F6C"],
  GRADIENT_BROWN: ["#D8A069", "#e6b980"],
  GRADIENT_BROWN2: ["#e6b980", "#eacda3"],
  GRADIENT_GREY: ["#868f96", "#596164"],
};
