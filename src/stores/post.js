import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: []
  }),
  actions: {
    addPost(post) {
      this.posts.push(post)
    }
  },
  getters: {
    postCount: (state) => state.posts.length
  }
})