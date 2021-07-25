# The Frontend for the fluidgifts client user interface.

# Getting Started

## Installation process

Clone the repo

```bash
git clone https://townip.visualstudio.com/GiftingApp/_git/frontend

# or through an ssh

git clone townip@vs-ssh.visualstudio.com:v3/townip/GiftingApp/frontend
```

cd to the app, install packages, and run the dev script

```bash
cd frontend && yarn && yarn dev
```

Rename the .env.example file to .env

```zsh
cd src && mv .env.example .env
```

Generate the graphql:codegen hooks

```zsh
yarn codegen
```

> Check `src/generated/graphql.ts` for the generated file

# Requirements

- The backend [https://townip.visualstudio.com/GiftingApp/\_git/backend](https://townip.visualstudio.com/GiftingApp/_git/backend)
- NodeJs
- Yarn
- Altair / Graphiql App, to perform queries/mutations as admin

> Here's the guide for setting up the backend and the local mail server https://townip.visualstudio.com/GiftingApp/_workitems/edit/10422/ and
> https://townip.visualstudio.com/GiftingApp/_workitems/edit/10435/

# Build and Test

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
- Capitalize only the first letter in the subject line.
- Don't put a period at the end of the subject line.
- Put a blank line between the subject line and the body.
- Wrap the body at 72 characters.
- Use the imperative mood.
- Describe what was done and why, but not how.

# Reset Password Flow

1. Clicked Forgot password
1. Redirect to '/reset_password'
1. User will fill up the email field and submit it using the forgotPassword hook
1. backend will send a resetPasswordLink to the user's email
1. User will receive the link, and click it.
1. the link will redirect them to "/reset_password?token=eyJhb..."
1. a useEffect will look for a token in the url, then send a forgotPasswordChecker hook using that token, and an email.
1. If the request is successful they'll be redirected to '/change_password' to change their password.
1. User will fill up the newPassword and passwordConfirmation, and submit it.
1. A button will appear to redirect them to '/login'

## VSCode/IDE/Other Text Editor extensions.

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-**eslint**) - To make our code more consistent and avoiding bugs
2. [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) -This checks our TypeScript code for readability, maintainability, and functionality errors.
3. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - This make sure we have the same format of code.
