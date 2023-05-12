<template>
  <div>
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
        
    }
  }
};
</script>

