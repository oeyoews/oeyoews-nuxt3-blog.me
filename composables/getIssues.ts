const headers = {
  Accept: 'application/vnd.github+json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

export const getIssues = async (page: number = 1) => {
  const res = await useFetch(`/issues?page=${page}&per_page=30&state=closed`, {
    method: 'GET',
    timeout: 30000,
    baseURL: 'https://api.github.com/repos/oeyoews/neotw-tiddlers',
    onRequest({ options }) {
      options.headers = headers;
    },
  });

  // if (res.error) return res.error;

  // NOTE: cant overrite to another for ref value
  // let data = res.data as unknown as Issue[];

  // if(!res.data.value) return;
  // @ts-ignore
  const data = res.data.value.map((issue: Issue) => ({
    ...issue,
    date: new Date(issue.created_at),
    slug: issue.id.toString(),
  }));

  return { ...res, data: data as Issue[] };
};

export const getAllIssues = async () => {
  const issuesInfo = await getIssuesInfo();
  const issues: Issue[] = [];
  const pages = Math.ceil(issuesInfo.total_count / 30);
  for (let i = 0; i < pages; i++) {
    const { data } = await getIssues(i + 1);
    issues.push(...data);
  }

  return issues;
};

export const getIssuesInfo = async () => {
  const res = await useFetch(':issue+state:closed', {
    baseURL: `https://api.github.com/search/issues?q=repo:oeyoews/neotw-tiddlers+type`,
    onRequest({ options }) {
      options.headers = headers;
    },
  });
  return res.data.value as unknown as IssueInfo;
};
