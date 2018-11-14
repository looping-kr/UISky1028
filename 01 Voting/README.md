
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
