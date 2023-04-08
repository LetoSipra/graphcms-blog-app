import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";

const client = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg0ry71v7uga01uie2yhanbv/master"
);

interface Props {
  post: Posts;
}

interface Params {
  params: {
    slug: string;
  };
}

interface Data {
  post: Posts[];
  posts: Posts[];
}

function slug({ post }: Props) {
  return (
    <>
      <main className="h-fit w-full bg-white/10 py-10 ">
        <div className="max-w-[1000px]  mx-auto border outline outline-white/10 border-white/20 p-5">
          <div className="flex flex-col items-center">
            <img src={post.coverPhoto.url} className="object-contain w-full" alt="" />
            <h1 className="break-words text-center border-white/25 py-10 text-[#00FFFF] font-serif text-5xl">
              {post.title}
            </h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.html }}
            className="w-full border border-white/10 p-5 outline outline-white/20 md:mx-auto md:flex md:flex-col"></div>
          <div className="mt-10 flex h-fit w-full items-center space-x-2 border-b border-t px-2 md:px-28">
            <Image
              src={post.author.avatar.url}
              height={100}
              width={100}
              className="object-contain"
              alt=""
            />
            <div className="">
              <div className="flex space-x-5">
                <p className="">{post.author.name}</p>
                <p>&</p>
                <p className="">{post.author.jobTitle}</p>
              </div>
              <p className="text-xs">{post.author.about}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default slug;

export async function getStaticPaths() {
  const QUERY = gql`
    {
      posts {
        slug
      }
    }
  `;

  const paths: Data = await client.request(QUERY);
  const data = paths.posts;

  return {
    paths: data.map((path) => ({ params: { slug: path.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const QUERY = gql`
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        title
        datePublished
        slug
        content {
          html
        }
        coverPhoto {
          url
        }
        author {
          name
          avatar {
            url
          }
          jobTitle
          about
        }
      }
    }
  `;

  const slug = params.slug;
  const data: Data = await client.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
  };
}
