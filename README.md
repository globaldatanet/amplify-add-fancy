# Amplify Add-Fancy

This is an [AWS Amplify CLI](https://docs.amplify.aws/cli/) - Plugin for making your `function` fancier
by adding Typescript- Function or turning your `function`- folder to a [Monorepo](https://www.atlassian.com/git/tutorials/monorepos).

## Why

We all know the [benefits of Typescript](https://www.typescriptlang.org/why-create-typescript),
but AWS Amplify's CLI does not support that out-of-the-box.

Furthermore, when creating many functions, each time you might pull the same library for all your functions. The solution for that are Workspaces (aka multi-package repositories, multi-project repositories, or monolithic repositories).

## How

Make sure you have an [Amplify-Project](https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli) up and running.

```bash
git clone https://github.com/globaldatanet/amplify-add-fancy.git
amplify plugin add
```

You get prompted where you need to put your **absolute path** and enter `Yes` afterwards.

```bash
? Enter the absolute path for the root of the plugin directory:
/absolute/path/to/this/repository
? Run a fresh scan for plugins on the Amplify CLI pluggable platform Yes
```

Now you can use follow commands

| Command                        | Description                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `amplify add-fancy typescript` | Add a Typescript-Function                                                                              |
| `amplify add-fancy monorepo`   | Turns your `function`- folder into a Monorepo. **NOTE:** This makes sense with more than two functions |
