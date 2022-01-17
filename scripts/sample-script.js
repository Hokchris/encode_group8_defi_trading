const { ethers } = require('hardhat')
const { abi } = require('../artifacts/contracts/IUniswapV2Factory.sol/IUniswapV2Factory.json')

const ExtropyCoinAddress = '0x65e770F49625273e41f4B6790CE1105aC142f8a9'
const DAIAddress = '0x40945338Fd60044A2D56db8bA2eC46507590340C'
const wETHAddress = '0x53380c9EBe8851a2C965ddA342cAe22e59144Bfc'

const UniswapV2Router02Address = '0xb39b143D38196F97c4F70Cf081dDB68A20425203'

const SushiTokenAddress = '0x67C292e1e33e91c2e620F7b67c6F98AB78D9dc2a'
const MasterChefAddress = '0x71cE53e2371B76372BF1c2d03EcC576D1cB91962'
const SushiBarAddress = '0xaE0C9b71522944a8910189cD88B3d056be257A1d'
const SushiMakerAddress = '0xcdBCFa2243aD006cC62bA079D393cf28E0E3BaF5'

const USER_ADDRESS = '0xd0389eae8a1524AFD64F9595172b390415eE1075'

const prov = new ethers.providers.JsonRpcProvider('http://18.130.233.246:9454')

async function main() {
  // const Extropy_Contract = ethers.getContractAt("ERC20", ExtropyCoinAddress);

  const uniswapRouter = new ethers.Contract(UniswapV2Router02Address, abi, prov)

  // console.log("ABI ", abi);
  // console.log("PROV ", ethers.provider);

  console.log(uniswapRouter)

  const test = await uniswapRouter.getPair(ExtropyCoinAddress, DAIAddress)

  // try {
  //   console.log(await uniswapRouter.allPairsLength());
  // } catch (error) {
  //   console.error(error);
  // }
  // const daiEx = await uniswapRouter.getPair(
  //   ethers.utils.getAddress(DAIAddress),
  //   ethers.utils.getAddress(ExtropyCoinAddress)
  // );

  // console.log(daiEx);
}

async function getOtherTeamBalances() {
  EXTROPY_COIN_ADDRESS = '0x65e770F49625273e41f4B6790CE1105aC142f8a9'
  const extropyContract = await ethers.getContractAt('ERC20', EXTROPY_COIN_ADDRESS)

  GROUP_1_ADDRESS = '0x81c377E02D10EDD6d99d6ED79290118ad94De588'
  GROUP_2_ADDRESS = '0x368510137009AF63Af3c70e484E90EFEA0Fe63a3'
  GROUP_3_ADDRESS = '0x2e56320bc51cdbb343bea3ec9dba16b34bc718e9'
  GROUP_4_ADDRESS = '0x25c81583f9ab6DBD0C4F21B3aa1008d8a56D5830'
  GROUP_5_ADDRESS = '0xEDB4400a8b1DEccc6C62DFDDBD6F73E48537012A'
  GROUP_6_ADDRESS = '0x58b36E0eF26BF365a0F37651E1561B1340333b11'
  GROUP_7_ADDRESS = '0x235d255924645fd3979D1c231552D49FFa40eA1c'
  GROUP_8_ADDRESS = '0xd0389eae8a1524AFD64F9595172b390415eE1075'
  console.log(await prov.getTransactionCount(EXTROPY_COIN_ADDRESS))
  // console.log(extropyContract)
  console.log(await extropyContract.totalSupply())
  console.log(await extropyContract.balanceOf(GROUP_1_ADDRESS))
  console.log(await extropyContract.balanceOf(GROUP_2_ADDRESS))
  console.log(await extropyContract.balanceOf(GROUP_3_ADDRESS))
  console.log(await extropyContract.balanceOf(GROUP_4_ADDRESS))
  console.log(await extropyContract.balanceOf(GROUP_5_ADDRESS))
  console.log(await extropyContract.balanceOf(GROUP_6_ADDRESS))
  console.log(await extropyContract.balanceOf(GROUP_7_ADDRESS))
  console.log(await extropyContract.balanceOf(GROUP_8_ADDRESS))
}

getOtherTeamBalances()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
