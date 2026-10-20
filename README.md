# Car Sales Management

A digital system for managing vehicles, customers and services, built for **CS23432 – Software Construction** (Rajalakshmi Engineering College).

- **Live site:** https://carmgmt-15074.azurewebsites.net
- **Azure Boards:** 5 epics, 13 features, 28 user stories in 4 sprints
- **Hosting:** Azure App Service (Linux, Node.js) and Azure SQL Database (serverless), Central India

## Project structure

```
241901054-SOFTWARE-CONSTRUCTION_CAR_SALES_MANAGEMENT/
├── azure-pipelines.yml      # Azure Pipelines CI: install Node, run tests, publish artifact
├── package.json             # npm scripts: start, test
├── README.md
├── .gitignore
├── src/
│   ├── server.js            # HTTP server (home page and /health endpoint)
│   └── public/
│       └── index.html       # Car Sales Management home page
├── tests/
│   └── server.test.js       # Unit tests (node:test)
└── docs/
    └── uml/
        └── README.md        # Links to the UML, architecture and ER diagrams
```

## Naming conventions

| Item | Convention | Example |
|---|---|---|
| Folders | lowercase | `src`, `tests`, `docs/uml` |
| Source files | lowercase, dot-separated purpose | `server.js`, `server.test.js` |
| Test files | `<module>.test.js` in `tests/` | `tests/server.test.js` |
| Functions and variables | camelCase | `createServer`, `handleRequest` |
| Branches | `main` for releases, `feature/<story-id>-<short-name>` for work | `feature/9-book-test-drive` |
| Commit messages | `<type>: <summary>` | `feat: add booking API` |

## Run locally

```
npm test     # run unit tests
npm start    # start the server on http://localhost:8080
```
