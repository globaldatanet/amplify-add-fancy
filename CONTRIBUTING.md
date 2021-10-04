# How to contribute

## Prerequisite

* [AWS Amplify-Project](https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli).
* [PNPM](https://pnpm.io/)

## Installation

```bash
git clone https://github.com/globaldatanet/amplify-add-fancy.git
pnpm install
```

## Authoring a new Plugin

This repository follows the constructions [here](https://docs.amplify.aws/cli/plugins/authoring/#plugin-package-structure).

Mainly, it will use `PrePush` for bundling the code and moving files before pushing.
