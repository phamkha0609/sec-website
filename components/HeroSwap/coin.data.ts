import { StaticImageData } from "next/image";
import { Bitcoin, LogoHeader, SECCoin, TetherCoin } from "../../assets/imgs";

export const coinDataList: CoinDataProps[] = [
  {
    symbol: "SEC",
    icon: LogoHeader,
    name: "SEC Coin",
  },
  {
    symbol: "USDT",
    icon: TetherCoin,
    name: "Tether",
  },
  {
    symbol: "BTC",
    icon: Bitcoin,
    name: "Bitcoin",
  },
];

export type CoinDataProps = {
  symbol: string;
  icon: StaticImageData;
  name: string;
};
