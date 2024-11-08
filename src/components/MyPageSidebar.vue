<!-- src/components/MypageSidebar.vue -->
<template>
    <aside class="sidebar">
      <h3>MY 페이지</h3>
      <ul class="menu">
        <li>
          <router-link to="/mypage/profile">회원정보 관리 및 수정</router-link>
        </li>
        <li>
          <div class="submenu-title">
            <span>MY 활동</span>
          </div>
          <ul class="submenu-list">
            <li v-if="isUser">
              <router-link to="/mypage/funding-participation">펀딩 참여내역</router-link> 
            </li>
            <li v-if="isUser">
              <router-link to="/mypage/wishlist">찜 리스트</router-link>
            </li>
            <li v-if="isUser">
              <router-link to="/mypage/event-wins">이벤트 당첨내역</router-link>
            </li>
            <li v-if="isMaker">
              <router-link to="/mypage/funding-status">펀딩 진행 내역</router-link>
            </li>
            <li v-if="isMaker">
              <router-link to="/mypage/project-registration">프로젝트 등록</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    props: {
      isUser: Boolean,
      isMaker: Boolean
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #2f3a4f;
    color: white;
    padding: 1.5rem;
  }
  .menu {
    list-style-type: none;
    padding: 0;
  }
  .submenu-title {
    padding: 0.75rem 1rem;
  }
  .submenu-list {
    padding-left: 1.5rem;
  }
  </style>
  