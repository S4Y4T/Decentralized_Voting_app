import('hardhat/config.js').HardhatUserConfig

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
   solidity: "0.8.18",
   defaultNetwork: "sepolia",
   networks: {
      sepolia: {
         url: process.env.API_URL,
         accounts: [process.env.PRIVATE_KEY],
      }
   },
   etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
   },
}