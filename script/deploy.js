const hre = require("hardhat");
//console.log(hre);
async function main(){
    const currentTimestampInSeconds = Math.round(Date.now()/1000);
    const ONE_YEARS_IN_SECONDS = 365*24*3600;
    const unlockTime = currentTimestampInSeconds + ONE_YEARS_IN_SECONDS; // This means the unlock time is after one year or contract being deployed.

    const lockedAmount = hre.ethers.utils.parseEther("1");

    console.log(currentTimestampInSeconds);
    console.log(ONE_YEARS_IN_SECONDS);
    console.log(unlockTime);
    console.log(lockedAmount);

    const myTest  = await hre.ethers.getContractFactory("myTest");
    const my_test = await myTest.deploy(
        unlockTime,
        {
            value: lockedAmount
        }
    );
    await my_test.deployed();
    console.log(
        `Contract contain 1 ETH & address: ${my_test.address}`
    );
    console.log(my_test);
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})