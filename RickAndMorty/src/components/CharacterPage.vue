<template>
  <div>
    <button @click="goToHomePage" class="back-button">Go Back</button>
    <div v-if="character" class="character-card">
      <img :src="character.image" alt="Character Image">
      <ul>
        <li><strong>Name:</strong> {{ character.name }}</li>
        <li><strong>Status:</strong> {{ character.status }}</li>
        <li><strong>Gender:</strong> {{ character.gender }}</li>
        <li><strong>Location:</strong> {{ character.location.name }}</li>
      </ul>
    </div>
  </div>
</template>
<style>
.character-card {
  display: flex;
  align-items: center;
  text-align: left;
}

.character-card img {
  margin-right: 20px;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.character-info {
  list-style: none;
  padding: 0;
}

.character-info li {
  margin-bottom: 10px;
  font-size: 16px;
}

.back-button {
  background-color: #f5f5f5;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.back-button i {
  margin-right: 5px;
}

.back-button:hover {
  background-color: #e0e0e0;
}
</style>
<script>
export default {
  data() {
    return {
      character: null
    };
  },
  mounted() {
    this.fetchCharacter();
  },
  methods: {
    async fetchCharacter() {
      const characterId = this.$route.params.id;
      let data = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
          console.error(error);
        });
        
          this.character = data;
        
    },
        goToHomePage() {
      this.$router.push('/'); 
    },
  }
};
</script>

