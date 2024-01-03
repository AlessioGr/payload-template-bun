# Payload Blank Template

A blank template for [Payload](https://github.com/payloadcms/payload) and [Bun](https://bun.sh/) - a faster alternative to Node.JS - to help you get up and running quickly.

Click on "Use this template" to get started by initializing a new repository from this template:

![Screenshot 2024-01-03 at 21 20 46](https://github.com/AlessioGr/payload-template-bun/assets/70709113/ea0f5afc-a87e-4bac-be0e-54f09a4c7b1a)


## Features of this template

- Full compatibility with Bun
- Fully-working Dockerfile which uses Bun to install, build and serve your project
- Fully-configured, opinionated eslint and prettier configurations which are used inside of payload core and in my own projects
- Optimal IntelliJ & VS Code run configs
- Optimal tsconfig settings
- New lexical-based richtext editor (Beta) enabled by default
- Everything else is identical to the payload "blank" template, so you have a clean project to get started with

## Development

To spin up the project locally, follow these steps:

1. Make sure you have bun and node installed (there could be issues when trying to build the project if you only have bun and not node installed)
2. Clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env`
1. Next `bun i && bun dev`
1. Now `open http://localhost:3000/admin` to access the admin panel
1. Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app.

### Docker

This template comes with a Dockerfile which uses Bun to serve your project.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. First invoke the `payload build` script by running `bun run build` in your project root. This creates a `./build` directory with a production-ready admin bundle and a `./dist` directory.
1. Then run `bun serve` to run Bun in production and serve Payload from the `./build` directory.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
