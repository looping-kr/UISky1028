# ganache-cli
```
$ node_modules/.bin/ganache-cli
```
```
Ganache CLI v6.1.8 (ganache-core: 2.2.1)

Available Accounts
==================
(0) 0xbfb75335967729adb7d96435eea42c97e029e9fb (~100 ETH)
(1) 0xc0b37d61916b4b5246fd48f58eb2a611ccc430e1 (~100 ETH)
(2) 0x9582a93ce01f1d71cfa89437fcaf5765c0dc8b30 (~100 ETH)
(3) 0xc54cd639f7f1e6da5aee617afff211e2899e80c0 (~100 ETH)
(4) 0x77234ca15c88c75870222319e15bb50056d8e2ef (~100 ETH)
(5) 0x035a151adbb32ffb15e15c71d7d245291fd39031 (~100 ETH)
(6) 0xe46ec76e628ad2a9b5073ac1ba3a60da5f81e890 (~100 ETH)
(7) 0x71fc7a8f4e548fe7273f19571ec60ded140cb6f3 (~100 ETH)
(8) 0x8c75d32b60497ebb2332358cd3537ffffe509207 (~100 ETH)
(9) 0xb101101375c361b0e7099b2d7de2f23fb4a02408 (~100 ETH)

Private Keys
==================
(0) 0x948e88893d1d5634c1cf3768f978250577113d8d8dd68c7e1997e70de8299927
(1) 0x2e09d6b5f33588856fac72f5b7c6263e83337777a782aef6493503e946256fb0
(2) 0x2eb07f1c8a75106f36046f14ef8e04cbf8de7324e2dea19de8e03e4d28d36a69
(3) 0x6f600e2aad1e1ad3660d619d0aa2fa6cffb403e8798a3fcf7e58f9dff19796e7
(4) 0x07a6930241ce0d3445e1e5a18d75ab7ad4fec50fbc9956003e2f0d20d3d2da18
(5) 0x4d79b62e6bf95a1611b7114153f89ba35d72183485dc7c23016deb4d65f2a0ac
(6) 0xc0a445fbb1185c06bd874a6ef7e572a0f85167e649c2f8495ea32ea2e36c6923
(7) 0xd83a0399f80d0abecf45fdd8fd69e183ea413a97497419b464c8b1aa24b856cf
(8) 0xa9b61fe654b2c730d13f69b2f10b5606aa22569759393e2b8d2fd0c366038996
(9) 0x0c0c0c98d3e416c867f267408a30c9d07d7b364230838500163ce5352c8598c6

HD Wallet
==================
Mnemonic:      fit night rough funny canvas fee only about sunset crystal diet sleep
Base HD Path:  m/44'/60'/0'/0/{account_index}

Gas Price
==================
20000000000

Gas Limit
==================
6721975

Listening on 127.0.0.1:8545
```


# Node.js
```
$ node
```

* Reading Voting SmartContract from File System 
```
> code = fs.readFileSync('Voting.sol').toString()
```

'pragma solidity ^0.4.23;\n\ncontract Voting {\n\t// Constructor to initialize candidates\n\t// vote for candidates\n\t// get count of votes for each candidates\n\n\tbytes32[] public candidateList;\n\tmapping (bytes32 => uint8) votesReceived;\n\t\n\tconstructor(bytes32[] candidateNames) {\n\t\tcandidateList = candidateNames;\n\t}\n\n\tfunction voteForCandidate(bytes32 candidate) public {\n\t\trequire(validCandidate(candidate));\n\t\tvotesReceived[candidate] += 1;\t\n\t}\n\n\tfunction totalVotesFor(bytes32 candidate) public returns(uint8) {\n\t\trequire(validCandidate(candidate));\n\t\treturn votesReceived[candidate];\t\n\t}\n\n\tfunction validCandidate(bytes32 candidate) view public returns(bool) {\n\t\tfor (uint i = 0; i < candidateList.length; i++) {\n\t\t\tif (candidateList[i] == candidate) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n}\n'

* Getting Solidity Complier
```
> solc = require('solc')
{ version: [Function],
  semver: [Function: versionToSemver],
  license: [Function],
  compile: [Function: compile],
  compileStandard: [Function: compileStandard],
  compileStandardWrapper: [Function: compileStandardWrapper],
  linkBytecode: [Function: linkBytecode],
  supportsMulti: true,
  supportsImportCallback: true,
  supportsStandard: true,
  loadRemoteVersion: [Function: loadRemoteVersion],
  setupMethods: [Function: setupMethods] }
```

* compile code
```
> compiledCode = solc.compile(code)
{ contracts:
   { ':Voting':
      { assembly: [Object],
        bytecode: '608060405234801561001057600080fd5b5060405161039d38038061039d833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b50506100c8565b828054828255906000526020600020908101928215610092579160200282015b82811115610091578251829060001916905591602001919060010190610070565b5b50905061009f91906100a3565b5090565b6100c591905b808211156100c15760008160009055506001016100a9565b5090565b90565b6102c6806100d76000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610067578063392e6678146100b2578063b13c744b146100fb578063cc9ab26714610144575b600080fd5b34801561007357600080fd5b506100966004803603810190808035600019169060200190929190505050610175565b604051808260ff1660ff16815260200191505060405180910390f35b3480156100be57600080fd5b506100e160048036038101908080356000191690602001909291905050506101bb565b604051808215151515815260200191505060405180910390f35b34801561010757600080fd5b506101266004803603810190808035906020019092919050505061021a565b60405180826000191660001916815260200191505060405180910390f35b34801561015057600080fd5b50610173600480360381019080803560001916906020019092919050505061023d565b005b6000610180826101bb565b151561018b57600080fd5b60016000836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b60008054905081101561020f5782600019166000828154811015156101e457fe5b90600052602060002001546000191614156102025760019150610214565b80806001019150506101c3565b600091505b50919050565b60008181548110151561022957fe5b906000526020600020016000915090505481565b610246816101bb565b151561025157600080fd5b6001806000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff160217905550505600a165627a7a72305820b3de8ad44785e7a5b1fe69c74aef7ec267948d3adf5b865c025dc80ca73431d20029',
        functionHashes: [Object],
        gasEstimates: [Object],
        interface: '[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
        metadata: '{"compiler":{"version":"0.4.25+commit.59dbf8f1"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"Voting"},"evmVersion":"byzantium","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0xe5e21a87611d3bec848653f4662194c2ebded7d4d494aff81af8fc400f360efb","urls":["bzzr://10b6bf93022cbe1f73e13830a7a4ec92152460bd46648105a8faa15fa69d4270"]}},"version":1}',
        opcodes: 'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x39D CODESIZE SUB DUP1 PUSH2 0x39D DUP4 CODECOPY DUP2 ADD DUP1 PUSH1 0x40 MSTORE DUP2 ADD SWAP1 DUP1 DUP1 MLOAD DUP3 ADD SWAP3 SWAP2 SWAP1 POP POP POP DUP1 PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x49 SWAP3 SWAP2 SWAP1 PUSH2 0x50 JUMP JUMPDEST POP POP PUSH2 0xC8 JUMP JUMPDEST DUP3 DUP1 SLOAD DUP3 DUP3 SSTORE SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP3 DUP3 ISZERO PUSH2 0x92 JUMPI SWAP2 PUSH1 0x20 MUL DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x91 JUMPI DUP3 MLOAD DUP3 SWAP1 PUSH1 0x0 NOT AND SWAP1 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x70 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x9F SWAP2 SWAP1 PUSH2 0xA3 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0xC5 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xC1 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0xA9 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x2C6 DUP1 PUSH2 0xD7 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x62 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x2F265CF7 EQ PUSH2 0x67 JUMPI DUP1 PUSH4 0x392E6678 EQ PUSH2 0xB2 JUMPI DUP1 PUSH4 0xB13C744B EQ PUSH2 0xFB JUMPI DUP1 PUSH4 0xCC9AB267 EQ PUSH2 0x144 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x73 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x96 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH1 0x0 NOT AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x175 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0xFF AND PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xBE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE1 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH1 0x0 NOT AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x1BB JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x107 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x126 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x21A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0x0 NOT AND PUSH1 0x0 NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x150 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x173 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH1 0x0 NOT AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x23D JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH2 0x180 DUP3 PUSH2 0x1BB JUMP JUMPDEST ISZERO ISZERO PUSH2 0x18B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP4 PUSH1 0x0 NOT AND PUSH1 0x0 NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 POP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP DUP2 LT ISZERO PUSH2 0x20F JUMPI DUP3 PUSH1 0x0 NOT AND PUSH1 0x0 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x1E4 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD SLOAD PUSH1 0x0 NOT AND EQ ISZERO PUSH2 0x202 JUMPI PUSH1 0x1 SWAP2 POP PUSH2 0x214 JUMP JUMPDEST DUP1 DUP1 PUSH1 0x1 ADD SWAP2 POP POP PUSH2 0x1C3 JUMP JUMPDEST PUSH1 0x0 SWAP2 POP JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x229 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH2 0x246 DUP2 PUSH2 0x1BB JUMP JUMPDEST ISZERO ISZERO PUSH2 0x251 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 DUP1 PUSH1 0x0 DUP4 PUSH1 0x0 NOT AND PUSH1 0x0 NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 DUP3 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ADD SWAP3 POP PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xb3 0xde DUP11 0xd4 0x47 DUP6 0xe7 0xa5 0xb1 INVALID PUSH10 0xC74AEF7EC267948D3ADF JUMPDEST DUP7 0x5c MUL 0x5d 0xc8 0xc 0xa7 CALLVALUE BALANCE 0xd2 STOP 0x29 ',
        runtimeBytecode: '608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610067578063392e6678146100b2578063b13c744b146100fb578063cc9ab26714610144575b600080fd5b34801561007357600080fd5b506100966004803603810190808035600019169060200190929190505050610175565b604051808260ff1660ff16815260200191505060405180910390f35b3480156100be57600080fd5b506100e160048036038101908080356000191690602001909291905050506101bb565b604051808215151515815260200191505060405180910390f35b34801561010757600080fd5b506101266004803603810190808035906020019092919050505061021a565b60405180826000191660001916815260200191505060405180910390f35b34801561015057600080fd5b50610173600480360381019080803560001916906020019092919050505061023d565b005b6000610180826101bb565b151561018b57600080fd5b60016000836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b60008054905081101561020f5782600019166000828154811015156101e457fe5b90600052602060002001546000191614156102025760019150610214565b80806001019150506101c3565b600091505b50919050565b60008181548110151561022957fe5b906000526020600020016000915090505481565b610246816101bb565b151561025157600080fd5b6001806000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff160217905550505600a165627a7a72305820b3de8ad44785e7a5b1fe69c74aef7ec267948d3adf5b865c025dc80ca73431d20029',
        srcmap: '26:770:0:-;;;232:76;8:9:-1;5:2;;;30:1;27;20:12;5:2;232:76:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;290:14;274:13;:30;;;;;;;;;;;;:::i;:::-;;232:76;26:770;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
        srcmapRuntime: '26:770:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;442:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;442:142:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;587:207;;8:9:-1;5:2;;;30:1;27;20:12;5:2;587:207:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;154:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;154:30:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;311:128;;8:9:-1;5:2;;;30:1;27;20:12;5:2;311:128:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;442:142;499:5;518:25;533:9;518:14;:25::i;:::-;510:34;;;;;;;;555:13;:24;569:9;555:24;;;;;;;;;;;;;;;;;;;;;;;;;;;548:31;;442:142;;;:::o;587:207::-;650:4;665:6;674:1;665:10;;660:115;681:13;:20;;;;677:1;:24;660:115;;;737:9;717:29;;;:13;731:1;717:16;;;;;;;;;;;;;;;;;;:29;;;;713:58;;;761:4;754:11;;;;713:58;703:3;;;;;;;660:115;;;785:5;778:12;;587:207;;;;;:::o;154:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;311:128::-;375:25;390:9;375:14;:25::i;:::-;367:34;;;;;;;;433:1;405:13;:24;419:9;405:24;;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;311:128;:::o' } },
  errors:
   [ ':11:2: Warning: No visibility specified. Defaulting to "public". \n\tconstructor(bytes32[] candidateNames) {\n ^ (Relevant source part starts here and spans across multiple lines).\n',
     ':20:2: Warning: Function state mutability can be restricted to view\n\tfunction totalVotesFor(bytes32 candidate) public returns(uint8) {\n ^ (Relevant source part starts here and spans across multiple lines).\n' ],
  sourceList: [ '' ],
  sources: { '': { AST: [Object] } } }
```

* 
```
> Web3 = require('web3')
{ [Function: Web3]
  providers:
   { HttpProvider: [Function: HttpProvider],
     IpcProvider: [Function: IpcProvider] } }
```
* 
```
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
Web3 {
  _requestManager:
   RequestManager {
     provider:
      HttpProvider {
        host: 'http://localhost:8545',
        timeout: 0,
        user: undefined,
        password: undefined },
     polls: {},
     timeout: null },
  currentProvider:
   HttpProvider {
     host: 'http://localhost:8545',
     timeout: 0,
     user: undefined,
     password: undefined },
  eth:
   Eth {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     getBalance: { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
     getStorageAt: { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
     getCode: { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
     getBlock: { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
     getUncle: { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
     getCompilers: { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
     getBlockTransactionCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: getBlockTransactionCountCall] },
     getBlockUncleCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: uncleCountCall] },
     getTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionByHash' },
     getTransactionFromBlock:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: transactionFromBlockCall] },
     getTransactionReceipt:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionReceipt' },
     getTransactionCount: { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
     call: { [Function: send] request: [Function: bound ], call: 'eth_call' },
     estimateGas: { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
     sendRawTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
     signTransaction: { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
     sendTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
     sign: { [Function: send] request: [Function: bound ], call: 'eth_sign' },
     compile: { solidity: [Object], lll: [Object], serpent: [Object] },
     submitWork: { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
     getWork: { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
     coinbase: [Getter],
     getCoinbase: { [Function: get] request: [Function: bound ] },
     mining: [Getter],
     getMining: { [Function: get] request: [Function: bound ] },
     hashrate: [Getter],
     getHashrate: { [Function: get] request: [Function: bound ] },
     syncing: [Getter],
     getSyncing: { [Function: get] request: [Function: bound ] },
     gasPrice: [Getter],
     getGasPrice: { [Function: get] request: [Function: bound ] },
     accounts: [Getter],
     getAccounts: { [Function: get] request: [Function: bound ] },
     blockNumber: [Getter],
     getBlockNumber: { [Function: get] request: [Function: bound ] },
     protocolVersion: [Getter],
     getProtocolVersion: { [Function: get] request: [Function: bound ] },
     iban:
      { [Function: Iban]
        fromAddress: [Function],
        fromBban: [Function],
        createIndirect: [Function],
        isValid: [Function] },
     sendIBANTransaction: [Function: bound transfer] },
  db:
   DB {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     putString: { [Function: send] request: [Function: bound ], call: 'db_putString' },
     getString: { [Function: send] request: [Function: bound ], call: 'db_getString' },
     putHex: { [Function: send] request: [Function: bound ], call: 'db_putHex' },
     getHex: { [Function: send] request: [Function: bound ], call: 'db_getHex' } },
  shh:
   Shh {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     version: { [Function: send] request: [Function: bound ], call: 'shh_version' },
     info: { [Function: send] request: [Function: bound ], call: 'shh_info' },
     setMaxMessageSize: { [Function: send] request: [Function: bound ], call: 'shh_setMaxMessageSize' },
     setMinPoW: { [Function: send] request: [Function: bound ], call: 'shh_setMinPoW' },
     markTrustedPeer: { [Function: send] request: [Function: bound ], call: 'shh_markTrustedPeer' },
     newKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_newKeyPair' },
     addPrivateKey: { [Function: send] request: [Function: bound ], call: 'shh_addPrivateKey' },
     deleteKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_deleteKeyPair' },
     hasKeyPair: { [Function: send] request: [Function: bound ], call: 'shh_hasKeyPair' },
     getPublicKey: { [Function: send] request: [Function: bound ], call: 'shh_getPublicKey' },
     getPrivateKey: { [Function: send] request: [Function: bound ], call: 'shh_getPrivateKey' },
     newSymKey: { [Function: send] request: [Function: bound ], call: 'shh_newSymKey' },
     addSymKey: { [Function: send] request: [Function: bound ], call: 'shh_addSymKey' },
     generateSymKeyFromPassword:
      { [Function: send]
        request: [Function: bound ],
        call: 'shh_generateSymKeyFromPassword' },
     hasSymKey: { [Function: send] request: [Function: bound ], call: 'shh_hasSymKey' },
     getSymKey: { [Function: send] request: [Function: bound ], call: 'shh_getSymKey' },
     deleteSymKey: { [Function: send] request: [Function: bound ], call: 'shh_deleteSymKey' },
     post: { [Function: send] request: [Function: bound ], call: 'shh_post' } },
  net:
   Net {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     listening: [Getter],
     getListening: { [Function: get] request: [Function: bound ] },
     peerCount: [Getter],
     getPeerCount: { [Function: get] request: [Function: bound ] } },
  personal:
   Personal {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     newAccount: { [Function: send] request: [Function: bound ], call: 'personal_newAccount' },
     importRawKey: { [Function: send] request: [Function: bound ], call: 'personal_importRawKey' },
     unlockAccount: { [Function: send] request: [Function: bound ], call: 'personal_unlockAccount' },
     ecRecover: { [Function: send] request: [Function: bound ], call: 'personal_ecRecover' },
     sign: { [Function: send] request: [Function: bound ], call: 'personal_sign' },
     sendTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'personal_sendTransaction' },
     lockAccount: { [Function: send] request: [Function: bound ], call: 'personal_lockAccount' },
     listAccounts: [Getter],
     getListAccounts: { [Function: get] request: [Function: bound ] } },
  bzz:
   Swarm {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     blockNetworkRead: { [Function: send] request: [Function: bound ], call: 'bzz_blockNetworkRead' },
     syncEnabled: { [Function: send] request: [Function: bound ], call: 'bzz_syncEnabled' },
     swapEnabled: { [Function: send] request: [Function: bound ], call: 'bzz_swapEnabled' },
     download: { [Function: send] request: [Function: bound ], call: 'bzz_download' },
     upload: { [Function: send] request: [Function: bound ], call: 'bzz_upload' },
     retrieve: { [Function: send] request: [Function: bound ], call: 'bzz_retrieve' },
     store: { [Function: send] request: [Function: bound ], call: 'bzz_store' },
     get: { [Function: send] request: [Function: bound ], call: 'bzz_get' },
     put: { [Function: send] request: [Function: bound ], call: 'bzz_put' },
     modify: { [Function: send] request: [Function: bound ], call: 'bzz_modify' },
     hive: [Getter],
     getHive: { [Function: get] request: [Function: bound ] },
     info: [Getter],
     getInfo: { [Function: get] request: [Function: bound ] } },
  settings: Settings { defaultBlock: 'latest', defaultAccount: undefined },
  version:
   { api: '0.20.1',
     node: [Getter],
     getNode: { [Function: get] request: [Function: bound ] },
     network: [Getter],
     getNetwork: { [Function: get] request: [Function: bound ] },
     ethereum: [Getter],
     getEthereum: { [Function: get] request: [Function: bound ] },
     whisper: [Getter],
     getWhisper: { [Function: get] request: [Function: bound ] } },
  providers:
   { HttpProvider: [Function: HttpProvider],
     IpcProvider: [Function: IpcProvider] },
  _extend:
   { [Function: ex]
     formatters:
      { inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
        inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
        inputCallFormatter: [Function: inputCallFormatter],
        inputTransactionFormatter: [Function: inputTransactionFormatter],
        inputAddressFormatter: [Function: inputAddressFormatter],
        inputPostFormatter: [Function: inputPostFormatter],
        outputBigNumberFormatter: [Function: outputBigNumberFormatter],
        outputTransactionFormatter: [Function: outputTransactionFormatter],
        outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
        outputBlockFormatter: [Function: outputBlockFormatter],
        outputLogFormatter: [Function: outputLogFormatter],
        outputPostFormatter: [Function: outputPostFormatter],
        outputSyncingFormatter: [Function: outputSyncingFormatter] },
     utils:
      { padLeft: [Function: padLeft],
        padRight: [Function: padRight],
        toHex: [Function: toHex],
        toDecimal: [Function: toDecimal],
        fromDecimal: [Function: fromDecimal],
        toUtf8: [Function: toUtf8],
        toAscii: [Function: toAscii],
        fromUtf8: [Function: fromUtf8],
        fromAscii: [Function: fromAscii],
        transformToFullName: [Function: transformToFullName],
        extractDisplayName: [Function: extractDisplayName],
        extractTypeName: [Function: extractTypeName],
        toWei: [Function: toWei],
        fromWei: [Function: fromWei],
        toBigNumber: [Function: toBigNumber],
        toTwosComplement: [Function: toTwosComplement],
        toAddress: [Function: toAddress],
        isBigNumber: [Function: isBigNumber],
        isStrictAddress: [Function: isStrictAddress],
        isAddress: [Function: isAddress],
        isChecksumAddress: [Function: isChecksumAddress],
        toChecksumAddress: [Function: toChecksumAddress],
        isFunction: [Function: isFunction],
        isString: [Function: isString],
        isObject: [Function: isObject],
        isBoolean: [Function: isBoolean],
        isArray: [Function: isArray],
        isJson: [Function: isJson],
        isBloom: [Function: isBloom],
        isTopic: [Function: isTopic] },
     Method: [Function: Method],
     Property: [Function: Property] } }
```
* 
```
> abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
[ { constant: false,
    inputs: [ [Object] ],
    name: 'totalVotesFor',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'validCandidate',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'candidateList',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'voteForCandidate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { inputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor' } ]
```
* 
```
> VotingContract = web3.eth.contract(abiDefinition)
ContractFactory {
  eth:
   Eth {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     getBalance: { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
     getStorageAt: { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
     getCode: { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
     getBlock: { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
     getUncle: { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
     getCompilers: { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
     getBlockTransactionCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: getBlockTransactionCountCall] },
     getBlockUncleCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: uncleCountCall] },
     getTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionByHash' },
     getTransactionFromBlock:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: transactionFromBlockCall] },
     getTransactionReceipt:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionReceipt' },
     getTransactionCount: { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
     call: { [Function: send] request: [Function: bound ], call: 'eth_call' },
     estimateGas: { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
     sendRawTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
     signTransaction: { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
     sendTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
     sign: { [Function: send] request: [Function: bound ], call: 'eth_sign' },
     compile: { solidity: [Object], lll: [Object], serpent: [Object] },
     submitWork: { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
     getWork: { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
     coinbase: [Getter],
     getCoinbase: { [Function: get] request: [Function: bound ] },
     mining: [Getter],
     getMining: { [Function: get] request: [Function: bound ] },
     hashrate: [Getter],
     getHashrate: { [Function: get] request: [Function: bound ] },
     syncing: [Getter],
     getSyncing: { [Function: get] request: [Function: bound ] },
     gasPrice: [Getter],
     getGasPrice: { [Function: get] request: [Function: bound ] },
     accounts: [Getter],
     getAccounts: { [Function: get] request: [Function: bound ] },
     blockNumber: [Getter],
     getBlockNumber: { [Function: get] request: [Function: bound ] },
     protocolVersion: [Getter],
     getProtocolVersion: { [Function: get] request: [Function: bound ] },
     iban:
      { [Function: Iban]
        fromAddress: [Function],
        fromBban: [Function],
        createIndirect: [Function],
        isValid: [Function] },
     sendIBANTransaction: [Function: bound transfer] },
  abi:
   [ { constant: false,
       inputs: [Array],
       name: 'totalVotesFor',
       outputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [Array],
       name: 'validCandidate',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: true,
       inputs: [Array],
       name: 'candidateList',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: false,
       inputs: [Array],
       name: 'voteForCandidate',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { inputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor' } ],
  new: { [Function] getData: [Function: bound ] } }
```
* 
```
> byteCode = compiledCode.contracts[':Voting'].bytecode
'608060405234801561001057600080fd5b5060405161039d38038061039d833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b50506100c8565b828054828255906000526020600020908101928215610092579160200282015b82811115610091578251829060001916905591602001919060010190610070565b5b50905061009f91906100a3565b5090565b6100c591905b808211156100c15760008160009055506001016100a9565b5090565b90565b6102c6806100d76000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610067578063392e6678146100b2578063b13c744b146100fb578063cc9ab26714610144575b600080fd5b34801561007357600080fd5b506100966004803603810190808035600019169060200190929190505050610175565b604051808260ff1660ff16815260200191505060405180910390f35b3480156100be57600080fd5b506100e160048036038101908080356000191690602001909291905050506101bb565b604051808215151515815260200191505060405180910390f35b34801561010757600080fd5b506101266004803603810190808035906020019092919050505061021a565b60405180826000191660001916815260200191505060405180910390f35b34801561015057600080fd5b50610173600480360381019080803560001916906020019092919050505061023d565b005b6000610180826101bb565b151561018b57600080fd5b60016000836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b60008054905081101561020f5782600019166000828154811015156101e457fe5b90600052602060002001546000191614156102025760019150610214565b80806001019150506101c3565b600091505b50919050565b60008181548110151561022957fe5b906000526020600020016000915090505481565b610246816101bb565b151561025157600080fd5b6001806000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff160217905550505600a165627a7a72305820b3de8ad44785e7a5b1fe69c74aef7ec267948d3adf5b865c025dc80ca73431d20029'
```
* 
```
> deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
Contract {
  _eth:
   Eth {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     getBalance: { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
     getStorageAt: { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
     getCode: { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
     getBlock: { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
     getUncle: { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
     getCompilers: { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
     getBlockTransactionCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: getBlockTransactionCountCall] },
     getBlockUncleCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: uncleCountCall] },
     getTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionByHash' },
     getTransactionFromBlock:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: transactionFromBlockCall] },
     getTransactionReceipt:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionReceipt' },
     getTransactionCount: { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
     call: { [Function: send] request: [Function: bound ], call: 'eth_call' },
     estimateGas: { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
     sendRawTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
     signTransaction: { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
     sendTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
     sign: { [Function: send] request: [Function: bound ], call: 'eth_sign' },
     compile: { solidity: [Object], lll: [Object], serpent: [Object] },
     submitWork: { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
     getWork: { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
     coinbase: [Getter],
     getCoinbase: { [Function: get] request: [Function: bound ] },
     mining: [Getter],
     getMining: { [Function: get] request: [Function: bound ] },
     hashrate: [Getter],
     getHashrate: { [Function: get] request: [Function: bound ] },
     syncing: [Getter],
     getSyncing: { [Function: get] request: [Function: bound ] },
     gasPrice: [Getter],
     getGasPrice: { [Function: get] request: [Function: bound ] },
     accounts: [Getter],
     getAccounts: { [Function: get] request: [Function: bound ] },
     blockNumber: [Getter],
     getBlockNumber: { [Function: get] request: [Function: bound ] },
     protocolVersion: [Getter],
     getProtocolVersion: { [Function: get] request: [Function: bound ] },
     iban:
      { [Function: Iban]
        fromAddress: [Function],
        fromBban: [Function],
        createIndirect: [Function],
        isValid: [Function] },
     sendIBANTransaction: [Function: bound transfer] },
  transactionHash: '0x8cb62c77a5479894d17e5928b21dacbfeabfb6555328af6bf14917c8c18cfe82',
  address: undefined,
  abi:
   [ { constant: false,
       inputs: [Array],
       name: 'totalVotesFor',
       outputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [Array],
       name: 'validCandidate',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: true,
       inputs: [Array],
       name: 'candidateList',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: false,
       inputs: [Array],
       name: 'voteForCandidate',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { inputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor' } ] }
```
* 
```
> deployedContract.address
'0x018c7aed23a6e89f0528a7d0bf9f77c12377a939'
```
* 
```
> deployedContract.totalVotesFor.call('Rama')
BigNumber { s: 1, e: 0, c: [ 0 ] }
```
* 
```
> deployedContract.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
```
* 
```
> deployedContract.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
```
* 
```
> deployedContract.totalVotesFor.call('Rama').toLocaleString()
```
