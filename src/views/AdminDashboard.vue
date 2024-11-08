<!-- src/views/AdminDashboard.vue -->
<template>
  <div class="dashboard">
    <!-- 사이드바 -->
    <aside class="sidebar">
      <h3>대시보드</h3>
      <ul class="menu">
        <li :class="{ active: isActive('/admin/dashboard') }">
          <router-link to="/admin/dashboard">대시보드</router-link>
        </li>
        <li :class="{ active: isActive('/admin/projects') }">
          <router-link to="/admin/projects">프로젝트 관리</router-link>
        </li>
        <li :class="{ active: isActive('/admin/users') }">
          <div class="submenu-title">
            <span>사용자 관리</span>
          </div>
          <ul class="submenu-list">
            <li :class="{ active: isActive('/admin/users/search') }">
              <router-link to="/admin/users/search">사용자 조회</router-link>
            </li>
            <li :class="{ active: isActive('/admin/users/reports') }">
              <router-link to="/admin/users/reports">신고 현황</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>

    <!-- 메인 콘텐츠 -->
    <main class="content">
      <!-- 상단 관리자 정보 -->
      <header>
        <span>접속중인 ID: {{ userId }} ({{ userName }})</span>
        <button @click="logout">로그아웃</button>
      </header>

      <!-- 통계 섹션 -->
      <section class="stats">
        <div class="stat-box">일 펀딩 수: {{ dailyFundingCount }}</div>
        <div class="stat-box">월 펀딩 수: {{ monthlyFundingCount }}</div>
        <div class="stat-box">연 누적 펀딩 수: {{ yearlyFundingCount }}</div>
        <div class="stat-box">승인 대기 중 펀딩 수: {{ pendingFundingCount }}</div>
      </section>

      <!-- 차트 섹션 -->
      <section class="charts">
        <div class="chart">
          <h3>월별 신규 가입자 수 (일반회원, 메이커, 총계)</h3>
          <LineChart :data="monthlySignUpData" />
        </div>
        <div class="chart">
          <h3>12개월 수익 실적</h3>
          <LineChart :data="revenueData" />
        </div>
        <div class="chart">
          <h3>어제자 인기 펀딩 (구매자 수 및 스트리밍 참가자 수)</h3>
          <BarChart :data="topFundingData" />
        </div>
        <div class="chart">
          <h3>판매자, 사용자, 전체 이용자 수</h3>
          <LineChart :data="userGrowthData" />
        </div>
        <div class="chart">
          <h3>전월 카테고리별 펀딩 수와 수익</h3>
          <BarChart :data="categoryFundingData" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
import BarChart from "../components/BarChart.vue";

export default {
  components: {
    LineChart,
    BarChart,
  },
  data() {
    return {
      userId: "admin123",
      userName: "관리자",
      dailyFundingCount: 5,
      monthlyFundingCount: 100,
      yearlyFundingCount: 1200,
      pendingFundingCount: 7,
      monthlySignUpData: {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        datasets: [
          {
            label: "일반회원",
            data: [12, 19, 3, 5, 2, 3, 17, 12, 9, 15, 11, 13],
            borderColor: "blue",
            fill: false,
          },
          {
            label: "메이커",
            data: [2, 4, 6, 8, 5, 6, 9, 5, 7, 3, 8, 10],
            borderColor: "green",
            fill: false,
          },
          {
            label: "총계",
            data: [14, 23, 9, 13, 7, 9, 26, 17, 16, 18, 19, 23],
            borderColor: "purple",
            fill: false,
          },
        ],
      },
      revenueData: {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        datasets: [
          {
            label: "수익",
            data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
            borderColor: "orange",
            fill: false,
          },
        ],
      },
      topFundingData: {
        labels: ["펀딩1", "펀딩2", "펀딩3", "펀딩4", "펀딩5", "펀딩6", "펀딩7", "펀딩8", "펀딩9", "펀딩10"],
        datasets: [
          {
            label: "구매자 수",
            data: [25, 20, 15, 18, 22, 27, 30, 35, 28, 19],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
          },
          {
            label: "스트리밍 참가자 수",
            data: [15, 12, 8, 10, 18, 15, 20, 22, 19, 10],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
      userGrowthData: {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        datasets: [
          {
            label: "판매자",
            data: [5, 10, 6, 12, 7, 15, 9, 18, 11, 13, 10, 17],
            borderColor: "green",
            fill: false,
          },
          {
            label: "사용자",
            data: [20, 22, 25, 27, 29, 32, 34, 36, 39, 41, 43, 45],
            borderColor: "blue",
            fill: false,
          },
          {
            label: "전체",
            data: [25, 32, 31, 39, 36, 47, 43, 54, 50, 54, 53, 62],
            borderColor: "purple",
            fill: false,
          },
        ],
      },
      categoryFundingData: {
        labels: ["DIY", "엔터테이먼트", "웨어러블", "주변기기", "생활가전", "주방가전", "스마트기기"],
        datasets: [
          {
            label: "펀딩 수",
            data: [25, 18, 30, 22, 27, 19, 23],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "펀딩 수익 (만원)",
            data: [300, 220, 500, 400, 310, 250, 450],
            backgroundColor: "rgba(255, 206, 86, 0.5)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
          },
        ],
      },
    };
  },
  methods: {
    logout() {
    
      this.$router.push('/admin');
    },
    isActive(path) {
      return this.$route.path.startsWith(path);
    },
  },
  watch: {
    $route(to) {
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  background-color: #f4f6f9;
}

.sidebar {
  width: 250px;
  background-color: #2f3a4f;
  color: white;
  padding: 1.5rem;
}

.sidebar h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.menu {
  list-style-type: none;
  padding: 0;
}

.menu li {
  position: relative;
}

.menu li a {
  display: block;
  padding: 1rem 1.5rem;
  color: #a9b7c6;
  text-decoration: none;
}

.menu li a:hover,
.menu li.active > a {
  background-color: #4b5b75;
  color: white;
}

.submenu-title {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: #a9b7c6;
}

.submenu-title:hover,
.menu li.active > .submenu-title {
  background-color: #4b5b75;
  color: white;
}

.submenu-list {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  display: block;
}

.submenu-list li a {
  padding: 0.5rem 2rem;
  color: #a9b7c6;
}

.submenu-list li a:hover,
.submenu-list li.active > a {
  background-color: #4b5b75;
  color: white;
}

.arrow-down::after {
  content: '';
  margin-left: auto;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
}

.content {
  flex: 1;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

header button {
  padding: 0.5rem 1rem;
  background-color: #0065cb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

header button:hover {
  background-color: #0055a3;
}

.stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-box {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
}

.charts {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.chart {
  flex: 1 1 45%;
}
</style>
