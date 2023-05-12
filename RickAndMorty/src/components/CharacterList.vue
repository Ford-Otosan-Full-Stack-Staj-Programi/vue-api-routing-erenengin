<template>
  <div>
    <ul class="character-list">
      <li v-for="character in characters" :key="character.id">
        <div class="character-card">
          <img :src="character.image" alt="Character Image">
          <span class="character-name" @click="goToCharacterPage(character.id)">
            {{ character.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
   async fetchCharacters() {
     let data = await fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data =>data)
        .catch(error => {
          console.error("özür dilerim tolga");
        });
        this.characters = data.results;
    },
    goToCharacterPage(characterId) {
      this.$router.push(`/character/${characterId}`);
    },
  },
};
</script>

<style>
.character-list {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.character-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.character-card img {
  margin-bottom: 10px;
}

.character-name {
  font-weight: bold;
  cursor: pointer; 
  text-decoration: underline; 
}
</style>