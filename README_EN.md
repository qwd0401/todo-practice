# Todo App

A clean and elegant todo application with Apple-style design, supporting both standalone frontend (localStorage) and full-stack deployment modes.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20Tailwind%20CSS%20%7C%20Node.js-green)
![License](https://img.shields.io/badge/license-MIT-yellow)

## ✨ Features

- **Apple-style UI** - Glassmorphism effects, rounded corners, smooth animations
- **Task Management** - Add, complete, and delete todos
- **Smart Filtering** - All / Active / Completed
- **Data Persistence** - Supports localStorage or backend database storage
- **Responsive Design** - Works on desktop and mobile devices
- **Keyboard Shortcuts** - Press Enter to quickly add tasks

## 📁 Project Structure

```
.
├── todo.html              # Standalone frontend version (localStorage)
├── todo-app/              # Full-stack version
│   ├── backend/           # Node.js + Express backend
│   │   ├── server.js      # API service
│   │   ├── package.json   # Dependencies
│   │   └── node_modules/  # Dependencies directory
│   ├── frontend/          # Frontend pages
│   │   └── index.html     # Main page (connects to backend API)
│   ├── deploy/            # Deployment configs
│   │   ├── Dockerfile
│   │   └── docker-compose.yml
│   └── README.md          # Full-stack detailed docs
└── README.md              # Chinese README
└── README_EN.md           # This file
```

## 🚀 Quick Start

### Option 1: Standalone Frontend (Easiest)

No installation required. Simply open `todo.html` in your browser.

```bash
# Or start a local server
python -m http.server 8080
# Visit http://localhost:8080/todo.html
```

> Data is stored in browser localStorage and persists after page refresh.

### Option 2: Full-Stack (Recommended)

Requires Node.js environment.

```bash
# 1. Navigate to backend directory
cd todo-app/backend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Access the app
# Open http://localhost:3001
```

### Option 3: Docker Deployment

```bash
# Navigate to deploy directory
cd todo-app/deploy

# Start services
docker-compose up -d

# Visit http://localhost:3001
```

## 📸 Preview

```
┌─────────────────────────────┐
│  Todos           Oct 24     │
│  3 pending, 5 total          │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ Add new task...     [+]│ │
│ └─────────────────────────┘ │
├─────────────────────────────┤
│ ┌──────┬────────┬────────┐  │
│ │ All  │ Active │ Done   │  │
│ └──────┴────────┴────────┘  │
├─────────────────────────────┤
│  ○ Finish project docs       │
│  ✓ Reply to client email     │
│  ○ Weekly report             │
├─────────────────────────────┤
│        Clear Completed       │
└─────────────────────────────┘
```

## 🔧 API Documentation (Full-Stack)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/todos` | Get todo list |
| POST | `/api/todos` | Create a todo |
| PATCH | `/api/todos/:id` | Update completion status |
| DELETE | `/api/todos/:id` | Delete a single todo |
| DELETE | `/api/todos` | Clear all completed |

## 🛠 Tech Stack

- **Frontend**: HTML5 + Tailwind CSS + Vanilla JavaScript
- **Backend**: Node.js + Express
- **Deployment**: Docker + Docker Compose

## 📄 File Descriptions

| File | Description |
|------|-------------|
| `todo.html` | Standalone frontend, runs independently, uses localStorage |
| `todo-app/frontend/index.html` | Full-stack frontend, requires backend |
| `todo-app/backend/server.js` | Express backend service |
| `todo-app/deploy/Dockerfile` | Docker build configuration |
| `todo-app/deploy/docker-compose.yml` | Docker Compose orchestration |

## 📜 License

MIT License

## 🤝 Contributing

Issues and Pull Requests are welcome!
