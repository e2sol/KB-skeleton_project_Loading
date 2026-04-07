<script setup>
import BeforeLogin from "@/components/BeforeLogin.vue";
import CenterImg from "@/assets/CenterImg.jpeg";
const Login = BeforeLogin;
</script>

<template>
  <div class="page">
    <div class="left-section">
      <img :src="CenterImg" alt="로딩중 로고" class="logo-img" />
    </div>
    <div class="right-section">
      <Login />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  min-height: 100vh;
  background-color: #fce4ec;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 29px,
      #f8bbd0 29px,
      #f8bbd0 30px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 29px,
      #f8bbd0 29px,
      #f8bbd0 30px
    );
}

.left-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 500px;
  height: 800px;
  object-fit: contain;
  mix-blend-mode: multiply;
  pointer-events: none;
  user-select: none;
}
</style>
