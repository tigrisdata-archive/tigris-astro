# Astro Tigris SSR Demo

This is a demo of the Astro Tigris integration in SSR mode. It is based on the minimal Astro Starter Kit (i.e. `npm init astro -- --template minimal`).

## ✅ Prerequisites

- A [Tigris Cloud account](https://console.preview.tigrisdata.cloud/signup) or you can [self-host Tigris](https://www.tigrisdata.com/docs/concepts/platform/self-host/)

## 💻 Preparing Tigris

Create a new project in Tigris Cloud or self-hosted Tigris and record the project name, client Id and client secret.

Within your Tigris project, create a new collection named `users` and use the following schema:

```ts
{
    id: string (primary key) (auto-generated)
    username: string
    avatar: string // URL to the users avatar image
}
```

Finally, add a few documents to the `users` collection.

## 🚀 Getting started

Update the `astro.config.mjs` file with your Tigris project name, client Id and client secret.

```js
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    tigris({
      branch: "main",
      projectName: "YOUR_PROJECT_NAME",
      clientId: "YOUR_TIGRIS_CLIENT_ID",
      clientSecret: "YOUR_TIGRIS_CLIENT_SECRET",
    }),
  ],
});
```

That's it! You're ready to run some commands.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://www.tigrisdata.com/docs/) or jump into our [Discord server](https://tigris.dev/discord).
