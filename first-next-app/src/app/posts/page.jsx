import Link from "next/link";
import PostsLimit from "../components/PostsLimit";
import { log } from "next/dist/server/typescript/utils";
// Save as app/posts/page.jsx and copy layout.jsx from /about
async function getPostsData(limit, page = 1) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/" +
      "posts?_limit=" +
      limit +
      "&_page=" +
      page,
  );
  if (!res.ok) {
    // Recommendation: handle errors
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
export default async function Posts({searchParams}) {
  const { limit } = await searchParams;
  const limits = limit ?  limit : 5;
  console.log(limits);
  
  const posts = await getPostsData(limits);
  const postList = posts.map((post) => (
    <li key={post.id}>
      <Link href={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <ul>{postList}</ul>
      <PostsLimit defaultLimit={limits}/>
    </div>
  );
}
