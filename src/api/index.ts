export const fetchingData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  throw new Error('network error');
};
