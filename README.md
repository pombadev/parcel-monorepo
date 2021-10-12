# SPA monorepo frontend boilerplate

## Includes

- [parceljs](https://parceljs.org/) as build tool
- typescript v4
- eslint v8
- react v17
- lerna v4 *for managing monorepo*

## Prerequisite

- nodejs
- yarn

## Getting started

```bash
# setup
yarn install && yarn lerna bootstrap

# sanity check
yarn workspaces info
# outputs:
# {
#   "@parcel-monorepo/one": {
#     "location": "packages/one",
#     "workspaceDependencies": [],
#     "mismatchedWorkspaceDependencies": []
#   },
#   "@parcel-monorepo/two": {
#     "location": "packages/two",
#     "workspaceDependencies": [],
#     "mismatchedWorkspaceDependencies": []
#   }
# }

# start an app
yarn workspace @parcel-monorepo/one start

```
