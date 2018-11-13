# Execute Node

* Reading Voting SmartContract from File System 
```
code = fs.readFileSync('Voting.sol').toString()
```

* Getting Solidity Complier
```
solc = require('solc')
```

* compile code
```
compiledCode = solc.compile(code)
```


* 
```
Web3 = require('web3')
```
* 
```
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
```
* 
```
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
```
* 
```
VotingContract = web3.eth.contract(abiDefinition)
```
* 
```
byteCode = compiledCode.contracts[':Voting'].bytecode
```
* 
```
deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
```
* 
```
deployedContract.address
```
* 
```
deployedContract.totalVotesFor.call('Rama')
```
* 
```
deployedContract.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
```
* 
```
deployedContract.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
```
* 
```
deployedContract.totalVotesFor.call('Rama').toLocaleString()
```
