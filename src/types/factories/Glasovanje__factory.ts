/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Glasovanje, GlasovanjeInterface } from "../Glasovanje";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "chairperson",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "giveRightToVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109e83803806109e88339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825186602082028301116401000000008211171561008557600080fd5b82525081516020918201928201910280838360005b838110156100b257818101518382015260200161009a565b50505050919091016040908152600080546001600160a01b03191633178082556001600160a01b03168152600160208190529181209190915593505050505b8151811015610153576002604051806040016040528084848151811061011357fe5b60209081029190910181015182526000918101829052835460018181018655948352918190208351600290930201918255919091015190820155016100f1565b5050610884806101646000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063609ff1bd1161005b578063609ff1bd146101465780639e7b8d6114610160578063a3ec138d14610193578063e2ba53f01461020157610088565b80630121b93f1461008d578063013cf08b146100ac5780632e4176cf146100e25780635c19a95c14610113575b600080fd5b6100aa600480360360208110156100a357600080fd5b5035610209565b005b6100c9600480360360208110156100c257600080fd5b50356102f3565b6040805192835260208301919091528051918290030190f35b6100ea610321565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100aa6004803603602081101561012957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661033d565b61014e6105ee565b60408051918252519081900360200190f35b6100aa6004803603602081101561017657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610655565b6101c6600480360360208110156101a957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107b8565b60408051948552921515602085015273ffffffffffffffffffffffffffffffffffffffff909116838301526060830152519081900360800190f35b61014e6107f9565b3360009081526001602081905260409091209081015460ff161561028e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f416c726561647920766f7465642e000000000000000000000000000000000000604482015290519081900360640190fd5b600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055600280820183905581548154909190849081106102d557fe5b60009182526020909120600160029092020101805490910190555050565b6002818154811061030357600080fd5b60009182526020909120600290910201805460019091015490915082565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b3360009081526001602081905260409091209081015460ff16156103c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f596f7520616c726561647920766f7465642e0000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821633141561044757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f53656c662d64656c65676174696f6e20697320646973616c6c6f7765642e0000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82811660009081526001602081905260409091200154610100900416156105255773ffffffffffffffffffffffffffffffffffffffff918216600090815260016020819052604090912001546101009004909116903382141561052057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f466f756e64206c6f6f7020696e2064656c65676174696f6e2e00000000000000604482015290519081900360640190fd5b610447565b600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682177fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff86169081029190911790915560009081526020829052604090209081015460ff16156105e1578154600282810154815481106105c257fe5b60009182526020909120600160029092020101805490910190556105e9565b815481540181555b505050565b600080805b60025481101561065057816002828154811061060b57fe5b9060005260206000209060020201600101541115610648576002818154811061063057fe5b90600052602060002090600202016001015491508092505b6001016105f3565b505090565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806108276028913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160208190526040909120015460ff161561075e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f54686520766f74657220616c726561647920766f7465642e0000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160205260409020541561078e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912055565b600160208190526000918252604090912080549181015460029091015460ff821691610100900473ffffffffffffffffffffffffffffffffffffffff169084565b600060026108056105ee565b8154811061080f57fe5b90600052602060002090600202016000015490509056fe4f6e6c79206368616972706572736f6e2063616e206769766520726967687420746f20766f74652ea2646970667358221220aed17d805149f2c594184ca6b4f6feffbebf65d015e80bba6d22e3e3dbccb50264736f6c63430007060033";

export class Glasovanje__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    proposalNames: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Glasovanje> {
    return super.deploy(proposalNames, overrides || {}) as Promise<Glasovanje>;
  }
  getDeployTransaction(
    proposalNames: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(proposalNames, overrides || {});
  }
  attach(address: string): Glasovanje {
    return super.attach(address) as Glasovanje;
  }
  connect(signer: Signer): Glasovanje__factory {
    return super.connect(signer) as Glasovanje__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GlasovanjeInterface {
    return new utils.Interface(_abi) as GlasovanjeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Glasovanje {
    return new Contract(address, _abi, signerOrProvider) as Glasovanje;
  }
}
