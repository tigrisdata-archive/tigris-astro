# Tigris Astro Integration

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/tigrisdata/tigris-astro/CI.yml?label=build&logo=github)](https://github.com/tigrisdata/tigris-astro/actions/workflows/CI.yml) [![npm](https://img.shields.io/npm/v/@tigrisdata/astro?logo=npm&logoColor=white)](https://www.npmjs.com/package/@tigrisdata/astro) [![Twitter Follow](https://img.shields.io/twitter/follow/tigrisdata?style=social)](https://twitter.com/tigrisdata) [![Discord](https://img.shields.io/discord/1033842669983633488?color=%23596fff&label=Discord&logo=discord&logoColor=%23ffffff)](https://tigris.dev/discord)

## 💡 What is Tigris?

> If you are first-time user of Tigris, read the [Getting Started](https://www.tigrisdata.com/docs/quickstarts/quickstart-typescript/?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-astro) guide to cover the basics.

## 🔨 Installation

Install `@tigrisdata/astro`:

```bash
npm install @tigrisdata/astro
# yarn add @tigrisdata/astro
```

Add the following code to `astro.config.mjs` and replace the `YOUR_TIGRIS_PROJECT_NAME`, `YOUR_TIGRIS_CLIENT_ID`, and `YOUR_TIGRIS_CLIENT_SECRET` with the values from your Tigris project.

```js
import { defineConfig } from "astro/config";
import tigris from "@tigrisdata/astro";

export default defineConfig({
  integrations: [
    tigris({
      branch: "main",
      projectName: "YOUR_TIGRIS_PROJECT_NAME",
      clientId: "YOUR_TIGRIS_CLIENT_ID",
      clientSecret: "YOUR_TIGRIS_CLIENT_SECRET",
    }),
  ],
});
```

### Options

When you initialize the integration, you can pass all [_@tigrisdata/core_ options](https://github.com/tigrisdata/tigris-client-ts/blob/3db0f1383f8d384f726ff9a836535a58298127f5/src/tigris.ts#L45).

## 🚀 Getting Started

Tigris collections are available with the `useTigrisCollection` hook:

```ts
import { useTigrisCollection } from "@tigrisdata/astro";
```

### Fetching All Documents

You can fetch (and filter) all documents from a collection using the `findMany` method:

```ts
---
import { useTigrisCollection } from "@tigrisdata/astro";
import { User } from "./types/User";

const userCollection = await useTigrisCollection<User>("users");
const usersCursor = await userCollection.findMany({});
const users = await usersCursor.toArray();
---

{users.map(user =>
<div>{user.name}</div>
)}
```

### Fetching One Document

You can fetch one document from a collection using the `findOne` method:

```ts
---
import { useTigrisCollection } from "@tigrisdata/astro";
import { User } from "./types/User";

const userCollection = await useTigrisCollection<User>("users");
const user = await userCollection.findOne({
    filter: {
        id: "1234"
    }
});
---

<div>{user.name}</div>
```

## 👀 Want to learn more?

Feel free to check [our documentation](https://www.tigrisdata.com/docs/) or jump into our [Discord server](https://tigris.dev/discord).
