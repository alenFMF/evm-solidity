import { ethers } from "hardhat";

const { expect } = require("chai");

describe("Glasovanje", () => {
  it("Should test various functionalities for Glasovanje contract", async function () {
    let racuni = await ethers.getSigners();
    const Glasovanje = await ethers.getContractFactory("Glasovanje", racuni[0]);
    let predlogi = ["Prvi", "Drugi", "Tretji", "Četrti"].map(ime => ethers.utils.formatBytes32String(ime))
    const glasovanje = await Glasovanje.deploy(predlogi);

    await glasovanje.deployed();

    // Preverimo vodjo
    expect(await glasovanje.chairperson()).to.equal(racuni[0].address);

    // Preverimo, da 1-10 še ne morejo glasovati
    for (let i = 1; i <= 10; i++) {
      expect((await glasovanje.voters(racuni[i].address)).weight).to.equal(0);
    }

    // Omogočanje glasovanja računom 1-10
    for (let i = 1; i <= 10; i++) {
      glasovanje.giveRightToVote(racuni[i].address);
    }

    // Preverjanje uteži glasovanja omogočenim
    for (let i = 1; i <= 10; i++) {
      expect((await glasovanje.voters(racuni[i].address)).weight).to.equal(1);
    }

    // Delegacije
    // 1 -> 2 -> 3
    // 4 -> 5
    // 7 -> 10
    // 8 -> 10
    await glasovanje.connect(racuni[1]).delegate(racuni[2].address);
    await glasovanje.connect(racuni[2]).delegate(racuni[3].address);
    await glasovanje.connect(racuni[4]).delegate(racuni[5].address);
    await glasovanje.connect(racuni[7]).delegate(racuni[10].address);
    await glasovanje.connect(racuni[8]).delegate(racuni[10].address);

    // Testiranje uteži in zmožnost glasovanja po delegaciji
    expect((await glasovanje.voters(racuni[1].address)).voted).to.equal(true);
    expect((await glasovanje.voters(racuni[2].address)).voted).to.equal(true);
    expect((await glasovanje.voters(racuni[3].address)).voted).to.equal(false);
    expect((await glasovanje.voters(racuni[3].address)).weight).to.equal(3);
    expect((await glasovanje.voters(racuni[4].address)).voted).to.equal(true);
    expect((await glasovanje.voters(racuni[5].address)).weight).to.equal(2);
    expect((await glasovanje.voters(racuni[6].address)).voted).to.equal(false);
    expect((await glasovanje.voters(racuni[7].address)).voted).to.equal(true);
    expect((await glasovanje.voters(racuni[8].address)).voted).to.equal(true);
    expect((await glasovanje.voters(racuni[9].address)).voted).to.equal(false);
    expect((await glasovanje.voters(racuni[10].address)).weight).to.equal(3);

    
    // Vsi glasujejo, pri nekaterih se izvrže izjema
    await expect(glasovanje.connect(racuni[1]).vote(0)).to.be.reverted;
    await expect(glasovanje.connect(racuni[2]).vote(0)).to.be.reverted;
    await glasovanje.connect(racuni[3]).vote(2); // Tretji
    await expect(glasovanje.connect(racuni[4]).vote(0)).to.be.reverted;
    await glasovanje.connect(racuni[5]).vote(0);
    await glasovanje.connect(racuni[6]).vote(1)
    await expect(glasovanje.connect(racuni[7]).vote(1)).to.be.reverted;
    await expect(glasovanje.connect(racuni[8]).vote(1)).to.be.reverted;
    await glasovanje.connect(racuni[9]).vote(3);
    await glasovanje.connect(racuni[10]).vote(2)  // Tretji + 3
    
    // Preverimo zmagovalca
    expect(ethers.utils.parseBytes32String(await glasovanje.winnerName())).to.equal("Tretji")

    // Test porazdelitve glasov
    expect((await glasovanje.proposals(0)).voteCount).to.equal(2)
    expect((await glasovanje.proposals(1)).voteCount).to.equal(1)
    expect((await glasovanje.proposals(2)).voteCount).to.equal(6)
    expect((await glasovanje.proposals(3)).voteCount).to.equal(1)
  });
});
