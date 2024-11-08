<!-- src/views/Schedule.vue -->
<template>
    <div class="schedule-page">
      <h1>편성표</h1>
      <p>이번 주 라이브 방송 편성표를 확인하세요.</p>
  
      <!-- 방송 일정표 -->
      <table class="schedule-table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>시간</th>
            <th>방송 제목</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="schedule in schedules" :key="schedule.id">
            <td>{{ schedule.date }}</td>
            <td>{{ schedule.time }}</td>
            <td>{{ schedule.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Schedule",
    data() {
      return {
        schedules: [
          { id: 1, date: "2023-12-01", time: "14:00", title: "방송 A" },
          { id: 2, date: "2023-12-02", time: "16:00", title: "방송 B" },
          // 더 많은 방송 일정을 여기에 추가
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .schedule-page {
    padding: 2rem;
  }
  
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .schedule-table th,
  .schedule-table td {
    padding: 1rem;
    border: 1px solid #ddd;
    text-align: left;
  }
  </style>
  