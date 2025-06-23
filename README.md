<h1>🛒 Shopping List Project</h1>

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

  <li>Navigate to the project root folder:<br />
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

  <li>Create a <code>.env</code> file in the <strong>server</strong> folder with the following content:<br />
    <pre><code>MONGO_URI=mongodb://localhost:27017/shoppingList</code></pre>
  </li>

  <li>Create a <code>.env</code> file in the <strong>client</strong> folder with the following content:<br />
    <pre><code>VITE_API_URL=http://localhost:8000/api</code></pre>
  </li>

  <li>Run the backend server:<br />
    <code>cd server</code><br />
    <code>npm run dev</code>
  </li>

  <li>Run the frontend client:<br />
    <code>cd ../client</code><br />
    <code>npm run dev</code>
  </li>
</ol>

<p>Once both servers are running, open your browser and visit:<br />
  <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>
</p>

<hr />

<h2>✅ Features</h2>
<ul>
  <li>Add products and assign them to categories</li>
  <li>Group and display products by category</li>
  <li>Save shopping list with one click</li>
  <li>Clean responsive design with Bootstrap</li>
  <li>State management via Redux Toolkit</li>
</ul>


