# install Ethereum
```
$ sudo git clone -b release/1.3.6 https://github.com/ethereum/go-ethereum.git

$ sudo apt-get install -y build-essential libmp3-dev golang

$ make -C go-ethereum geth

$ ./go-ethereum/build/bin/geth version

$ sudo cp go-ethereum/build/bin/geth /usr/bin/
```

# make testnet dir & create genesis
```
$ mkdir testnet
$ cd testnet
$ touch genesis
$ vi genesis
  {
      "config": {
         "chainId": 2757,
         "homesteadBlock": 0,
         "eip155Block": 0
      },
      "difficulty": "400",
      "gasLimit": "2100000",
      "alloc": {
        "7b684d27167d208c66584ece7f09d8bc8f86ffff": {
            "balance": "100000000000000000000000"
        }
     }
  }
```
# make new account
```
$ geth account new --datadir .
INFO [11-27|11:47:37.101] Maximum peer count                       ETH=25 LES=0 total=25
Your new account is locked with a password. Please give a password. Do not forget this password.
Passphrase:
Repeat passphrase:
Address: {93fde36110ba271f69b616f0aca20a8fce132383}
```

# give some eths to new account
```
$ vi genesis
  {
      "config": {
         "chainId": 2757,
         "homesteadBlock": 0,
         "eip155Block": 0
      },
      "difficulty": "400",
      "gasLimit": "2100000",
      "alloc": {
        "7b684d27167d208c66584ece7f09d8bc8f86ffff": {
            "balance": "100000000000000000000000"
        },
        "93fde36110ba271f69b616f0aca20a8fce132383": {
            "balance": "100000000000000000000000"
        }
     }
 }
```

# run ethereum
```
$ geth --datadir . init genesis
INFO [11-27|11:49:43.317] Maximum peer count                       ETH=25 LES=0 total=25
INFO [11-27|11:49:43.318] Allocated cache and file handles         database=/home/looping/testnet/geth/chaindata cache=16 handles=16
INFO [11-27|11:49:43.329] Writing custom genesis block
INFO [11-27|11:49:43.330] Persisted trie from memory database      nodes=3 size=413.00B time=202µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [11-27|11:49:43.330] Successfully wrote genesis state         database=chaindata                            hash=f10fd4…11b966
INFO [11-27|11:49:43.331] Allocated cache and file handles         database=/home/looping/testnet/geth/lightchaindata cache=16 handles=16
INFO [11-27|11:49:43.340] Writing custom genesis block
INFO [11-27|11:49:43.341] Persisted trie from memory database      nodes=3 size=413.00B time=174µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [11-27|11:49:43.342] Successfully wrote genesis state         database=lightchaindata                            hash=f10fd4…11b966
looping@UISky1028:~/testnet$ geth --datadir . --networkid 2757 --rpc --rpcport 8545 --rpccorsdomain "*" --rpcapi "db,eth,net,web3,personal" --nodiscover console
INFO [11-27|11:49:54.134] Maximum peer count                       ETH=25 LES=0 total=25
INFO [11-27|11:49:54.150] Starting peer-to-peer node               instance=Geth/v1.8.17-unstable-12755325/linux-amd64/go1.10.1
INFO [11-27|11:49:54.150] Allocated cache and file handles         database=/home/looping/testnet/geth/chaindata cache=768 handles=512
INFO [11-27|11:49:54.214] Initialised chain configuration          config="{ChainID: 2757 Homestead: 0 DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: 0 EIP158: <nil> Byzantium: <nil> Constantinople: <nil> Engine: unknown}"
INFO [11-27|11:49:54.214] Disk storage enabled for ethash caches   dir=/home/looping/testnet/geth/ethash count=3
INFO [11-27|11:49:54.215] Disk storage enabled for ethash DAGs     dir=/home/looping/.ethash             count=2
INFO [11-27|11:49:54.215] Initialising Ethereum protocol           versions="[63 62]" network=2757
INFO [11-27|11:49:54.216] Loaded most recent local header          number=0 hash=f10fd4…11b966 td=400 age=49y7mo1w
INFO [11-27|11:49:54.216] Loaded most recent local full block      number=0 hash=f10fd4…11b966 td=400 age=49y7mo1w
INFO [11-27|11:49:54.216] Loaded most recent local fast block      number=0 hash=f10fd4…11b966 td=400 age=49y7mo1w
INFO [11-27|11:49:54.219] Regenerated local transaction journal    transactions=0 accounts=0
INFO [11-27|11:49:54.220] Starting P2P networking
INFO [11-27|11:49:54.225] IPC endpoint opened                      url=/home/looping/testnet/geth.ipc
INFO [11-27|11:49:54.226] HTTP endpoint opened                     url=http://127.0.0.1:8545          cors=* vhosts=localhost
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.17-unstable-12755325/linux-amd64/go1.10.1
INFO [11-27|11:49:54.372] Etherbase automatically configured       address=0x93FDe36110Ba271F69B616F0aca20a8Fce132383
coinbase: 0x93fde36110ba271f69b616f0aca20a8fce132383
at block: 0 (Thu, 01 Jan 1970 09:00:00 DST)
 datadir: /home/looping/testnet
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> INFO [11-27|11:49:56.325] RLPx listener up                         self="enode://ca9797f86f02cbe7c21f278dcc21753e82776e098ee2eada88137fc9f204819da44768386b60bc9453d296cbc885f0169c45bbf558534cdc12255232a7f793d0@127.0.0.1:30303?discport=0"
```

# display all accounts
```
> web3.eth.accounts
["0x93fde36110ba271f69b616f0aca20a8fce132383"]
```

# create testuser1
```
> personal.newAccount("testuser1")
"0xd7c98235d5764239e209a816fde378e99cb474c9"
```

# create testuser2
```
> personal.newAccount("testuser2")
"0x0e2b7a1635740d83c9155fdc602ac927ccce11c5"
```


# display accounts list
```
> eth.accounts
["0x93fde36110ba271f69b616f0aca20a8fce132383", "0xd7c98235d5764239e209a816fde378e99cb474c9", "0x0e2b7a1635740d83c9155fdc602ac927ccce11c5"]
```

# display balance of eth.account[0]
```
> eth.getBalance(eth.accounts[0])
1.0013e+23
```

# display count of blocks
```
> eth.blockNumber
26
```
# display balance of all accounts
> eth.getBalance(eth.accounts[0])
```
1.0013e+23
```

# unlock account for sending eth
```
> web3.personal.unlockAccount(web3.personal.listAccounts[0],"@password", 15000)
True
```

# sending eth from accounts[0] to accounts[1]
```
> eth.sendTransaction({from: '0x93fde36110ba271f69b616f0aca20a8fce132383', to: '0xd7c98235d5764239e209a816fde378e99cb474c9', value: web3.toWei(1, "ether")})
INFO [11-27|12:37:21.618] Setting new local account                address=0x93FDe36110Ba271F69B616F0aca20a8Fce132383
INFO [11-27|12:37:21.619] Submitted transaction                    fullhash=0xd39da26e50c0963d9fdc5a6956b3ba0df42fd63d6dc61efa9f0ea4b20ff65cb5 recipient=0xD7C98235D5764239E209a816Fde378e99cB474C9
"0xd39da26e50c0963d9fdc5a6956b3ba0df42fd63d6dc61efa9f0ea4b20ff65cb5"
```


# Starting mining
```
> miner.start()
INFO [11-27|12:22:04.807] Updated mining threads                   threads=4
INFO [11-27|12:22:04.807] Transaction pool price threshold updated price=1000000000
 INFO [11-27|12:22:04.808] Commit new mining work                   number=1 sealhash=55e342…36187c uncles=0 txs=0 gas=0 fees=0 elapsed=314µs
INFO [11-27|12:22:05.564] Successfully sealed new block            number=1 sealhash=55e342…36187c hash=3dce6e…f8dd72 elapsed=755.811ms
INFO [11-27|12:22:05.564] 🔨 mined potential block                  number=1 hash=3dce6e…f8dd72
INFO [11-27|12:22:05.564] Commit new mining work                   number=2 sealhash=3f91a5…41ad2f uncles=0 txs=0 gas=0 fees=0 elapsed=280µs
INFO [11-27|12:22:06.599] Successfully sealed new block            number=2 sealhash=3f91a5…41ad2f hash=b33292…2b0ab1 elapsed=1.034s
INFO [11-27|12:22:06.599] 🔨 mined potential block                  number=2 hash=b33292…2b0ab1
INFO [11-27|12:22:06.599] Commit new mining work                   number=3 sealhash=2b74f0…d0e448 uncles=0 txs=0 gas=0 fees=0 elapsed=182µs
INFO [11-27|12:22:06.850] Successfully sealed new block            number=3 sealhash=2b74f0…d0e448 hash=dd8ade…0acf5f elapsed=250.647ms
INFO [11-27|12:22:06.851] 🔨 mined potential block                  number=3 hash=dd8ade…0acf5f
INFO [11-27|12:22:06.852] Commit new mining work                   number=4 sealhash=d3578d…bf3b82 uncles=0 txs=0 gas=0 fees=0 elapsed=249µs
INFO [11-27|12:22:06.858] Successfully sealed new block            number=4 sealhash=d3578d…bf3b82 hash=3d847b…0cf381 elapsed=6.026ms
INFO [11-27|12:22:06.858] 🔨 mined potential block                  number=4 hash=3d847b…0cf381
INFO [11-27|12:22:06.858] Mining too far in the future             wait=2s
```


# Stop mining
```
> miner.stop()
Null
```


# display eth of accounts
```
> eth.getBalance(eth.accounts[0])
1.00189e+23
> eth.getBalance(eth.accounts[1])
1000000000000000000
> eth.getBalance(eth.accounts[2])
0
```
