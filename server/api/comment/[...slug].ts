export default defineEventHandler(async (event) => {
  const { GITHUB_TOKEN } = useRuntimeConfig(event);
  // https://github.com/chansee97/issue-nuxt-blog/blob/main/api/index.ts

  // @ts-ignore
  const slug = event.context.params.slug;

  const headers = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  };

  const data: any = await $fetch(
    'https://api.github.com/repos/oeyoews/neotw-tiddlers' +
      `/issues/${slug}/comments`,
    {
      headers,
    }
  );

  if (!data) {
    return {
      message: '请求出错',
    };
  }

  const size = getsize(data);
  console.log(
    `issue: #${slug} ` + new Date() + ' ' + (size / 1024).toFixed(2),
    'Kb'
  );

  return data;
});
