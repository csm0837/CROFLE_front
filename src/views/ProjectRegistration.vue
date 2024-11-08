<!-- src/views/ProjectRegistration.vue -->
<template>
  <div class="project-registration">
    <MypageSidebar :isUser="false" :isMaker="true" />
    <div class="content">
      <h2>프로젝트 등록</h2>
      <form @submit.prevent="registerProject">
        <label>프로젝트 이름: <input v-model="project.name" /></label>
        <label>카테고리: <input v-model="project.category" /></label>
        <button type="submit">등록</button>
      </form>
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
      project: {
        name: "",
        category: ""
      }
    };
  },
  methods: {
    registerProject() {
      console.log("프로젝트 등록:", this.project);
    }
  }
};
</script>
