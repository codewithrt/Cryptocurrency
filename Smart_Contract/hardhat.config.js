require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.14",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
    },
    georli: {
      url: "https://goerli.infura.io/v3/7f2148d884c74dfb811443b3f1b50291",
      accounts: [
        "0x816f065dc0f01ae8c67c916cc310b2524137432cd018eb20a1f01c8c192d3017","0x52b29e8b2117cc4af132cf7b58a771000120a4175c74f412148bda3d20159552",
      ],
    },
  },
};
