import adapterStatic from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapterStatic({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: '',
    }
  }
};