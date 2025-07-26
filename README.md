
# 📝 Permalist - Permanent Task Manager

A clean and elegant task management web application to manage daily or permanent to-dos using **Node.js**, **Express**, **EJS**, and **PostgreSQL**.

---

## 🚀 Features

- 🟣 Create, Read, Update, Delete (CRUD) tasks
- ✅ Mark tasks as complete
- ✏️ Edit tasks in-place
- 📅 Organize tasks by date (e.g., "Today")
- 🎨 Stylish and modern UI with custom CSS
- 🗃️ Data persisted using PostgreSQL
- 📁 Modular EJS templating with partials

---

## 🛠️ Tech Stack

| Technology | Description              |
|------------|--------------------------|
| Node.js    | Backend runtime          |
| Express.js | Web server framework     |
| EJS        | Server-side rendering    |
| PostgreSQL | Relational DBMS          |
| CSS        | Custom styles for design |

---

## 📁 Project Structure

```
Permalist-Project/
├── node_modules/
├── public/
│   ├── assets/           # Images and icons
│   └── styles/           # CSS styling
├── views/
│   └── partials/
│       └── index.ejs     # Main page template
├── index.js              # Entry point (Express server)
├── package.json
└── package-lock.json
```

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/parthjadav26/Permalist-Project.git
   cd Permalist-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup PostgreSQL**
   - Create a database (e.g., `permalist_db`)
   - Create a table for tasks:
     ```sql
     CREATE TABLE items (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL
     );
     ```

4. **Start the server**
   ```bash
   node index.js
   ```

5. **Open in Browser**
   ```
   http://localhost:3000
   ```

---

## 📸 Preview
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/eb1becfb-5244-4b7d-ac77-e31ed7694e37" />


---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Parth Jadav**  
[GitHub: @parthjadav26](https://github.com/parthjadav26)
