<!-- src/components/ProductItem.vue -->
<template>
  <div class="product-card">
    <div v-if="rank" class="rank-badge">{{ rank }}위</div>

    <!-- 상품 대표 이미지와 찜 버튼 -->
    <div class="image-container">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <button class="wishlist-button" @click="toggleWishlist">
        <i :class="isWishlisted ? 'fas fa-heart' : 'far fa-heart'"></i>
      </button>
      <div v-if="product.isLive" class="live-badge">LIVE</div>
    </div>

    <!-- 상품 정보 -->
    <div class="product-info">
      <div class="top-info">
        <span class="achievement">{{ product.achievement }}%</span>
        <span class="end-date">{{ product.endDate }}</span>
      </div>
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="bottom-info">
        <span class="company-name">{{ product.company }}</span>
        <span class="price">{{ formatCurrency(product.price) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
      // props 유효성 검사 추가
      validator(value) {
        return [
          'image',
          'name',
          'price',
          'company',
          'achievement',
          'endDate'
        ].every(prop => prop in value)
      }
    },
    rank: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      isWishlisted: false
    };
  },
  methods: {
    toggleWishlist() {
      this.isWishlisted = !this.isWishlisted;
      // 여기에 찜하기 이벤트 발생 추가
      this.$emit('wishlist-toggle', {
        productId: this.product.id,
        isWishlisted: this.isWishlisted
      });
    },
    // filter를 method로 변경
    formatCurrency(value) {
      return new Intl.NumberFormat('ko-KR', { 
        style: 'currency', 
        currency: 'KRW' 
      }).format(value);
    }
  }
}
</script>
  
  <style scoped>
  .product-card {
    width: 220px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 0.5rem;
    position: relative;
  }
  
  .rank-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #ffc107;
    color: #fff;
    font-weight: bold;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
  }
  
  .image-container {
    position: relative;
    width: 100%;
    height: 150px;
  }
  
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .wishlist-button {
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .wishlist-button .fas {
    color: red;
  }
  
  .live-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    font-weight: bold;
    padding: 0.3rem 0.5rem;
    border-radius: 0 0 0 4px; 
  }
  
  .product-info {
    padding: 1rem;
  }
  
  .top-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #888;
    margin-bottom: 0.5rem;
  }
  
  .product-name {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin: 0.5rem 0;
  }
  
  .bottom-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #666;
  }
  
  .price {
    font-weight: bold;
    color: #333;
  }
  </style>
  