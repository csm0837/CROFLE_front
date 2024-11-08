<!-- src/views/FundingParticipation.vue -->
<template>
    <div class="funding-participation">
      <MypageSidebar :isUser="true" :isMaker="false" />
      <div class="content">
        <h2>펀딩 ㅇㅇㅇㅇ참여내역</h2>
        <ul>
          <li v-for="funding in fundings" :key="funding.id">
            <span>{{ funding.title }}</span> - <span>{{ funding.date }}</span>
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
        fundings: [
          { id: 1, title: "펀딩 프로젝트 A", date: "2023-01-15" },
          { id: 2, title: "펀딩 프로젝트 B", date: "2023-02-20" }
        ]
      };
    }
  };
  </script>
  