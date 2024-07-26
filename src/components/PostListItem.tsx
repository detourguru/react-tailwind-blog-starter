import { Link } from "react-router-dom";
import { dummyImage3 } from "../assets/blog/assets";
import { TPostType } from "../type/post";

const PostListItem = ({ post }: { post: TPostType }) => {
  return (
    <>
      <Link to={`/read/${post.id}`}>
        <article>
          <img src={post.thumbnail} alt="dummy" className="object-cover" />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              {post.category}
            </strong>
            <h3 className="text-[24px] font-bold">{post.title}</h3>
            <p className="text-[#515151]">{post.datetime.toString()}</p>
            <p className="mt-[15px] text-[#434343]">{post.description}</p>
            <div className="mt-4 flex items-center gap-[14px]">
              <img src={dummyImage3} alt="" className="rounded-s-full" />
              <strong className="text-sm">George Costanazv</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};
export default PostListItem;
