# ganache-cli
```
$ node_modules/.bin/ganache-cli
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


# Node.js
```
$ node
```

* Reading Voting SmartContract from File System 
```
> code = fs.readFileSync('Voting.sol').toString()
```

* Getting Solidity Complier
```
> solc = require('solc')
```
'pragma solidity ^0.4.23;\n\ncontract Voting {\n\t// Constructor to initialize candidates\n\t// vote for candidates\n\t// get count of votes for each candidates\n\n\tbytes32[] public candidateList;\n\tmapping (bytes32 => uint8) votesReceived;\n\t\n\tconstructor(bytes32[] candidateNames) {\n\t\tcandidateList = candidateNames;\n\t}\n\n\tfunction voteForCandidate(bytes32 candidate) public {\n\t\trequire(validCandidate(candidate));\n\t\tvotesReceived[candidate] += 1;\t\n\t}\n\n\tfunction totalVotesFor(bytes32 candidate) public returns(uint8) {\n\t\trequire(validCandidate(candidate));\n\t\treturn votesReceived[candidate];\t\n\t}\n\n\tfunction validCandidate(bytes32 candidate) view public returns(bool) {\n\t\tfor (uint i = 0; i < candidateList.length; i++) {\n\t\t\tif (candidateList[i] == candidate) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n}\n'

* compile code
```
> compiledCode = solc.compile(code)
```


* 
```
> Web3 = require('web3')
```
* 
```
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
```
* 
```
> abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
```
* 
```
> VotingContract = web3.eth.contract(abiDefinition)
```
* 
```
> byteCode = compiledCode.contracts[':Voting'].bytecode
```
* 
```
> deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
```
* 
```
> deployedContract.address
```
* 
```
> deployedContract.totalVotesFor.call('Rama')
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
