import themeSettings from "@/config/theme.json";

const fontStacks = {
  bricolage:
    '"Bricolage Grotesque Variable", "Inter Variable", Inter, ui-sans-serif, system-ui, sans-serif',
  inter:
    '"Inter Variable", Inter, ui-sans-serif, system-ui, sans-serif',
  system:
    'ui-sans-serif, system-ui, sans-serif'
} as const;

export const theme = {
  ...themeSettings,
  headingFontStack: fontStacks[themeSettings.headingFont] || fontStacks.bricolage,
  bodyFontStack: fontStacks[themeSettings.bodyFont] || fontStacks.inter
};
