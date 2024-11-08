<!-- src/views/MyPage.vue -->
<template>
  <div class="mypage">
    <!-- 헤더 -->
    <header-component />

    <div class="mypage-container">
      <!-- 사이드바 -->
      <aside class="sidebar">
        <h3>MY 페이지</h3>
        <ul class="menu">
          <!-- MY 정보 섹션 -->
          <li>
            <div class="submenu-title">
              <span>MY 정보</span>
            </div>
            <ul class="submenu-list">
              <li :class="{ active: activeSection === 'info' }">
                <a @click="activeSection = 'info'">회원정보 관리/수정</a>
              </li>
            </ul>
          </li>

          <!-- MY 활동 섹션 -->
          <li>
            <div class="submenu-title">
              <span>MY 활동</span>
            </div>
            <ul class="submenu-list">
              <li v-if="role === 'user'" :class="{ active: activeSection === 'participation' }">
                <a @click="activeSection = 'participation'">펀딩 참여내역</a>
              </li>
              <li v-if="role === 'user'" :class="{ active: activeSection === 'wishlist' }">
                <a @click="activeSection = 'wishlist'">찜 리스트</a>
              </li>
              <li v-if="role === 'user'" :class="{ active: activeSection === 'events' }">
                <a @click="activeSection = 'events'">이벤트 당첨 내역</a>
              </li>
              <li v-if="role === 'maker'" :class="{ active: activeSection === 'ongoing' }">
                <a @click="activeSection = 'ongoing'">펀딩 진행 내역</a>
              </li>
              <li v-if="role === 'maker'" :class="{ active: activeSection === 'funding' }">
                <a @click="activeSection = 'funding'">펀딩하기</a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <!-- 메인 콘텐츠 -->
      <main class="content">
        <div v-if="activeSection === 'participation' && role === 'user'">
          <h2>펀딩 참여내역</h2>
          <!-- 펀딩 참여내역 컴포넌트 -->
        </div>
        <div v-if="activeSection === 'ongoing' && role === 'maker'">
          <h2>펀딩 진행 내역</h2>
          <!-- 펀딩 진행 내역 컴포넌트 -->
        </div>

        <!-- 회원 정보 수정 화면 -->
        <div v-if="activeSection === 'info'">
          <h2>회원정보 관리/수정</h2>
          <div class="user-info">
            <div>
              <label>이름</label>
              <input type="text" v-model="userData.name" :disabled="!isEditing" />
            </div>
            <div>
              <label>전화번호</label>
              <input type="text" v-model="userData.phone" :disabled="!isEditing" />
            </div>
            <div>
              <label>이메일</label>
              <input type="text" v-model="userData.email" :disabled="!isEditing" />
              <button v-if="isEditing" @click="verifyEmail">인증하기</button>
            </div>
            <div>
              <label>우편번호</label>
              <input type="text" v-model="userData.zipCode" disabled />
            </div>
            <div>
              <label>주소</label>
              <input type="text" v-model="userData.address" disabled />
              <button v-if="isEditing" @click="searchAddress">주소 조회</button>
            </div>
            <div>
              <label>상세 주소</label>
              <input type="text" v-model="userData.detailAddress" :disabled="!isEditing" />
            </div>
            <div>
              <label>소셜 로그인</label>
              <input type="text" v-model="userData.socialLogin" disabled />
            </div>
          </div>
          <div class="button-group">
            <button v-if="!isEditing" @click="isEditing = true">수정</button>
            <button v-if="isEditing" @click="saveChanges">저장</button>
            <button v-if="isEditing" @click="deleteAccount">탈퇴</button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';

export default {
  name: 'MyPage',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      activeSection: this.role === 'user' ? 'participation' : 'ongoing',
      role: 'user', // 'user' 또는 'maker'로 설정
      isEditing: false,
      userData: {
        name: '홍길동',
        phone: '010-1234-5678',
        email: 'user@example.com',
        zipCode: '12345',
        address: '서울특별시 강남구',
        detailAddress: '101호',
        socialLogin: '카카오' // '카카오', '구글', '일반' 등
      }
    };
  },
  methods: {
    verifyEmail() {
      alert("이메일 인증이 필요합니다.");
    },
    searchAddress() {
      alert("주소 조회 기능이 활성화되었습니다.");
    },
    saveChanges() {
      alert("회원 정보가 저장되었습니다.");
      this.isEditing = false;
    },
    deleteAccount() {
      if (confirm("정말로 탈퇴하시겠습니까?")) {
        alert("회원 탈퇴가 완료되었습니다.");
      }
    }
  }
};
</script>

<style scoped>
/* 기본 스타일 */
.mypage {
  background-color: #f4f6f9;
}

.mypage-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
}

.sidebar {
  width: 250px;
  background-color: #2f3a4f;
  color: white;
  padding: 1.5rem;
  height: calc(100vh - 100px); /* 헤더 높이만큼 뺀 값으로 설정 */
  position: sticky;
  top: 0;
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
  padding: 1rem 1.5rem;
  color: #a9b7c6;
  font-weight: bold;
}

.submenu-list li a {
  padding: 0.5rem 2rem;
}

.submenu-list li a:hover,
.submenu-list li.active > a {
  background-color: #4b5b75;
  color: white;
}

.content {
  flex: 1;
  padding: 2rem;
}

.user-info label {
  display: block;
  margin-top: 1rem;
}

.user-info input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button-group {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
</style>
