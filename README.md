## Requirements
- Postgres 
- Node.js version >= v18.18.0

## Configuration
1. Create .env file from .env.dist and customize DATABASE_URL
```
cp .env.dist .env
```
2. Run following commands to install and start the app

```bash
nvm i

npm i

npx drizzle-kit migrate

npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Further improvements
- create tables: investment, user, user_investment in order to keep track of investments for multiple users

