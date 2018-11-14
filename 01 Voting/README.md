
* Truffle Setup
```
$ npm install -g truffle
```

```
$ mkdir -p Voting2
$ cd Voting2
```
```
$ truffle unbox webpack
Downloading...
Unpacking...
Setting up...
Unbox successful. Sweet!

Commands:

  Compile:              truffle compile
  Migrate:              truffle migrate
  Test contracts:       truffle test
  Run linter:           npm run lint
  Run dev server:       npm run dev
  Build for production: npm run build
  
$ ls
LICENSE  box-img-lg.png  build      migrations    package.json  truffle.js
app      box-img-sm.png  contracts  node_modules  test          webpack.config.js

$ ls app/
index.html javascripts stylesheets

$ ls contracts/
ConvertLib.sol MetaCoin.sol Migrations.sol

$ ls migrations/
1_initial_migration.js 2_deploy_contracts.js

$ rm contracts/ConvertLib.sol contracts/MetaCoin.sol
```
* Truffle Compile & Deploy
```
$ truffle compile
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/Voting.sol...

Compilation warnings encountered:

/home/looping/ethereum_voting_dapp/chapter2/contracts/Migrations.sol:11:3: Warning: Defining constructors as functions with the same name as the contract is deprecated. Use "constructor(...) { ... }" instead.
  function Migrations() public {
  ^ (Relevant source part starts here and spans across multiple lines).

Writing artifacts to ./build/contracts

$ ls -R ./build
./build:
contracts

./build/contracts:
Migrations.json  Voting.json
```
```
$ cat cat ./build/contracts/Migrations.json | more
{
  "contractName": "Migrations",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "last_completed_migration",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ], 
--More--
```
```
cat ./build/contracts/Voting.json | more
{
  "contractName": "Voting",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidateList",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "candidateNames",
          "type": "bytes32[]"
        }
      ],
--More--
```
```
$ truffle migrate --network ganache
Using network 'ganache'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x5cde955bbc462cfd51c112332793edbd707ca7f27b15557d11cce93b48d5aa67
  Migrations: 0xa7b2efd0651ededa0c83a7e49c796fc157feab3a
Saving successful migration to network...
  ... 0xbb947d73d16dec9478c9d2335c7b58a8f9503469783e0bcfe46c130bd52f0fc7
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying Voting...
  ... 0x2149c3969476eee04fd262e5e9b0cd74efa9f6ba1ea99d5a7e44c98754156a49
  Voting: 0xdbe992f002da245c633e622066deb3f2ff7eb1f2
Saving successful migration to network...
  ... 0xe61709e7b7a3093f255b8fdc97dba7c4ff7080a4bf097b14438538423cfa1470
Saving artifacts...
```

```
>>>>> ganache console

net_version
eth_accounts
eth_accounts
net_version
net_version
eth_sendTransaction

  Transaction: 0x5cde955bbc462cfd51c112332793edbd707ca7f27b15557d11cce93b48d5aa67
  Contract created: 0xa7b2efd0651ededa0c83a7e49c796fc157feab3a
  Gas usage: 277462
  Block Number: 1
  Block Time: Wed Nov 14 2018 20:27:36 GMT+0900 (DST)

eth_newBlockFilter
eth_getFilterChanges
eth_getTransactionReceipt
eth_getCode
eth_uninstallFilter
eth_sendTransaction

  Transaction: 0xbb947d73d16dec9478c9d2335c7b58a8f9503469783e0bcfe46c130bd52f0fc7
  Gas usage: 42008
  Block Number: 2
  Block Time: Wed Nov 14 2018 20:27:36 GMT+0900 (DST)

eth_getTransactionReceipt
eth_accounts
net_version
net_version
eth_sendTransaction

  Transaction: 0x2149c3969476eee04fd262e5e9b0cd74efa9f6ba1ea99d5a7e44c98754156a49
  Contract created: 0xdbe992f002da245c633e622066deb3f2ff7eb1f2
  Gas usage: 333958
  Block Number: 3
  Block Time: Wed Nov 14 2018 20:27:36 GMT+0900 (DST)

eth_newBlockFilter
eth_getFilterChanges
eth_getTransactionReceipt
eth_getCode
eth_uninstallFilter
eth_sendTransaction

  Transaction: 0xe61709e7b7a3093f255b8fdc97dba7c4ff7080a4bf097b14438538423cfa1470
  Gas usage: 27008
  Block Number: 4
  Block Time: Wed Nov 14 2018 20:27:37 GMT+0900 (DST)

eth_getTransactionReceipt
```
```
$ truffle console --network ganache
```
```
truffle(ganache)> Voting.deployed()
TruffleContract {
  constructor:
   { [Function: TruffleContract]
     _static_methods:
      { setProvider: [Function: setProvider],
        new: [Function: new],
        at: [Function: at],
        deployed: [Function: deployed],
        defaults: [Function: defaults],
        hasNetwork: [Function: hasNetwork],
        isDeployed: [Function: isDeployed],
        detectNetwork: [Function: detectNetwork],
        setNetwork: [Function: setNetwork],
        resetAddress: [Function: resetAddress],
        link: [Function: link],
        clone: [Function: clone],
        addProp: [Function: addProp],
        toJSON: [Function: toJSON] },
     _properties:
      { contract_name: [Object],
        contractName: [Object],
        abi: [Object],
        network: [Function: network],
        networks: [Function: networks],
        address: [Object],
        transactionHash: [Object],
        links: [Function: links],
        events: [Function: events],
        binary: [Function: binary],
        deployedBinary: [Function: deployedBinary],
        unlinked_binary: [Object],
        bytecode: [Object],
        deployedBytecode: [Object],
        sourceMap: [Object],
        deployedSourceMap: [Object],
        source: [Object],
        sourcePath: [Object],
        legacyAST: [Object],
        ast: [Object],
        compiler: [Object],
        schema_version: [Function: schema_version],
        schemaVersion: [Function: schemaVersion],
        updated_at: [Function: updated_at],
        updatedAt: [Function: updatedAt] },
     _property_values: {},
     _json:
      { contractName: 'Voting',
        abi: [Array],
        bytecode: '0x608060405234801561001057600080fd5b5060405161039d38038061039d833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b50506100c8565b828054828255906000526020600020908101928215610092579160200282015b82811115610091578251829060001916905591602001919060010190610070565b5b50905061009f91906100a3565b5090565b6100c591905b808211156100c15760008160009055506001016100a9565b5090565b90565b6102c6806100d76000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610067578063392e6678146100b2578063b13c744b146100fb578063cc9ab26714610144575b600080fd5b34801561007357600080fd5b506100966004803603810190808035600019169060200190929190505050610175565b604051808260ff1660ff16815260200191505060405180910390f35b3480156100be57600080fd5b506100e160048036038101908080356000191690602001909291905050506101bb565b604051808215151515815260200191505060405180910390f35b34801561010757600080fd5b506101266004803603810190808035906020019092919050505061021a565b60405180826000191660001916815260200191505060405180910390f35b34801561015057600080fd5b50610173600480360381019080803560001916906020019092919050505061023d565b005b6000610180826101bb565b151561018b57600080fd5b60016000836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b60008054905081101561020f5782600019166000828154811015156101e457fe5b90600052602060002001546000191614156102025760019150610214565b80806001019150506101c3565b600091505b50919050565b60008181548110151561022957fe5b906000526020600020016000915090505481565b610246816101bb565b151561025157600080fd5b6001806000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff160217905550505600a165627a7a723058202fbb879afea81f4489052e0b236d9265377de50508794128b56751bf2239a2d30029',
        deployedBytecode: '0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610067578063392e6678146100b2578063b13c744b146100fb578063cc9ab26714610144575b600080fd5b34801561007357600080fd5b506100966004803603810190808035600019169060200190929190505050610175565b604051808260ff1660ff16815260200191505060405180910390f35b3480156100be57600080fd5b506100e160048036038101908080356000191690602001909291905050506101bb565b604051808215151515815260200191505060405180910390f35b34801561010757600080fd5b506101266004803603810190808035906020019092919050505061021a565b60405180826000191660001916815260200191505060405180910390f35b34801561015057600080fd5b50610173600480360381019080803560001916906020019092919050505061023d565b005b6000610180826101bb565b151561018b57600080fd5b60016000836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b60008054905081101561020f5782600019166000828154811015156101e457fe5b90600052602060002001546000191614156102025760019150610214565b80806001019150506101c3565b600091505b50919050565b60008181548110151561022957fe5b906000526020600020016000915090505481565b610246816101bb565b151561025157600080fd5b6001806000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff160217905550505600a165627a7a723058202fbb879afea81f4489052e0b236d9265377de50508794128b56751bf2239a2d30029',
        sourceMap: '26:784:1:-;;;232:84;8:9:-1;5:2;;;30:1;27;20:12;5:2;232:84:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;298:14;282:13;:30;;;;;;;;;;;;:::i;:::-;;232:84;26:784;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
        deployedSourceMap: '26:784:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;450:148;;8:9:-1;5:2;;;30:1;27;20:12;5:2;450:148:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;601:207;;8:9:-1;5:2;;;30:1;27;20:12;5:2;601:207:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;154:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;154:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;319:128;;8:9:-1;5:2;;;30:1;27;20:12;5:2;319:128:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;450:148;513:5;532:25;547:9;532:14;:25::i;:::-;524:34;;;;;;;;569:13;:24;583:9;569:24;;;;;;;;;;;;;;;;;;;;;;;;;;;562:31;;450:148;;;:::o;601:207::-;664:4;679:6;688:1;679:10;;674:115;695:13;:20;;;;691:1;:24;674:115;;;751:9;731:29;;;:13;745:1;731:16;;;;;;;;;;;;;;;;;;:29;;;;727:58;;;775:4;768:11;;;;727:58;717:3;;;;;;;674:115;;;799:5;792:12;;601:207;;;;;:::o;154:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;319:128::-;383:25;398:9;383:14;:25::i;:::-;375:34;;;;;;;;441:1;413:13;:24;427:9;413:24;;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;319:128;:::o',
        source: 'pragma solidity ^0.4.23;\n\ncontract Voting {\n\t// Constructor to initialize candidates\n\t// vote for candidates\n\t// get count of votes for each candidates\n\n\tbytes32[] public candidateList;\n\tmapping (bytes32 => uint8) votesReceived;\n\t\n\tconstructor(bytes32[] candidateNames)  public {\n\t\tcandidateList = candidateNames;\n\t}\n\n\tfunction voteForCandidate(bytes32 candidate) public {\n\t\trequire(validCandidate(candidate));\n\t\tvotesReceived[candidate] += 1;\t\n\t}\n\n\tfunction totalVotesFor(bytes32 candidate)  view public returns(uint8) {\n\t\trequire(validCandidate(candidate));\n\t\treturn votesReceived[candidate];\t\n\t}\n\n\tfunction validCandidate(bytes32 candidate) view public returns(bool) {\n\t\tfor (uint i = 0; i < candidateList.length; i++) {\n\t\t\tif (candidateList[i] == candidate) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n}\n',
        sourcePath: '/home/looping/ethereum_voting_dapp/chapter2/contracts/Voting.sol',
        ast: [Object],
        legacyAST: [Object],
        compiler: [Object],
        networks: [Object],
        schemaVersion: '2.0.1',
        updatedAt: '2018-11-14T11:27:37.401Z' },
     setProvider: [Function: bound setProvider],
     new: [Function: bound new],
     at: [Function: bound at],
     deployed: [Function: bound deployed],
     defaults: [Function: bound defaults],
     hasNetwork: [Function: bound hasNetwork],
     isDeployed: [Function: bound isDeployed],
     detectNetwork: [Function: bound detectNetwork],
     setNetwork: [Function: bound setNetwork],
     resetAddress: [Function: bound resetAddress],
     link: [Function: bound link],
     clone: [Function: bound clone],
     addProp: [Function: bound addProp],
     toJSON: [Function: bound toJSON],
     web3:
      Web3 {
        _requestManager: [Object],
        currentProvider: [Object],
        eth: [Object],
        db: [Object],
        shh: [Object],
        net: [Object],
        personal: [Object],
        bzz: [Object],
        settings: [Object],
        version: [Object],
        providers: [Object],
        _extend: [Object] },
     class_defaults:
      { from: '0xa7053a05bb4589461d77ae0071aa1bb321036b46',
        gas: 6721975,
        gasPrice: 100000000000 },
     currentProvider:
      HttpProvider {
        host: 'http://localhost:8545',
        timeout: 0,
        user: undefined,
        password: undefined,
        headers: undefined,
        send: [Function],
        sendAsync: [Function],
        _alreadyWrapped: true },
     network_id: '1542194744997' },
  abi:
   [ { constant: true,
       inputs: [Array],
       name: 'candidateList',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { inputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor' },
     { constant: false,
       inputs: [Array],
       name: 'voteForCandidate',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [Array],
       name: 'totalVotesFor',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: true,
       inputs: [Array],
       name: 'validCandidate',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' } ],
  contract:
   Contract {
     _eth:
      Eth {
        _requestManager: [Object],
        getBalance: [Object],
        getStorageAt: [Object],
        getCode: [Object],
        getBlock: [Object],
        getUncle: [Object],
        getCompilers: [Object],
        getBlockTransactionCount: [Object],
        getBlockUncleCount: [Object],
        getTransaction: [Object],
        getTransactionFromBlock: [Object],
        getTransactionReceipt: [Object],
        getTransactionCount: [Object],
        call: [Object],
        estimateGas: [Object],
        sendRawTransaction: [Object],
        signTransaction: [Object],
        sendTransaction: [Object],
        sign: [Object],
        compile: [Object],
        submitWork: [Object],
        getWork: [Object],
        coinbase: [Getter],
        getCoinbase: [Object],
        mining: [Getter],
        getMining: [Object],
        hashrate: [Getter],
        getHashrate: [Object],
        syncing: [Getter],
        getSyncing: [Object],
        gasPrice: [Getter],
        getGasPrice: [Object],
        accounts: [Getter],
        getAccounts: [Object],
        blockNumber: [Getter],
        getBlockNumber: [Object],
        protocolVersion: [Getter],
        getProtocolVersion: [Object],
        iban: [Object],
        sendIBANTransaction: [Function: bound transfer] },
     transactionHash: null,
     address: '0xdbe992f002da245c633e622066deb3f2ff7eb1f2',
     abi: [ [Object], [Object], [Object], [Object], [Object] ],
     candidateList:
      { [Function: bound ]
        request: [Function: bound ],
        call: [Function: bound ],
        sendTransaction: [Function: bound ],
        estimateGas: [Function: bound ],
        getData: [Function: bound ],
        uint256: [Circular] },
     voteForCandidate:
      { [Function: bound ]
        request: [Function: bound ],
        call: [Function: bound ],
        sendTransaction: [Function: bound ],
        estimateGas: [Function: bound ],
        getData: [Function: bound ],
        bytes32: [Circular] },
     totalVotesFor:
      { [Function: bound ]
        request: [Function: bound ],
        call: [Function: bound ],
        sendTransaction: [Function: bound ],
        estimateGas: [Function: bound ],
        getData: [Function: bound ],
        bytes32: [Circular] },
     validCandidate:
      { [Function: bound ]
        request: [Function: bound ],
        call: [Function: bound ],
        sendTransaction: [Function: bound ],
        estimateGas: [Function: bound ],
        getData: [Function: bound ],
        bytes32: [Circular] },
     allEvents: [Function: bound ] },
  candidateList:
   { [Function]
     call: [Function],
     sendTransaction: [Function],
     request: [Function: bound ],
     estimateGas: [Function] },
  voteForCandidate:
   { [Function]
     call: [Function],
     sendTransaction: [Function],
     request: [Function: bound ],
     estimateGas: [Function] },
  totalVotesFor:
   { [Function]
     call: [Function],
     sendTransaction: [Function],
     request: [Function: bound ],
     estimateGas: [Function] },
  validCandidate:
   { [Function]
     call: [Function],
     sendTransaction: [Function],
     request: [Function: bound ],
     estimateGas: [Function] },
  sendTransaction: [Function],
  send: [Function],
  allEvents: [Function: bound ],
  address: '0xdbe992f002da245c633e622066deb3f2ff7eb1f2',
  transactionHash: null }
```
```  
truffle(ganache) Voting.deployed().then(function(f) {f.totalVotesFor.call('Nick').then(function(f) {console.log(f.toNumber())})})
```
```
undefined
truffle(ganache)> 0
```
```
Voting.deployed().then(function(f) {f.voteForCandidate('Nick').then(function(f) {console.log(f)})})
```
```
undefined
truffle(ganache)> { tx: '0xee28f58c0d778219cfdea9f6364c7430085ca9b68d87320d5ca78862a0e5ae2d',
  receipt:
   { transactionHash: '0xee28f58c0d778219cfdea9f6364c7430085ca9b68d87320d5ca78862a0e5ae2d',
     transactionIndex: 0,
     blockHash: '0x331a6f03f71134162bc527eded6653894783f68de87e93b26031db467fa2ac6f',
     blockNumber: 5,
     gasUsed: 44183,
     cumulativeGasUsed: 44183,
     contractAddress: null,
     logs: [],
     status: '0x1',
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: [] }
```
