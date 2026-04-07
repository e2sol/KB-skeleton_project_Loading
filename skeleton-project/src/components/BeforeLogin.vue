<template>
  <div class="login-card">
    <h2 class="login-title">LOGIN</h2>
    <input type="text" class="login-input" placeholder="ID" />
    <input type="password" class="login-input" placeholder="Password" />
    <button class="login-btn" @click="">LOGIN</button>
    <p class="signup-link">회원가입하기</p>
  </div>
</template>

<script setup></script>

<style scoped>
.login-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  background: white;
  border: 2px solid #ce93d8;
  border-radius: 20px;
  padding: 40px 48px;
  width: 400px;
}

.login-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #9c6aba;
  margin: 0 0 8px;
  letter-spacing: 2px;
}

.login-input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #ce93d8;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  color: #555;
  box-sizing: border-box;
}

.login-input:focus {
  border-color: #9c6aba;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #ce93d8;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #ba68c8;
}

.signup-link {
  font-size: 0.75rem;
  color: #888;
  cursor: pointer;
  margin: 0;
}

.signup-link:hover {
  color: #9c6aba;
}
</style>
