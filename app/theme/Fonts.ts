export function generateMapping(fontName: string): any {
  return {
    strict: {
      "text-font-family": fontName + "-Regular",
      "text-heading-1-font-family": fontName + "-Bold",
      "text-heading-2-font-family": fontName + "-Medium",
      "text-heading-3-font-family": fontName + "-MediumItalic",
      "text-heading-4-font-family": fontName + "-SemiBold",
      "text-heading-5-font-family": fontName + "-SemiBold",
      "text-heading-6-font-family": fontName + "-SemiBoldItalic",
      "text-subtitle-1-font-family": fontName + "-SemiBold",
      "text-subtitle-2-font-family": fontName + "-SemiBoldItalic",
      "text-paragraph-1-font-family": fontName + "-Regular",
      "text-paragraph-2-font-family": fontName + "-Light",
      "text-caption-1-font-family": fontName + "-SemiBold",
      "text-caption-2-font-family": fontName + "-SemiBold",
      "text-label-font-family": fontName + "-Regular",
    }
  };
}