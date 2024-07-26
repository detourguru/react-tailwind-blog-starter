import { create } from "zustand";
import { TPostType } from "../type/post";

type TPostStore = {
  posts: TPostType[];
  fetchPosts: (url: string) => Promise<void>;
  addPost: (formData: TPostType) => Promise<boolean>;
};

const usePostStore = create<TPostStore>((set) => ({
  posts: [],
  fetchPosts: async (url: string) => {
    try {
      // db에서 포스트 가져오기
      const response = await fetch("http://localhost:3000" + url);
      const data = await response.json();
      set({ posts: data });
    } catch (e) {
      console.error(e);
    }
  },
  addPost: async (formData) => {
    try {
      const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("데이터 전송에 실패했습니다");
      return false;
    }
  },
}));

export default usePostStore;
