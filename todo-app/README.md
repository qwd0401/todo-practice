# Todo App - 全栈待办事项应用

一个简约苹果风格的全栈 Todo 应用，支持增删改查、筛选和持久化存储。

## 技术栈

- **前端**: HTML5 + Tailwind CSS + Vanilla JavaScript
- **后端**: Node.js + Express
- **数据库**: SQLite3
- **部署**: Docker + Docker Compose

## 快速开始

### 本地开发

```bash
# 1. 进入后端目录
cd backend

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 直接打开前端文件
# 在浏览器中打开 frontend/index.html
```

后端运行在 http://localhost:3001

### Docker 部署

```bash
# 1. 进入部署目录
cd deploy

# 2. 启动服务
docker-compose up -d

# 3. 访问应用
# 打开 http://localhost:3001
```

### 生产环境部署

#### 使用 Docker（推荐）

```bash
# 构建并运行
docker build -f deploy/Dockerfile -t todo-app .
docker run -d -p 3001:3001 -v todo-data:/app/backend/data todo-app
```

#### 手动部署

```bash
# 后端
cd backend
npm ci --only=production
NODE_ENV=production npm start

# 使用 Nginx 或其他 Web 服务器托管 frontend/index.html
# 并配置反向代理到后端 API
```

## 项目结构

```
todo-app/
├── backend/           # 后端 API
│   ├── server.js      # Express 服务器
│   ├── package.json   # 依赖配置
│   └── todos.db       # SQLite 数据库（自动生成）
├── frontend/          # 前端页面
│   └── index.html     # 主页面
├── deploy/            # 部署配置
│   ├── Dockerfile
│   └── docker-compose.yml
└── README.md
```

## API 文档

| 方法 | 路径 | 描述 |
|------|------|------|
| GET | `/api/todos?filter=all\|active\|completed` | 获取待办列表 |
| POST | `/api/todos` | 创建待办 (body: { text }) |
| PATCH | `/api/todos/:id` | 更新完成状态 (body: { completed }) |
| DELETE | `/api/todos/:id` | 删除单个待办 |
| DELETE | `/api/todos` | 清除所有已完成 |

## 特性

- ✅ 苹果风格毛玻璃 UI 设计
- ✅ 实时筛选（全部/进行中/已完成）
- ✅ 平滑动画效果
- ✅ 数据持久化（SQLite）
- ✅ 响应式布局
- ✅ Docker 一键部署

## 环境变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| PORT | 3001 | 服务器端口 |
| NODE_ENV | development | 运行环境 |

## 许可证

MIT
