export type Item = {
  id: string;
  title: string;
  user: {
    name: string;
    profile_image_url: string;
    description: string;
  };
  created_at: string;
  body: string;
  likes_count: number;
};
