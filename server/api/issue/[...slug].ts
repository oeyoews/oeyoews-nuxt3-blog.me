export default defineEventHandler(async (event) => {
  const { GITHUB_TOKEN } = useRuntimeConfig(event);

  // @ts-ignore
  const page = event.context.params.slug;

  const headers = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  };

  const res: any = await fetch(
    'https://api.github.com/repos/oeyoews/neotw-tiddlers' +
      `/issues?page=${page}&per_page=30&state=closed`,
    {
      headers,
    }
  );
  const data = await res.json();

  //   return data;
  return data.map((issue: Issue) => ({
    ...issue,
    date: new Date(issue.created_at),
    slug: issue.id.toString(),
  }));
});
