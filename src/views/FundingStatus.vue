<!-- src/views/FundingStatus.vue -->
<template>
    <div class="funding-status">
      <MypageSidebar :isUser="false" :isMaker="true" />
      <div class="content">
        <h2>펀딩 진행 내역</h2>
        <ul>
          <li v-for="project in projects" :key="project.id">
            <span>{{ project.title }}</span> - <span>{{ project.status }}</span>
          </li>
        </ul>
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
        projects: [
          { id: 1, title: "프로젝트 A", status: "진행 중" },
          { id: 2, title: "프로젝트 B", status: "완료" }
        ]
      };
    }
  };
  </script>
  