# Fastify Tutorial

This is a CRUD API created with fastify and MongoDB.

### Installing the dependencies 
```
npm i
```

### Running the application in dev mode

With fastify-start
```
npm run pretty-logs
```

Without fastify-start
```
npm run dev
```

### Loading the mongo database with users
```
cd ./scripts
./load_users.sh

# If not executable then add the permissions
sudo chmod +x load_users.sh
```

### Swagger endpoint
```
/docs
```

