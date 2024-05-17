<template>
  <div class="warehouse-app">
    <div class="content">
      <h1>{{ welcomeMessage }}</h1>
      <p>{{ additionalMessage }}</p>
      <h1>Selamat Datang di Aplikasi Gudang Fashion Lombok</h1>
    </div>
  </div>
</template>

<style scoped>
.warehouse-app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #2C4E80, #2C4E80);
  color: #fff; /* Text color set to white */
  font-family: 'Arial', sans-serif;
}

.content {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

h1,
p {
  color: #fff; /* Text color set to white */
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

button {
  background-color: #ff4081;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e73370;
}
</style>
