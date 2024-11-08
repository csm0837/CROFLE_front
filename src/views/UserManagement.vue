<!-- src/views/UserManagement.vue -->
<template>
    <div class="management-page">
      <h2>사용자 관리</h2>
      <table>
        <thead>
          <tr>
            <th>사용자 ID</th>
            <th>이름</th>
            <th>역할</th>
            <th>상태</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.status }}</td>
            <td>
              <button @click="deactivateUser(user.id)">비활성화</button>
              <button @click="deleteUser(user.id)">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { id: 1, name: '홍길동', role: '일반 회원', status: '활성화' },
          { id: 2, name: '김철수', role: '메이커', status: '비활성화' },
          // 더미 데이터 추가 가능
        ]
      }
    },
    methods: {
      deactivateUser(id) {
        console.log(`사용자 ${id} 비활성화`)
      },
      deleteUser(id) {
        console.log(`사용자 ${id} 삭제`)
      }
    }
  }
  </script>
  
  <style scoped>
  .management-page {
    padding: 1rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 0.75rem;
    border: 1px solid #ddd;
    text-align: center;
  }
  button {
    margin: 0 0.25rem;
  }
  </style>
  