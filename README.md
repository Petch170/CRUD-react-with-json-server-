# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## route App หัวข้อ edit และ view ต้องมี/:id ต่อท้ายด้วย เพราะเป็นการแก้ไข และดูของid นั้นๆ

## ติดตั้ง json server ไว้สร้างRest API แบบง่ายๆ ไว้ทดสอบ

pnpm install -g json-server

## เช็ค version

json-server --version

## สร้างไฟล์ db.json ใส่ข้อมูล และ run คำสั่งด้านล่าง รวมถึงเลือกport ที่ต้องการ

json-server --watch db.json --port 8000

หลังจากนั้นเอาEndpoints ที่ได้มาไปใช้งาน อย่าลืมrun เวลาใช้งาน
API ตัวอย่างนี้ที่genมาได้ (http://localhost:8000/students)

## trick

p\*4>strong จะได้ แบบด้านล่าง4ตัว

<p><strong></strong></p>

p\*3.btn จะได้ แบบด้านล่าง3ตัว

<p className="btn"></p>

## อย่าลืม ใส่"" ในjson ไม่อย่างนั้นข้อมูลจะไม่มา
