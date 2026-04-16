# Recipe Finder

A React + TypeScript + Vite frontend for a Recipe Finder app. The repository currently contains a single frontend app inside `frontend/` and a root-level Docker Compose file for running the project in a containerized dev setup.

## Tech Stack

- React 19
- TypeScript
- Vite
- Material UI (MUI)
- Docker / Docker Compose

## Project Structure

```text
recipe-finder/
├── docker-compose.yml
└── frontend/
    ├── Dockerfile
    ├── package.json
    ├── public/
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── ...
    └── vite.config.ts
```

## Prerequisites

Before starting, make sure you have one of this setup ready:

### Run with Docker
- Docker Desktop or Docker Engine
- Docker Compose

## Getting the Project

Clone the repo:

```bash
git clone https://github.com/dtharpeuno/recipe-finder.git
cd recipe-finder
```

## Run with Docker Compose

From the repository root:

```bash
docker compose up --build
```

Then open:

```text
http://localhost:3000
```

### Stop the containers

```bash
docker compose down
```

## How the Docker Setup Works

- The root `docker-compose.yml` builds the app from `./frontend`
- Port `3000` on your machine maps to Vite's default port `5173` inside the container
- The `frontend` folder is mounted as a volume so code changes update the running container
- Polling environment variables are enabled to help file watching work in containerized environments

## Current App State

Right now, the checked-in `src/App.tsx` is still the default Vite/React starter component. That means the repo is set up correctly as a frontend foundation, but the main Recipe Finder UI has not been wired into `App.tsx` yet.

## Troubleshooting

### `docker compose` is not found
Install Docker Compose or use a Docker Desktop version that includes it.

### Dependencies are missing
From `frontend/`, run:

```bash
npm install
```

### Port already in use
- Local Vite dev server defaults to `5173`
- Docker Compose maps the app to `3000`

If one of those ports is busy, stop the other process or change the port mapping.

### Changes are not updating in Docker
The repo already includes polling environment variables in Compose, which usually fixes file-watch issues in containers. If live reload still lags, restart the container:

```bash
docker compose down
docker compose up --build
```
