
* change index.html
```
	<script src="./index.js"></script>
```
To 
```
	<script src="./app.js"></script>
```

# run webserver
```
$ npm run dev
> truffle-init-webpack@0.0.2 dev /home/looping/ethereum_voting_dapp/chapter2
> webpack-dev-server

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /

⚠ ｢wdm｣: Hash: 76fc81608ced41d631c2
Version: webpack 4.25.0
Time: 27372ms
Built at: 11/27/2018 2:13:43 PM
     Asset      Size  Chunks                    Chunk Names
    app.js   707 KiB       0  [emitted]  [big]  main
app.js.map  2.62 MiB       0  [emitted]         main
index.html  1.09 KiB          [emitted]
Entrypoint main [big] = app.js app.js.map
 [31] ./node_modules/url/url.js 22.8 KiB {0} [built]
[105] multi (webpack)-dev-server/client?http://localhost:8080 ./app/scripts/index.js 40 bytes {0} [built]
[106] (webpack)-dev-server/client?http://localhost:8080 7.78 KiB {0} [built]
[112] ./node_modules/strip-ansi/index.js 161 bytes {0} [built]
[114] ./node_modules/loglevel/lib/loglevel.js 7.68 KiB {0} [built]
[115] (webpack)-dev-server/client/socket.js 1.05 KiB {0} [built]
[117] (webpack)-dev-server/client/overlay.js 3.58 KiB {0} [built]
[122] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {0} [built]
[124] (webpack)/hot/emitter.js 75 bytes {0} [built]
[125] ./app/scripts/index.js 3.73 KiB {0} [built]
[126] ./node_modules/babel-runtime/core-js/object/keys.js 92 bytes {0} [built]
[153] ./app/styles/app.css 1.18 KiB {0} [built]
[158] ./node_modules/web3/index.js 193 bytes {0} [built]
[236] ./node_modules/truffle-contract/index.js 437 bytes {0} [built]
[345] ./build/contracts/Voting.json 88.2 KiB {0} [built]
    + 331 hidden modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  app.js (707 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (707 KiB)
      app.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
ℹ ｢wdm｣: Compiled with warnings.
```
