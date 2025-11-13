async function main() {
    const Hello = await ethers.getContractFactory("HelloHardhat");
    const hello = await Hello.deploy();
    await hello.deployed();
    console.log("Hello deployed to:", hello.address);
  }
  main().catch((err)=>{console.error(err); process.exit(1);});