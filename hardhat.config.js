require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.4",
  networks: {
    extropy: {
      url: "http://18.130.233.246:9454",
      accounts: [process.env.DEFI_PRIV_KEY],
      chainId: 20200520,
      gasPrice: 1000000000,
      gas: 2100000,
    },
    hardhat: {},
  },
};
