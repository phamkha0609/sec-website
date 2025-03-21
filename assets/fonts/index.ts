import localFont from "next/font/local";

export const Didot = localFont({ src: "./Didot.otf" });
export const HelveticaNeue = localFont({
  src: [
    {
      path: "./HelveticaNeueThin.otf",
      weight: "300",
    },
    {
      path: "./HelveticaNeueLight.otf",
      weight: "400",
    },
    {
      path: "./HelveticaNeueMedium.otf",
      weight: "500",
    },
  ],
});
