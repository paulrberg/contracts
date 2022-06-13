/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Normalizer,
  ERC20NormalizerInterface,
} from "../../../token/erc20/ERC20Normalizer";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "IERC20Normalizer__TokenDecimalsGreaterThan18",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "IERC20Normalizer__TokenDecimalsZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "computeScalar",
    outputs: [
      {
        internalType: "uint256",
        name: "scalar",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "denormalize",
    outputs: [
      {
        internalType: "uint256",
        name: "denormalizedAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "getScalar",
    outputs: [
      {
        internalType: "uint256",
        name: "scalar",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "normalize",
    outputs: [
      {
        internalType: "uint256",
        name: "normalizedAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610339806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063679fb287146100515780639d00cd9414610076578063a997ea3814610089578063b38e0fc4146100b2575b600080fd5b61006461005f36600461027a565b6100c5565b60405190815260200160405180910390f35b6100646100843660046102a4565b610112565b6100646100973660046102a4565b6001600160a01b031660009081526020819052604090205490565b6100646100c036600461027a565b61020b565b6001600160a01b038216600090815260208190526040812054806000036100f2576100ef84610112565b90505b80600103610100578261010a565b61010a81846102c6565b949350505050565b600080826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610153573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061017791906102f3565b60ff169050806000036101ad5760405163fe3c012960e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60128111156101e1576040516396434c7f60e01b81526001600160a01b0384166004820152602481018290526044016101a4565b6001600160a01b039092166000908152602081905260409020601292909203600a0a918290555090565b6001600160a01b038216600090815260208190526040812054806000036102385761023584610112565b90505b80600103610246578261010a565b80838161025557610255610316565b04949350505050565b80356001600160a01b038116811461027557600080fd5b919050565b6000806040838503121561028d57600080fd5b6102968361025e565b946020939093013593505050565b6000602082840312156102b657600080fd5b6102bf8261025e565b9392505050565b60008160001904831182151516156102ee57634e487b7160e01b600052601160045260246000fd5b500290565b60006020828403121561030557600080fd5b815160ff811681146102bf57600080fd5b634e487b7160e01b600052601260045260246000fdfea164736f6c634300080e000a";

type ERC20NormalizerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20NormalizerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Normalizer__factory extends ContractFactory {
  constructor(...args: ERC20NormalizerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Normalizer> {
    return super.deploy(overrides || {}) as Promise<ERC20Normalizer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Normalizer {
    return super.attach(address) as ERC20Normalizer;
  }
  override connect(signer: Signer): ERC20Normalizer__factory {
    return super.connect(signer) as ERC20Normalizer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20NormalizerInterface {
    return new utils.Interface(_abi) as ERC20NormalizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Normalizer {
    return new Contract(address, _abi, signerOrProvider) as ERC20Normalizer;
  }
}