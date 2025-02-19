export const MasterChefAddr = "0xe33Ed92E576990D560e5498a0005E77d1e0A1bF2";

export const MeatVaultAddr = "0x3b8649eC5F25043a75876Cf35fb9AC0025cC6266";

// export const BitxAddr = "0x169Be05e2EE643c4d0A467BF07f3Ad9f720271D4"; //testnet
export const BitxAddr = "0xBb622cEba240980B3D6A200108e1753bc928ADb3";

// export const UsdtBitxLpAddr = "0x276a843E8e5dD8318B29924172B2426D0dB8699C";//testnet
export const UsdtBitxLpAddr = "0x3024b37aC5499F0e15A19849Cdf130A8E60BDD9b";

// export const BusdBitxLpAddr = "0x7c1F78B88C8DB3143179CB9F2a52C0fE39F3a591"; //testnet
export const BusdBitxLpAddr = "0x6e7E318067cB9b814A2F88E04559E1b0ada5d24A";

// export const BitxBnbLpAddr = "0x1a74ee9730724F25A364B95f07a32fcaf0377EbC"; //testnet
export const BitxBnbLpAddr = "0xaF7470E99bA6F624DF58C4ebeCdAaA9922376Ca1";

// export const MulticallAddr = "0x91598056613c69b189Df336c12B11F9C180aFC0d"; //testnet
export const MulticallAddr = "0x41263cba59eb80dc200f3e2544eda4ed6a90e76c";

// export const BUSDAddr = "0x8178427c7B2334522C2D23Eda02f25cF03001C30";//testnet
export const BUSDAddr = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";

// export const USDTAddr = "0x66Ca77F98106585f3A3D8411A2b16E734FbDF841";//testnet
export const USDTAddr = "0x55d398326f99059fF775485246999027B3197955";

export const ETHAddr = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

export const CAKE_PER_YEAR = 12614;

export const TotalAllocPoint = 3000;

export const lpAprs = {
    [UsdtBitxLpAddr]: 5,
    [BusdBitxLpAddr]: 5,
    [BitxBnbLpAddr]: 5,
    [USDTAddr]: 5,
    [BUSDAddr]: 5,
    [BitxAddr]: 5,
}

export const Farms = [
    {
        pid: 1,
        lpSymbol: 'BITX-USDT LP',
        logo: "./img/t.png",
        width: 33,
        lpAddress: UsdtBitxLpAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 2,
        lpSymbol: 'BUSD-BITX LP',
        logo: "./img/d.png",
        width: 33,
        lpAddress: BusdBitxLpAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 3,
        lpSymbol: 'BNB-BITX LP',
        logo: "./img/d.png",
        width: 33,
        lpAddress: BitxBnbLpAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 4,
        lpSymbol: 'BITX',
        logo: "./img/meat_box_frame.png",
        width: 30,
        lpAddress: BitxAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 5,
        lpSymbol: 'USDT',
        logo: "./img/icons/icon1.png",
        width: 25,
        lpAddress: USDTAddr,
        token: "",
        quoteToken: "",
    },
    {
        pid: 6,
        lpSymbol: 'BUSD',
        logo: "./img/icons/icon2.png",
        width: 25,
        lpAddress: BUSDAddr,
        token: "",
        quoteToken: "",
    }

]

export const backendLink = "http://192.168.104.102:8000";

export const defaultRPC = "https://bsc-dataseed.binance.org/" // https://bsc-dataseed1.ninicoin.io