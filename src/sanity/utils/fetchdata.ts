import { client } from "../lib/client";

const fetchData = async (query: string, params?: Record<string, any>) => {
  return await client.fetch(query, params);
};

export default fetchData;
