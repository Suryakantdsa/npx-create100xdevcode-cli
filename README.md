# create-100xdevcode-turbo-app

**CLI to create a TurboRepo with an inbuilt HTTP WebSocket and Next.js app template.**

## Features

- Scaffold a **TurboRepo** project quickly.
- Includes an inbuilt **HTTP WebSocket** server.
- Preconfigured **Next.js** template for modern web development.
- Easy-to-use command-line interface (CLI).

## Installation

You can use `npx` to run the CLI without installing it globally:

```bash
npx create@100xdevcode <file_name>
```

Replace &lt;file_name&gt; with the name of the directory where you want the project to be created.If no name is provided, the default directory my-turbo-app will be used.

### Example OutputAfter running the CLI,

you will see a success message:
Success! Created your TurborepoTo get started:

- Change to the directory: cd &lt;file_name&gt;
- Run commands with Turborepo:&nbsp; &nbsp;
- npm run build: Build all apps and packages&nbsp; &nbsp;
- npm run dev: Develop all apps and packages

## Project StructureThe generated project will have the following structure:│

```bash
├── apps/
│   ├── web/       # Next.js application
│   └── server/    # WebSocket server
│
├── package.json   # Root package configuration
├── turbo.json     # TurboRepo configuration
└── README.md      # Project documentation
```

## Dependencies Installed

The CLI automatically installs the following dependencies in the generated project:

- Next.js for the web app.
- WebSocket libraries for real-time communication.
- Other essential tools required for development.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you have any questions or suggestions.

## Author👤 Suryakant Das

GitHub: [@Suryakantdsa](http://github.com/Suryakantdsa)
Twitter: [@_\_1996surya_](https://x.com/_1996surya)

```

```
