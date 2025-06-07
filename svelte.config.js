// filepath: /home/filiprybakov/Documents/DEV/finale/svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '',
    }
  }
};

export default config;
