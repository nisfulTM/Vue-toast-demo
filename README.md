
# Vue Toast Demo

A simple demo project built using **Vue 3**, **Vite**, **TailwindCSS**, and a custom **Toast Notification system**.  
Includes examples of integrating **Quasar components**, Storybook, and Chromatic for UI testing.

## 🚀 Tech Stack
- Vue 3 (Composition API)
- Vite
- Tailwind CSS v4
- Quasar Framework
- Storybook
- Chromatic (Cloud UI testing)
- Vitest + Playwright

## 📌 Prerequisites
### ✔ Node Version Required
This project **requires Node 22.21.0** (or higher).

Check your version:
```
node -v
```
Install via nvm:
```
nvm install 22.21.0
nvm use 22.21.0
```

## 📦 Installation
```
git clone <repo-url>
cd vue-toast-demo
npm install
```

## ▶️ Run Development Server
```
npm run dev
```

## 🎨 TailwindCSS
Tailwind is preconfigured with postcss + autoprefixer.

## 🌟 Quasar Setup
Quasar is enabled in `main.js`:
```
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
app.use(Quasar)
```

## 🔔 Toast Notification System
Uses:
- useToast() composable
- Toast.vue component

Example:
```
showToast('Success!', 'success')
```

## 📚 Storybook
Start Storybook:
```
npm run storybook
```

## 🟣 Chromatic Deployment
```
npm run chromatic
```

## 🧪 Testing
Run tests:
```
npm run test
```

## 📁 Project Structure
```
src/
 ├─ components/
 │   ├─ Toast.vue
 │   ├─ QuasarDemo.vue
 ├─ composables/
 │   ├─ useToast.js
 ├─ App.vue
 ├─ main.js
```

## 📦 Build
```
npm run build
npm run preview
```
