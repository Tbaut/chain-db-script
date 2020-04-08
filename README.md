# Chain DB script

Script to modify chain-db

## .env variable
```bash
CHAIN_DB_GRAPHQL_URL="http://localhost:4466/"
```
## Run
- `yarn`
- `yarn start`

## Generate types
- `yarn codegen`

## Docker build
docker build -t paritytech/polkassembly-chain-db-watcher:master .
