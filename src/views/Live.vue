<!-- src/views/Live.vue -->
<template>
    <div class="live-page">
      <h1>Live 방송</h1>
      <p>현재 진행 중인 라이브 방송 목록을 확인하세요.</p>
  
      <!-- 라이브 방송 목록 -->
      <div class="live-streams">
        <div v-for="stream in liveStreams" :key="stream.id" class="live-stream">
          <h3>{{ stream.title }}</h3>
          <p>{{ stream.description }}</p>
          <button @click="watchStream(stream.id)">시청하기</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Live",
    data() {
      return {
        liveStreams: [
          { id: 1, title: "Live 방송 1", description: "첫 번째 라이브 방송입니다." },
          { id: 2, title: "Live 방송 2", description: "두 번째 라이브 방송입니다." },
          // 더 많은 라이브 방송 데이터를 여기에 추가
        ],
      };
    },
    methods: {
      watchStream(id) {
        this.$router.push({ name: "StreamDetail", params: { id } }); // 시청 페이지로 이동
      },
    },
  };
  </script>
  
  <style scoped>
  .live-page {
    padding: 2rem;
  }
  
  .live-streams {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .live-stream {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  </style>
  