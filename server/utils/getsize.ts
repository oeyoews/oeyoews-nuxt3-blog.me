export const getsize = (data: any) => {
  return new TextEncoder().encode(JSON.stringify(data)).length;
};
