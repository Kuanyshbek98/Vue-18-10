<template>
<div class="film-page">
  <div class="container" v-if="film">
    <h1>{{ film.title }}</h1>
    <div class="line" />
    <img
      :src="film.img"
      :alt="film.title"
    >
    <div class="section">
      <p class="section__title">Немного о сюжете:</p>
      <p class="section__description">{{ film.description }}</p>
    </div>
    <div class="section">
      <p class="section__title">Рейтинг:</p>
      <p class="section__description">{{ film.rating }}</p>
    </div>
    <div class="section">
      <p class="section__title">Актерский состав:</p>
      <p class="section__description">{{ film.actors.join(', ') }}</p>
    </div>
    <div class="section">
      <p class="section__title">Режисеры:</p>
      <p class="section__description">{{ film.directors.join(', ') }}</p>
    </div>
    <div class="line" />
    
    <div class="review">
      <h3>Смотрели данный фильм ?</h3>
      <p>Оставьте отзыв:</p>
      <ul>
        <li
          v-for="reaction in reactions"
          :key="reaction.id"
        >
          <button type="button" class="btn btn-outline-light">
            {{ reaction.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
  
</template>

<script>
// import films from '@/mocks/films' 
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      film: null
    }
  },
  computed: {
    ...mapGetters({
      getReactions: 'reactions/getReactions'
    }),
    reactions() {
      return this.getReactions
    }
  },
  created() {
    this.$load(async() => {
      this.film = (await this.$api.films.get(this.$route.params.id)).data
    })
  }
}
</script>

<style lang="scss" scoped>
.film-page {
  padding-bottom: 100px;
  .back {
    color: #ffffff;
    margin-left: 30px;
    margin-top: 30px;
  }
  h1 {
    color: #ffffff;
    padding-bottom: 15px;
    position: relative;
  }
  .line {
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
    margin-bottom: 45px;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 1160px;
    height: 600px;
    margin-bottom: 30px;
  }
  .section {
    &__title {
      color: #EB5804;
      font-weight: 700;
      font-size: 25px;
      margin-bottom: 10px;
    }
    &__description {
      color: #ffffff;
      font-size: 18px;
      line-height: 30px;
    }
  }
  .review {
    h3 {
      color: #ffffff;
    }
    p {
      font-weight: 600;
      font-size: 18px;
      color: #EB5804;
    }
    ul {
      padding-left: 0;
      list-style: none;
      display: flex;
      li {
        margin-right: 15px;
      }
    }
  }
}
</style>