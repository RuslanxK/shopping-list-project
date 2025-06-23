<h1>🛒 Shopping List Project</h1>

<p><strong>Live Version:</strong> 
  <a href="https://shopping-list-project-tkjs.onrender.com/" target="_blank">
    https://shopping-list-project-tkjs.onrender.com
  </a>
</p>

<p>A full-stack web application to manage your shopping list by categories. Built with:</p>
<ul>
  <li><strong>Frontend:</strong> React, TypeScript, Redux Toolkit, Vite</li>
  <li><strong>Backend:</strong> Node.js, Express, TypeORM, MongoDB</li>
</ul>

<hr />

<h2>🚀 Getting Started</h2>

<ol>
  <li>Clone the repository:<br />
    <code>git clone https://github.com/RuslanxK/shopping-list-project.git</code>
  </li>

  <li>Navigate to the project folder:<br />
    <code>cd shopping-list-project</code>
  </li>

  <li>Install server dependencies:<br />
    <code>cd server</code><br />
    <code>npm install</code>
  </li>

  <li>Install client dependencies:<br />
    <code>cd ../client</code><br />
    <code>npm install</code>
  </li>

  <li>Create a <code>.env</code> file in the <strong>server</strong> folder:<br />
    <pre><code>MONGO_URI=mongodb://localhost:27017/shoppingList</code></pre>
  </li>

  <li>Create a <code>.env</code> file in the <strong>client</strong> folder:<br />
    <pre><code>VITE_API_URL=http://localhost:8000/api</code></pre>
  </li>

  <li>Start the backend server:<br />
    <code>cd server</code><br />
    <code>npm run dev</code>
  </li>

  <li>Start the frontend client:<br />
    <code>cd ../client</code><br />
    <code>npm run dev</code>
  </li>
</ol>

<p>Once both are running, open your browser and go to:<br />
  <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>
</p>

<hr />

<h2>✅ Features</h2>
<ul>
  <li>Add products and assign them to categories</li>
  <li>Group and display products by category</li>
  <li>Save your entire shopping list with a single click</li>
  <li>Responsive design with Bootstrap</li>
  <li>State management using Redux Toolkit</li>
</ul>
