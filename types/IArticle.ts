type IArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  text: string;
  tags?: string[];
};

export default IArticle;