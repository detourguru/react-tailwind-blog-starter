import usePostStore from "../store/postStore";
import PostListItem from "./PostListItem";
const PostList = () => {
  const posts = usePostStore((state) => state.posts);
  return (
    <>
      <section className="grid md:grid-cols-2 gap-[80px] mt-[80px] mb-[152px]">
        {posts &&
          posts.map((post) => <PostListItem key={post.id} post={post} />)}
      </section>
    </>
  );
};
export default PostList;
