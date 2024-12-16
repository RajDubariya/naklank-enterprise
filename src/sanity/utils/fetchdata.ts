import { client } from "../lib/client";

const fetchData = async (query: string) => {
  return await client.fetch(query);
};

export default fetchData;
