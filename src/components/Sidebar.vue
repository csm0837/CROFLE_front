<template>
  <aside class="sidebar">
    <h3>대시보드</h3>
    <ul class="menu">
      <li><router-link to="/admin">대시보드</router-link></li>
      <li><router-link to="/admin/projects">프로젝트 관리</router-link></li>
      <li><router-link to="/admin/users">사용자 관리</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style scoped>
.sidebar {
  width: 240px;
  background-color: #0065cb;
  color: white;
  padding: 1.5rem;
}

.sidebar h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #f8f9fa;
}

.menu {
  list-style-type: none;
  padding: 0;
}

.menu li {
  padding: 1rem 1.5rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu li:hover {
  background-color: #495057;
}

.menu li.router-link-active {
  background-color: #495057;
  font-weight: bold;
}
</style>
