import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "jzgwenmb",
  dataset: "production",
  useCdn: true,
});
