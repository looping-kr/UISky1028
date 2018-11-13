
* Truffle Setup
```
$ npm install -g truffle
```

```
$ mkdir -p Voting
$ cd Voting2
$ truffle unbox webpack
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
