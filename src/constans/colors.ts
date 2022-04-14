export interface ColorValue {
  BLACK: string;
  BLUE: string;
  GOLD: string;
  GREEN: string;
  GREY: string;
  RED: string;
  WHITE: string;
  GRADIENT_BLUE: Array<string>;
  GRADIENT_LIGHT_BLUE: Array<string>;
  GRADIENT_ORANGE: Array<string>;
  GRADIENT_BROWN: Array<string>;
  GRADIENT_BROWN2: Array<string>;
  GRADIENT_GREY: Array<string>;
}

export const Colors: ColorValue = {
  BLACK: "#000000",
  BLUE: "#2BA8E0",
  GOLD: "#F7B900",
  GREEN: "#00C300",
  GREY: "#B0B2B4",
  RED: "#CF0000",
  WHITE: "#ffffff",
  GRADIENT_BLUE: ["#20457D", "#182A5F", "#181A4B"],
  GRADIENT_LIGHT_BLUE: ["#22C3F3", "#4169B2"],
  GRADIENT_ORANGE: ["#C79E79", "#C18F6C"],
  GRADIENT_BROWN: ["#D8A069", "#e6b980"],
  GRADIENT_BROWN2: ["#e6b980", "#eacda3"],
  GRADIENT_GREY: ["#868f96", "#596164"],
};
