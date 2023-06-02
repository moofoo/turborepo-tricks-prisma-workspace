# turborepo-tricks-prisma-workspace

This yarn 1.2 monorepo demonstrates

- Why putting Prisma in its own workspace is a good idea
- Docker container build time difference between `turbo run build --filter=service` and `turbo run build --filter=service^...`

## Setup

```console
bash setup.sh
```

```sh
#!/bin/bash

docker pull node:20.2.0-alpine3.17
docker pull postgres:15.3-alpine3.17

docker image build -f dockerfiles/Dockerfile.node -t custom-node:latest dockerfiles

yarn
yarn workspace prisma-client build
yarn
```

## Why put Prisma in a workspace?

### App workspaces can access Prisma types

`apps/backend/src/app.service.ts`

```typescript
import {Injectable} from "@nestjs/common";
import {PrismaService} from "nestjs-prisma";
import type {User} from "prisma-client";

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return "Hello World!";
  }

  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
```

`apps/frontend/src/use-data.ts`

```typescript
import React from "react";
import {ofetch} from "ofetch";
import type {User} from "prisma-client";

export default function useData() {
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    (async () => {
      const data = await ofetch("http://localhost:3333/users");
      setData(data);
    })();
  }, []);

  return data;
}
```

#### In frontend/backend package.json

```json
{
  "dependencies": {
    "prisma-client": "*"
  }
}
```

### Simplifies generating prisma client (with Turborepo)

`packages/prisma-client/package.json'

```json
{
  "name": "prisma-client",
  "version": "1.0.0",
  "main": "dist/index.js",
  "files": ["src/index.ts"],
  "repository": "https://github.com/moofoo/turborepo-tricks-prisma-workspace.git",
  "author": "moofoo <nathancookdev@gmail.com>",
  "license": "MIT",
  "private": true,
  "scripts": {
    "build": "npx -y rimraf dist/* && prisma generate && npx tsc"
  },
  "dependencies": {
    "@prisma/client": "^4.15.0"
  },
  "devDependencies": {
    "@types/node": "^20.2.5",
    "prisma": "^4.15.0",
    "rimraf": "^5.0.1",
    "typescript": "^5.1.3"
  }
}
```

With `prisma generate` in the build script, `turbo run build ...` will generate the prisma client for workspaces that have `prisma-client` as a dependency. This is particularly useful when it comes to writing Dockerfiles, since it makes it easier to write generic Dockerfiles for development.

## Build time difference between `turbo run build --filter=service` and `turbo run build --filter=service^...`

If you compare [docker-compose.good.yml](docker-compose.good.yml) and [docker-compose.bad.yml](docker-compose.bad.yml), you'll see that the only difference is whether the Node.js services use [Dockerfile.good](dockerfiles/Dockerfile.good) or [Dockerfile.bad](dockerfiles/Dockerfile.bad).

The only difference in the Dockerfiles is on line 30

`Dockerfile.good`

```Dockerfile
RUN turbo run build --no-cache --filter=${APP}^...
```

`Dockerfile.bad`

```Dockerfile
RUN turbo run build --no-cache --filter=${APP}
```

### Compare build times

```console
bash compare.sh
```
