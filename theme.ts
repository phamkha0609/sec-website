"use client";

import { createTheme } from "@mantine/core";
import { Didot, HelveticaNeue } from "./assets/fonts";

export const theme = createTheme({
  fontFamily: HelveticaNeue.style.fontFamily,
  headings: { fontFamily: Didot.style.fontFamily },
});
