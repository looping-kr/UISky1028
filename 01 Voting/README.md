
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
