interface Posts {
  datePublished: string;
  title: string;
  slug: string;
  content: {
    html: string;
  };
  coverPhoto: {
    url: string;
  };
  author: {
    about: string;
    jobTitle: string;
    name: string;
    avatar: {
      url: string;
    };
  };
}
