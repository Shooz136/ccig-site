import themeSettings from "@/config/theme.json";

const fontStacks = {
  bricolage:
    '"Bricolage Grotesque Variable", "Inter Variable", Inter, ui-sans-serif, system-ui, sans-serif',
  inter:
    '"Inter Variable", Inter, ui-sans-serif, system-ui, sans-serif',
  system:
    'ui-sans-serif, system-ui, sans-serif',
  helvetica:
    '"Helvetica Neue", Helvetica, Arial, sans-serif',
  arial:
    'Arial, "Helvetica Neue", Helvetica, sans-serif',
  georgia:
    'Georgia, "Times New Roman", Times, serif',
  times:
    '"Times New Roman", Times, serif',
  garamond:
    'Garamond, Baskerville, "Times New Roman", serif',
  palatino:
    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  trebuchet:
    '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", sans-serif',
  verdana:
    'Verdana, Geneva, sans-serif',
  tahoma:
    'Tahoma, Geneva, sans-serif',
  courier:
    '"Courier New", Courier, monospace'
} as const;

export const theme = {
  ...themeSettings,
  headingFontStack: fontStacks[themeSettings.headingFont] || fontStacks.bricolage,
  bodyFontStack: fontStacks[themeSettings.bodyFont] || fontStacks.inter
};
