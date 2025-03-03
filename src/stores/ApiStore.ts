import { defineStore } from 'pinia';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export const useApiStore = defineStore('api', {
  state: () => ({
    categories: [] as Category[],
    posts: [] as Post[],
    selectedCategory: null as Category | null,
    selectedPost: null as Post | null,
    currentPage: 1,
    postsPerPage: 5,
    totalPosts: 0,
  }),
  actions: {
    async fetchCategories(): Promise<void> {
      try {
        const response = await axios.get('https://smwordpress.smartexweb.kz/wp-json/wp/v2/categories');
        this.categories = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPosts(): Promise<void> {
      try {
        const response = await axios.get('https://smwordpress.smartexweb.kz/wp-json/wp/v2/posts', {
          params: {
            per_page: this.postsPerPage,
            page: this.currentPage,
          }
        });
        this.posts = response.data;
        this.totalPosts = parseInt(response.headers['x-wp-total'], 10);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPostsByCategory(categoryId: number): Promise<void> {
      try {
        const response = await axios.get('https://smwordpress.smartexweb.kz/wp-json/wp/v2/posts', {
          params: {
            categories: categoryId,
            per_page: this.postsPerPage,
            page: this.currentPage,
          }
        });
        this.posts = response.data;
        this.totalPosts = parseInt(response.headers['x-wp-total'], 10);
      } catch (error) {
        console.error('Ошибка при получении постов по категории:', error);
      }
    },
    selectCategory(category: Category): void {
      this.selectedCategory = category;
      this.currentPage = 1; // сброс страницы при выборе категории
      this.fetchPostsByCategory(category.id);
    },
    selectPost(post: Post): void {
      this.selectedPost = post;
    },
    setCurrentPage(page: number): void {
      this.currentPage = page;
      if (this.selectedCategory) {
        this.fetchPostsByCategory(this.selectedCategory.id);
      } else {
        this.fetchPosts();
      }
    },
  },
});
