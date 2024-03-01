export default defineEventHandler(async (event) => {
  const { GITHUB_TOKEN } = useRuntimeConfig(event);
  // https://github.com/chansee97/issue-nuxt-blog/blob/main/api/index.ts
  // const { VITE_OWNER, VITE_BLOGS_REPO } = import.meta.env;

  // return GITHUB_TOKEN;
  // @ts-ignore
  const page = event.context.params.slug;

  const headers = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  };

  const data: any = await $fetch(
    'https://api.github.com/repos/oeyoews/neotw-tiddlers' +
      `/issues?page=${page}&per_page=30&state=closed`,
    {
      headers,
    }
  );

  if (!data.length) {
    return {
      message: '请求出错',
    };
  }

  const size = getsize(data);
  console.log('[issue] ' + new Date() + ' ' + (size / 1024).toFixed(2), 'Kb');

  return data.map((issue: Issue) => ({
    ...issue,
    date: new Date(issue.created_at),
    slug: issue.id.toString(),
  }));
});
