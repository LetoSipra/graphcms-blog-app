import { gql, GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

const QUERY = gql`
  {
    posts {
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

const client = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg0ry71v7uga01uie2yhanbv/master"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await client.request(QUERY);
  res.status(200).json({ posts });
}
