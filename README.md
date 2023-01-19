# Metis project promo website

![Metis logo](https://github.com/tilde-lab/metis.science/blob/master/src/assets/img/metis.svg | width=300)

This is the source code and the [compiled deployment](https://github.com/tilde-lab/metis.science/tree/gh-pages) of the main [Metis landing website](https://metis.science), built with the [svelte-spectre](https://kit.metis.science) UI-kit.

All the edits in this repository are immediately reflected at the [Metis website](https://metis.science) thanks to the [GitHub action scenario](https://github.com/tilde-lab/metis.science/tree/master/.github).


### Requirements

This website is written in the TypeScript language using the Svelte frontend and Spectre style framework. If you wish to run this website elsewhere (e.g. at your own local PC), clone or download this repository and make sure you have the newest JavaScript / TypeScript environment at hand. For example, in your terminal console, the command `node -v` should print a version above `v14` at least. Also the NodeJS package manager should work, that is, the command `npm -v` should print a version above `7` at least.


### Metis infra

Refer to the main parts of the whole Metis infrastructure:

- [GUI](https://github.com/basf/metis-gui)
- [BFF](https://github.com/basf/metis-bff)
- [backend](https://github.com/basf/metis-backend)
- [API client](https://github.com/tilde-lab/metis-client)


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
