# React Issues Viewer

this project is using 
- nextjs 
- react 
- typescript 
- apollo-client
- tailwind
- eslint  
- jest
- prettier  
- babel
- webpack

## How to start the project
1. install dependencies via
`yarn`
2. copy `.env.local.example` to `.env.local`
3. include your own `NEXT_PUBLIC_GITHUB_TOKEN` into `.env.local` (get one [here](https://github.com/settings/tokens) - no permissions needed)
4. start project with `yarn dev`

## Additional information

- use `yarn lint` for linter checks
- use `yarn test` to run tests

## Preview on Vercel
- you can also checkout a deployed version on vercel [here](https://githubexplorer-two.vercel.app/?q=)

## Improvements

- class component for error boundaries
- fallback for non existing users/avatars
- fetchMore comments like issues
- docker for easier setup
- Fetch Components with render prop + layout
- fix undefined error for unset q param
- use OAUTH2 version using next-auth (see custom apollo provider) to avoid using tokens