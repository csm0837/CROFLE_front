<template>
    <header>
      접속중인 ID : {{ userId }} ({{ userName }})
      <button @click="logout">로그아웃</button>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: ['userId', 'userName'],
    methods: {
      logout() {
        console.log('Logging out');
      }
    }
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #0065cb;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #004a99;
  }
  </style>
  