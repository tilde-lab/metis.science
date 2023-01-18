# Metis project promo website

This is the source code and the [compiled deployment](https://github.com/tilde-lab/metis.science/tree/gh-pages) of the main [Metis landing website](https://metis.science), built with the [svelte-spectre](https://kit.metis.science) UI-kit.

All the edits in this repository are immediately reflected at the [Metis website](https://metis.science).


### Requirements

This website is written in TypeScript language using the Svelte frontend and Spectre style framework. If you wish to run this website elsewhere (e.g. at your own local PC), clone or download this repository and make sure you have the newest JavaScript / TypeScript environment at hand. For example, in your terminal console, the command `node -v` should print a version above `v14` at least. Also the NodeJS package manager should work, that is, the command `npm -v` should print a version above `7` at least.


### Metis infra

Refer to the main parts of the whole Metis infrastructure: [GUI](https://github.com/basf/metis-gui) &rlarr; [BFF](https://github.com/basf/metis-bff) &rlarr; [backend](https://github.com/basf/metis-backend). There is also the [Metis API client](https://github.com/tilde-lab/metis-client) written in Python for the programmatic interactions with the Metis server.


## Installation and deployment

This set of commands downloads all the dependencies, compiles the code, and starts the local development server:

```bash
npm install
npm run build
npm run dev
```

After that, the website is available under the local address [localhost:5556](http://localhost:5556).


## License

Copyright 2023 BASF SE

BSD 3-Clause
