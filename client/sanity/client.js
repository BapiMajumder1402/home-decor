import { createClient } from "@sanity/client";


const client = createClient({
  projectId: "f0zbsz0t",
  dataset: "production",
  apiVersion: "2023-12-08",
  useCdn: true
});
export default client