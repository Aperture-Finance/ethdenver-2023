const LimitOrderChainlink = artifacts.require("LimitOrderChainlink");

module.exports = function(deployer) {
  deployer.deploy(LimitOrderChainlink, "0x02777053d6764996e594c3E88AF1D58D5363a2e6", "0xC36442b4a4522E871399CD717aBDD847Ab11FE88");
};
