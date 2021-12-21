# HALO task [URL](https://halolab.notion.site/NodeJS-db3cded196894470ad42f9b848ef2363)

## SIMPLE API with retrieving cached data from Node memory | internal Redis-server | external DB PostgreSQL

## Prerequisites
- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- PostgreSQL external - [Create free account](https://www.elephantsql.com/), [login, create new Instance, openIt and copy details](https://customer.elephantsql.com/instance).
- pgAdmin 4 - [download and install pgAdmin](https://www.pgadmin.org/download/), connect to your BD using Instance details.
- sample database [download and unzip sample PostgreSQL database](https://www.postgresqltutorial.com/wp-content/uploads/2019/05/dvdrental.zip).
- restore extracted database `dvdrental.tar`: open pgAdmin 4, go to connected external db and restore it with extracted file. 
- (for linux) Redis-server - [Download & Install Redis server](https://redis.io/download), run it without using password with default port.
- (for Windows) Docker desktop [Download & Install Docker desktop with WSL 2 backend](https://docs.docker.com/desktop/windows/install/).
- (for Windows) Create and run container/image with Redis-server: use Command Promt: `docker run --name redis -p 6379:6379 -d redis`.

## Downloading
```
git clone: by SSH {git@github.com:MME83/halo.git}, by HTTPS {https://github.com/MME83/halo.git}
```

## Installing NPM modules in your cloned repo using IDE
```
npm install
```

## Configure .env-example in main repo directory
```
rename `.env-example` to `.env` and set extarnal DB configuration
```

## Running application
```
npm start
```

## Documentation and testing
After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation and testing it by typing http://localhost:4000/docs/ in your browser.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

You can also use Postman for testing the API.