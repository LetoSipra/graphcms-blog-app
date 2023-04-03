export const fetchPosts = async () => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPosts`);
  const data = await req.json();
  const posts: Posts[] = data.posts.posts;
  return posts;
};
