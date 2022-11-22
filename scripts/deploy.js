const { ethers } = require("hardhat");

async function main() {
  const MyTokenContract = await ethers.getContractFactory("MyToken");

  const deployedMyTokenContract = await MyTokenContract.deploy();

  await deployedMyTokenContract.deployed();

  console.log("MyToken Contract Address:", deployedMyTokenContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
