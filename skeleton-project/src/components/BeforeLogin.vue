<template>
  <div>
    <label for="inputPassword5" class="form-label" `>ID</label>
    <input
      type="text"
      id="inputPassword5"
      class="form-control"
      aria-describedby="passwordHelpBlock"
      placeholder="ID"
    />
  </div>
  <label for="inputPassword5" class="form-label">Password</label>
  <input
    type="password"
    id="inputPassword5"
    class="form-control"
    aria-describedby="passwordHelpBlock"
    placeholder="password"
  />
  <div id="passwordHelpBlock" class="form-text">
    비밀번호는 8자 이상으로 설정해주세요.
  </div>
  <button @click="">log in</button>
</template>
<script setup></script>
