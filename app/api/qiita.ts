export const fetchItems = async () => {
  const response = await fetch("https://qiita.com/api/v2/items", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_QIITA_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};

export const fetchItem = async (id: string) => {
  const response = await fetch(`https://qiita.com/api/v2/items/${id}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_QIITA_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};
