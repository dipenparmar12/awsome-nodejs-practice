## Quick Start

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

To start server, simply run:

```bash
yarn dev
```

Or

```bash
npm run dev
```

## Data dump Import, Export (MongoDB)

### To Export data

```bash
mongodump -d <database_name> -o <directory_backup>
```

Example

```bash
mongodump -d imdb_movie -o database_backup
```

### To Import data

```bash
mongorestore -d <database_name> <directory_backup>
```

Example

```bash
mongorestore -d imdb_movie database_backup/movie
```
