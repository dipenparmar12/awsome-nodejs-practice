## Quick Start 

Install the dependencies using YARN

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

## Seed fake data

```bash
yarn seed
```

## Data dump Import, Export (MongoDB)

### To Export data

```bash
mongodump -d <database_name> -o <directory_backup>
```

Example

```bash
mongodump -d email_schedule -o database_backup
```

### To Import data

```bash
mongorestore -d <database_name> <directory_backup>
```

Example

```bash
 mongorestore -d email_schedule database_backup/email_schedule/
```
