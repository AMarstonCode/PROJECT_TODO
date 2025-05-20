CRUD Frontend Playground

Welcome, fearless backend wranglers! This pre-built React + Vite frontend is your sandbox to connect your Express/MongoDB CRUD magic without fiddling with UI boilerplate.

Getting Started

Prerequisites

Node.js v14+ (or whatever your grandma approved)

Your Express server with Mongoose models running at http://localhost:5000/api

Enough caffeine to survive debugging

Installation

# Clone the repo (you know the drill...)
git clone <your-repo-url> crud-frontend
cd crud-frontend
npm install
npm run dev

Frontend should be live at http://localhost:5173 (or whatever port Vite picks).

Project Structure

src/
├─ api.js         # Axios instance (baseURL: http://localhost:5000/api)
├─ App.jsx        # React Router setup
└─ pages/
   ├─ List.jsx    # GET /items → list + Edit/Delete buttons
   ├─ View.jsx    # GET /items/:id → detail view
   ├─ Form.jsx    # POST /items & PUT /items/:id → create/edit form
   └─ NotFound.jsx

API Hooks (CRUD Ops)

Create: Form.jsx ⇒ POST /items

Read all: List.jsx ⇒ GET /items

Read one: View.jsx ⇒ GET /items/:id

Update: Form.jsx ⇒ PUT /items/:id

Delete: List.jsx ⇒ DELETE /items/:id

Point api.js at your Express app, and watch the magic happen.

Exercises

Spin up your Express server with Mongoose models.

Tweak api.js to match your API routes.

Create, read, update, delete items like a boss.

Break something. Fix it. Repeat until you’re unstoppable.

Next Steps

Add authentication (JWT, OAuth, whatever).

Style it with MUI, Tailwind, or interpretive dance.

Build a real-world feature: to-dos, blog posts, or cat memes!

Happy hacking, you code sorcerers!
