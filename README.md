# Secret Boxes

![secret box banner](./public/images/cover.png)

<p align="center">
Get started with creating decentralized apps with Secret Network
</p>
<br />

# Getting Started

## Installation process

Clone the repo

```bash
git clone https://github.com/SecretChainGirl-Foundation/secret-boxes

# or through an ssh

git clone git@github.com:SecretChainGirl-Foundation/secret-boxes.git
```

cd to the app, install packages, and run the dev script

```bash
cd secret-boxes && yarn && yarn dev
```

Rename the .env.example file to .env

```zsh
cp .env.example .env
```

> Check `scripts/webpConvert.sh` to convert png files to webp.

## Requirements

- NodeJs
- Yarn

## Build and Test

To create a production build and start it

```bash
yarn build && yarn start
```

To test all the test cases on watch mode

```bash
yarn test -w
```

## Contributors

- Regularly ask a person to review your pr
- Limit the subject line to 50 characters.
- Put a blank line between the subject line and the body.
- Use imperative explanation.
- Describe what was done and why, but not how.

## VSCode/IDE/Other Text Editor extensions.

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-**eslint**) - To make our code more consistent and avoiding bugs
2. [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) -This checks our TypeScript code for readability, maintainability, and functionality errors.
3. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - This make sure we have the same format of code.
4. [Tailwind Css IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Autocompletion for tailwindcss classes
5. [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) - Formats our tailwindcss classes
