# Next.js + TypeScript

## Features

- TypeScript
- ESlint, Prettier
- Styled-Components
- Cypress, e2e testing with cypress
- Storybook
- Jest, Unit testing with Jest and testing libary

## Structure

```raw
.
├── .storybook/                       Storybook config folder
├── cypress/                          Cypress config and test files
│   └── integration                   e2e test files
├── public/                           Static content to serve
├── src/
│   ├── pages/
│   │    ├── _app.tsx                 React UI wrapper, equivalent to "App.js" in CRA
│   │    ├── _document.tsx            NextJS wrapper, provides raw HTML used in SSR
│   │    └── *                        Page components, routing is based on file tree
│   ├── styles/
│   │    ├── global.ts                Global Styles
│   │    └── theme.ts                 Setup Styled-Components theme
│   ├── ui/                           Reusable stateless components based on Styled-Components with story and jest test, in 3 different subfolders
│   │    ├── atoms                    Atom components like Button, Image, Link, Tooltip etc
│   │    ├── components               Card, Hero, Gallery etc, which consume a set of atom components.
│   │    └── widgets                  Wdigets consume a set of components, can be something larger lives in pages.
│   └── utils/                        Common client side tools
├── cypress.json                      Cypress config
├── .babelrc                          Babel 7 feature declaration
├── .eslintconfig.js                  Linter config
├── .prettierrc                       Prettier config
├── jest.config.js                    Test environment config
├── jest.setup.ts                     Bootstrapping script for Jest/Enzyme
└── package.json                      Application manifest
```

## Development

```shell
yarn install

# start dev mode
yarn dev
```

## Test, Lint and Type checking

```shell
# run unit test
yarn test

# run type check
yarn type-check

# run eslint
yarn lint

# run e2e test
yarn cypress:open
```

## Run storybook

```
yarn storybook
```

## Build for Production

```shell
yarn build
yarn start
```

## Theme

The theme is based on mobile first and defined in src/styles/theme.ts file. Open the file to check the details. The theme has few media query helper functions:

- theme.media.small
- theme.media.medium
- theme.media.large
- theme.media.up
- theme.media.down
- theme.media.between

Usage example:

```javascript
const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.orange};
  ${({
    theme: {
      colors,
      media: { small }
    }
  }) => small`
        color: ${colors.blue};
    `}
`;

const Box = styled.div`
  background: ${({ theme: { colors } }) => colors.white};

  ${({ theme: { breakpoints, colors, media } }) => media.down(breakpoints[1])`
        background: ${colors.orange};
    `}

  ${({ theme: { breakpoints, colors, media } }) => media.between(breakpoints[1], breakpoints[2])`
        background: ${colors.green};
    `}

    ${({ theme: { breakpoints, media } }) => media.up(breakpoints[2])`
        background: ${colors.blue};
    `}
`;
```
### Automation Detail

##### 1.  When creating a new PR, the new build will execute for that PR, then create a new domain for it.

```
http://stage{PR_NUMBER}.mvp.netishop.com
```

##### 2.  When code is merged to master, will update the staging site automatically
- After code reviewed, use `merge` at the bottom of pull request page. The pipeline will run after all checks passed the site will update.
```
https://staging.mvp.netishop.com
```

##### 3. After staging tested and passed. Create a tag and push to git, will update the production site automatically.

Command line:
- This action will run release script automatically which is pull a latest commit and collecting the message then increase previous version to new version.

```
$ yarn release -auto
```
The format of release tag:
```
vX.X.X
```
E.g v0.1.0

Produciton url:
```
https://www.mvp.netishop.com
```

#### Production build

`npm run build` or `yarn build`  

### Release Instruction

##### 1. Post starting release in `#web-release` channel

![Starting Release](assets/first_post.png)
##### 2. Merge your PRs into `master`


##### 3. Confirm your changes on `staging.mvp.netishop.com`


##### 4. Checkout master, pull latest and run

```
$ yarn release -auto
```
This command will add the release description automatically.

or we can do it manually

<b>a. Single ticket</b>
```
$ yarn release '- Implement A feature'
```

<b>b. Multiple tickets</b>
```
$ yarn release '
> - Implement A feature'
> - Fix B issue'
> '
```

##### 5. Edit your `Starting release` message in the channel by paste the message that automatically copied to your clipboard after run the command release above.

![Released](assets/second_post.png)

##### 6. Verify on production

```
https://www.mvp.netishop.com
```