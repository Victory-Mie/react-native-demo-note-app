# 运行指南

## **🖥️ 1. 后端 (Node.js + MongoDB)**

### **1.1 安装 Node.js**

- **下载地址**：[Node.js 官网](https://nodejs.org/)
- **推荐版本**：LTS 版本 (长期支持)  
- **安装完成后，检查是否成功安装：**

  ```sh
  node -v   # 检查 Node.js 版本
  npm -v    # 检查 npm 版本
  ```

### **1.2 安装 MongoDB**

 **云端数据库**（推荐，免安装）：

- **注册**：[MongoDB Atlas](https://www.mongodb.com/atlas)（免费）
- **创建数据库**
- **获取 MongoDB 连接字符串** (例如：`mongodb+srv://yourusername:password@cluster.mongodb.net/notes-db`)
- **在notes-backend文件夹下新建.env文件：**

  ```sh
    MONGO_URI=mongodb+srv://yourusername:password@cluster.mongodb.net/notes-db

  ```

---

## **📱 2. 前端 (React Native + Expo)**

### **2.1 安装 Expo CLI**

Expo 让你快速运行 React Native 应用，避免复杂的 Android/iOS 配置。  

- **安装 Expo CLI：**

  ```sh
  npm install -g expo-cli
  ```

- **检查是否安装成功：**

  ```sh
  expo --version
  ```

### **2.2 下载 Expo Go (手机 APP)**

Expo Go 允许你在 **手机** 上实时预览 React Native 应用：

- **iOS 用户**：[App Store 下载 Expo Go](https://apps.apple.com/us/app/expo-go/id982107779)
- **Android 用户**：[Google Play 下载 Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

## **🚀 3. 运行 Demo**

### **3.1 启动后端**

```sh
cd notes-backend
node server.js
```

或使用 `nodemon` 自动重启：

```sh
npm install -g nodemon
nodemon server.js
```

### **3.2 启动前端**

```sh
cd notes-app
npm install
npm start
```

然后：

- **用 Expo Go 扫描二维码，在手机上运行**
- **或者在 Web 浏览器中运行**
