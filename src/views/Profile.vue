<!-- src/views/Profile.vue -->
<template>
    <div class="profile-page">
      <MypageSidebar :isUser="isUser" :isMaker="isMaker" />
      <div class="profile-content">
        <h2>회원정보 관리 및 수정</h2>
        <!-- 사용자 정보 표시 및 수정 -->
        <div class="profile-info">
          <label>이름: <input type="text" v-model="profile.name" :disabled="!isEditing" /></label>
          <label>전화번호: <input type="text" v-model="profile.phone" :disabled="!isEditing" /></label>
          <label>이메일: <input type="text" v-model="profile.email" :disabled="!isEditing" /></label>
          <label>주소: <input type="text" v-model="profile.address" :disabled="!isEditing" /></label>
          <button v-if="!isEditing" @click="startEdit">수정</button>
          <button v-if="isEditing" @click="saveProfile">저장</button>
          <button v-if="isEditing" @click="cancelEdit">취소</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MypageSidebar from "../components/MyPageSidebar.vue";
  
  export default {
    components: {
      MypageSidebar
    },
    data() {
      return {
        isUser: true,
        isMaker: false,
        profile: {
          name: "홍길동",
          phone: "010-1234-5678",
          email: "user@example.com",
          address: "서울시 강남구"
        },
        isEditing: false
      };
    },
    methods: {
      startEdit() {
        this.isEditing = true;
      },
      saveProfile() {
        this.isEditing = false;
      },
      cancelEdit() {
        this.isEditing = false;
      }
    }
  };
  </script>
  
  