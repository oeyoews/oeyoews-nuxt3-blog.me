export default defineEventHandler(async (event) => {
  const { GITHUB_TOKEN } = useRuntimeConfig(event);

  const headers = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${GITHUB_TOKEN}`,
  };

  const data: IssueInfo = await $fetch(
    'https://api.github.com/search/issues?q=repo:oeyoews/neotw-tiddlers+type:issue+state:closed',
    {
      headers,
    }
  );

  return data.total_count;
});
