# Todo App - 待办事项应用

[![中文](https://img.shields.io/badge/语言-中文-red)](README.md)
[![English](https://img.shields.io/badge/Language-English-blue)](README_EN.md)

一个简洁优雅的待办事项应用，采用苹果风格设计，支持纯前端本地存储和全栈部署两种模式。

![版本](https://img.shields.io/badge/version-1.0.0-blue)
![技术栈](https://img.shields.io/badge/tech-HTML5%20%7C%20Tailwind%20CSS%20%7C%20Node.js-green)
![许可证](https://img.shields.io/badge/license-MIT-yellow)

## ✨ 特性

- **苹果风格 UI** - 毛玻璃效果、圆角设计、流畅动画
- **任务管理** - 添加、完成、删除待办事项
- **智能筛选** - 全部 / 进行中 / 已完成
- **数据持久化** - 支持 localStorage 本地存储或后端数据库存储
- **响应式设计** - 适配桌面和移动设备
- **快捷键支持** - 按 Enter 快速添加任务

## 📁 项目结构

```
.
├── todo.html              # 纯前端版本（独立运行，localStorage 存储）
├── todo-app/              # 全栈版本
│   ├── backend/           # Node.js + Express 后端
│   │   ├── server.js      # API 服务
│   │   ├── package.json   # 依赖配置
│   │   └── node_modules/  # 依赖目录
│   ├── frontend/          # 前端页面
│   │   └── index.html     # 主页面（连接后端 API）
│   ├── deploy/            # 部署配置
│   │   ├── Dockerfile
│   │   └── docker-compose.yml
│   └── README.md          # 全栈版详细文档
└── README.md              # 本文件
```

## 🚀 快速开始

### 方式一：纯前端版本（最简单）

无需安装，直接在浏览器中打开 `todo.html` 即可使用。

```bash
# 或者启动本地服务器
python -m http.server 8080
# 访问 http://localhost:8080/todo.html
```

> 数据存储在浏览器 localStorage 中，刷新页面不会丢失。

### 方式二：全栈版本（推荐）

需要 Node.js 环境。

```bash
# 1. 进入后端目录
cd todo-app/backend

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 访问应用
# 打开 http://localhost:3001
```

### 方式三：Docker 部署

```bash
# 进入部署目录
cd todo-app/deploy

# 启动服务
docker-compose up -d

# 访问 http://localhost:3001
```

## 📸 界面预览

```
┌─────────────────────────────┐
│  待办事项        10月24日    │
│  3 个待办任务，共 5 个       │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ 添加新任务...        [+]│ │
│ └─────────────────────────┘ │
├─────────────────────────────┤
│ ┌──────┬──────┬──────────┐  │
│ │ 全部 │进行中│  已完成   │  │
│ └──────┴──────┴──────────┘  │
├─────────────────────────────┤
│  ○ 完成项目文档              │
│  ✓ 回复客户邮件              │
│  ○ 整理周报                  │
├─────────────────────────────┤
│        清除已完成            │
└─────────────────────────────┘
```

## 🔧 API 文档（全栈版）

| 方法 | 路径 | 描述 |
|------|------|------|
| GET | `/api/todos` | 获取待办列表 |
| POST | `/api/todos` | 创建待办 |
| PATCH | `/api/todos/:id` | 更新完成状态 |
| DELETE | `/api/todos/:id` | 删除单个待办 |
| DELETE | `/api/todos` | 清除所有已完成 |

## 🛠 技术栈

- **前端**: HTML5 + Tailwind CSS + Vanilla JavaScript
- **后端**: Node.js + Express
- **部署**: Docker + Docker Compose

## 📄 文件说明

| 文件 | 说明 |
|------|------|
| `todo.html` | 纯前端版本，独立运行，数据存 localStorage |
| `todo-app/frontend/index.html` | 全栈版前端，需配合后端使用 |
| `todo-app/backend/server.js` | Express 后端服务 |
| `todo-app/deploy/Dockerfile` | Docker 构建配置 |
| `todo-app/deploy/docker-compose.yml` | Docker Compose 编排 |

## 📜 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
