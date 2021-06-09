import { ethers } from "hardhat";

const { expect } = require("chai");

describe("Sredko", () => {
  it("Should test various functionalities for Sredko token", async function() {
    let racuni = await ethers.getSigners();
    const Sredko = await ethers.getContractFactory("Sredko", racuni[0]);
    const sredko = await Sredko.deploy();    
    await sredko.deployed();

    let znesek = ethers.utils.parseEther("1");
    expect(await sredko.minter()).to.equal(racuni[0].address);

    let zacetnoStanje = await sredko.balances(racuni[1].address);
    expect(zacetnoStanje).to.equal(0);
    
    await sredko.mint(racuni[1].address, znesek);

    let stanjePoMintanju = await sredko.balances(racuni[1].address);
    
    expect(stanjePoMintanju).to.equal(zacetnoStanje.add(znesek));

    await expect(sredko.connect(racuni[1]).send(racuni[2].address, znesek))
      .to.emit(sredko, "Sent")
      .withArgs(racuni[1].address, racuni[2].address, znesek)

    let stanjePoPosiljanju = await sredko.balances(racuni[1].address);
    expect(stanjePoPosiljanju).to.equal(0);

    let stanjeRacuna2 = await sredko.balances(racuni[2].address);
    expect(stanjeRacuna2).to.equal(znesek);
  });
});
