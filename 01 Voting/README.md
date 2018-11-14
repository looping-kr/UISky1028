
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
