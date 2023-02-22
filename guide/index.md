# Getting Started

## Overview

Impostor Server.

## Browser Support

Browser support.

## Installing Impostor Server into your project

With NPM:

```bash
$ npm install impostor-server
```

With Yarn:

```bash
$ yarn add impostor-server
```

With PNPM:

```bash
$ pnpm add impostor-server
```

Package installed from the commands above consists of two part that you'd have imported based on where you're going to use the code in. Importing from `impostor-server` will gives you tree-shakable codes to use in client while `impostor-server/service-worker` the one to be used in Service Workers part.

::: danger Warning

Confusing the two part might result in your website to break. Especially if you import the client-side part of Impostor Server in Service Workers, in which case might result the Service Workers failed to run at all and might crash your website.

:::

```ts
// Usage example of Impostor Server in client-side code
import { toggleBodyClass } from "impostor-server";

toggleBodyClass("dark-mode");
```

```ts
// Usage example of Impostor Server in Service Workers
import { ImpostorServer } from "impostor-server/service-worker";

new ImpostorServer()
	.installServiceWorker({
		cacheName: `cache-${randomBuildVersion}`, // build version in hash
		precacheFiles: [
			...publicFiles // assets and files in `public` folder
		]
	})
	.activateServiceWorker()
	.cacheAPI("https://api.example.com/*")
	.start();
```
