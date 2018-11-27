install Bitcoin
```
$ mkdir src
$ cd src
$ git clone https://github.com/bitcoin/bitcoin.git

$ sudo apt-get update

# Install gcc
$ sudo apt-get install build-essential automake pkg-config libevent-dev bsdmainutils

# install OepnSSL
$ sudo apt-get install libtool autotools-dev autoconf
$ sudo apt-get install libssl-dev 

# Boots
$ sudo apt-get install libboost-all-dev

# install libdb4.8
$ sudo add-apt-repository ppa:bitcoin/bitcoin
$ sudo apt-get update
$ sudo apt-get install libdb4.8-dev
$ sudo apt-get install libdb4.8++-dev

# install library for bitcoin
$ sudo apt-get install libminiupnpc-dev
$ sudo apt-get install libqrencode-dev

# install GUI library
$ sudo apt-get install libqt5gui5 libqt5core5a libqt5dbus5 qttools5-dev qttools5-dev-tools libprotobuf-dev protobuf-compiler

# build
$ cd bitcoin
$ ./autogen.sh
$ ./configure
$ make

# install 
$ sudo make install
```

# run bitcoind
```
$ bitcoind -regtest -daemon -deprecatedrpc=generate
```

# create block
```
$ bitcoin-cli -regtest generate 101
  "0edd6e01f910f480c8a2854a727badbabb21e2ae728264350e16844234e8e28a",
  "29d13049fc07b76d27225bafdfe9ec23cefe0536eec684d3b34dc8a8992480d9",
  "4cf068b7fe867c46e8af9cdab383917aa20a506476b477b303dd1266296762f4",
  "59068545fd748e5569e8c4166c29cf1469589d16ae8a85d203de8951a27c747d",
  "40e5314f99cf059362947ab2e44bd7b79e2668e123b502fd8dcab92599317bb6",
  "5ad6efa41bd203715d8ef30ff0d81aa9cd53cc902c92970a3590b3741db70500",
…..
```



# verify block count 
```
$ bitcoin-cli -regtest getblockcount
101
```
# create account 
```
$ bitcoin-cli -regtest getnewaddress testuser1
2N3JsLY8XiEngBPXZ39FCvKguDzEigXB1mV
```

# display balance
```
$ bitcoin-cli -regtest getbalance
50.00000000
```

# display balance of user
```
$ bitcoin-cli -regtest testuser1
```
# send money
```
$ bitcoin-cli -regtest sendtoaddress 2N3JsLY8XiEngBPXZ39FCvKguDzEigXB1mV  10
a1533d9490f332befb8f30aae8e0f9a29e0591350afacb80ee17f3cfdec6a43b
```

# verify transaction
```
$ bitcoin-cli -regtest listunspent
[
]
```

# display balance
```
$ bitcoin-cli -regtest getbalance
49.99996260
```

# verify transaction before mining
```
$ bitcoin-cli -regtest listunspent 0
[
  {
    "txid": "a1533d9490f332befb8f30aae8e0f9a29e0591350afacb80ee17f3cfdec6a43b",
    "vout": 0,
    "address": "2N8EK654MWdTW4WNnkCib8Bw5Ao5UB45NBu",
    "redeemScript": "00149a8ffda51d859820bb355c8e7186a25b5197bcb5",
    "scriptPubKey": "a914a45dba55bf16c34e0b73f9f831ac1e7ac083d36287",
    "amount": 39.99996260,
    "confirmations": 0,
    "spendable": true,
    "solvable": true,
    "safe": true
  },
  {
    "txid": "a1533d9490f332befb8f30aae8e0f9a29e0591350afacb80ee17f3cfdec6a43b",
    "vout": 1,
    "address": "2N3JsLY8XiEngBPXZ39FCvKguDzEigXB1mV",
    "label": "testuser1",
    "redeemScript": "0014643e595434a2185e53e3a9613b089c98e3d1b475",
    "scriptPubKey": "a9146e61aeea748c899d144c27411f0c1f738a0ee85287",
    "amount": 10.00000000,
    "confirmations": 0,
    "spendable": true,
    "solvable": true,
    "safe": true
  }
]
```

# display balance
```
$ bitcoin-cli -regtest getbalance
```

# mining
```
$ bitcoin-cli -regtest generate 1
[
  "6132ae51e35d9dbbf277e260609a074c2292a7b36fae1dce2d783cc1cd5aa55d"
]
```
# verify transaction
```
$ bitcoin-cli -regtest listunspent
[
  {
    "txid": "a1533d9490f332befb8f30aae8e0f9a29e0591350afacb80ee17f3cfdec6a43b",
    "vout": 0,
    "address": "2N8EK654MWdTW4WNnkCib8Bw5Ao5UB45NBu",
    "redeemScript": "00149a8ffda51d859820bb355c8e7186a25b5197bcb5",
    "scriptPubKey": "a914a45dba55bf16c34e0b73f9f831ac1e7ac083d36287",
    "amount": 39.99996260,
    "confirmations": 1,
    "spendable": true,
    "solvable": true,
    "safe": true
  },
  {
    "txid": "a1533d9490f332befb8f30aae8e0f9a29e0591350afacb80ee17f3cfdec6a43b",
    "vout": 1,
    "address": "2N3JsLY8XiEngBPXZ39FCvKguDzEigXB1mV",
    "label": "testuser1",
    "redeemScript": "0014643e595434a2185e53e3a9613b089c98e3d1b475",
    "scriptPubKey": "a9146e61aeea748c899d144c27411f0c1f738a0ee85287",
    "amount": 10.00000000,
    "confirmations": 1,
    "spendable": true,
    "solvable": true,
    "safe": true
  },
  {
    "txid": "cee3d74e47549a586dc888d061763c5db041d2932b2f26492cba37fdf1dccf7b",
    "vout": 0,
    "address": "my6qVUggwRzFPUdcfdj6R9ZRmkreJvgYeq",
    "scriptPubKey": "210338a57904dd6b6299b44e4b792450ced9f9c03cd5765c5d43a32eb407128d0077ac",
    "amount": 50.00000000,
    "confirmations": 101,
    "spendable": true,
    "solvable": true,
    "safe": true
  }
]
```
# display balance of user
```
$ bitcoin-cli -regtest getbalance 
99.99996260
```
# verify block count 
```
$ bitcoin-cli -regtest getblockcount
102
```
