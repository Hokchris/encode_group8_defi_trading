// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const {
  abi,
} = require("../artifacts/contracts/IUniswapV2Factory.sol/IUniswapV2Factory.json");

const ExtropyCoinAddress = "0x65e770F49625273e41f4B6790CE1105aC142f8a9";
const DAIAddress = "0x40945338Fd60044A2D56db8bA2eC46507590340C";
const wETHAddress = "0x53380c9EBe8851a2C965ddA342cAe22e59144Bfc";

const UniswapV2Router02Address = "0xb39b143D38196F97c4F70Cf081dDB68A20425203";

const SushiTokenAddress = "0x67C292e1e33e91c2e620F7b67c6F98AB78D9dc2a";
const MasterChefAddress = "0x71cE53e2371B76372BF1c2d03EcC576D1cB91962";
const SushiBarAddress = "0xaE0C9b71522944a8910189cD88B3d056be257A1d";
const SushiMakerAddress = "0xcdBCFa2243aD006cC62bA079D393cf28E0E3BaF5";

const USER_ADDRESS = "0xd0389eae8a1524AFD64F9595172b390415eE1075";

// const provider = new ethers.providers.Web3Provider();

async function main() {
  // const Extropy_Contract = ethers.getContractAt("ERC20", ExtropyCoinAddress);

  // const test = await ethers.provider.getBlockNumber();

  // console.log(test);

  const uniswapRouter = new ethers.Contract(
    UniswapV2Router02Address,
    abi,
    ethers.provider
  );

  // console.log("ABI ", abi);
  // console.log("PROV ", ethers.provider);

  console.log(uniswapRouter);

  // console.log(await uniswapRouter.allPairsLength());

  // const daiEx = await uniswapRouter.getPair(
  //   ethers.utils.getAddress(DAIAddress),
  //   ethers.utils.getAddress(ExtropyCoinAddress)
  // );

  // console.log(daiEx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
