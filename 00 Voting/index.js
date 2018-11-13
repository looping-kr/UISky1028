web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
VotingContract = web3.eth.contract(abi);

contractInstance = VotingContract.at('0x0b4284c39d52d807d17f86df26638684d963215f');

candidates = {"Rama":"candidate-1", "Nick":"candidate-2", "Jose":"candidate-3"}

function voteForCandidate(candidate) {
	candidateName = $("#candidate").val();

	contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0], gas: 4700000}, function() {
		let div_id = candidates[candidateName];
		$("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
	});
}

$(document).ready(function() {
   candidateNames = Object.keys(candidates);

   for(var i = 0; i < candidateNames.length; i++) {
	   let name = candidateNames[i];
	   let val = contractInstance.totalVotesFor.call(name).toNumber();
	   $("#" + candidates[name]).html(val);
   }
});
