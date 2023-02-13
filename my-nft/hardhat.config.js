/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config({path: ".env"});
require("@nomiclabs/hardhat-ethers");
const API_URL =  process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.7.0",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
        //  accounts: [`0x${PRIVATE_KEY}`],
         accounts: [PRIVATE_KEY],
      },
   },
  };