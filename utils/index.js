function sortBlog(blogs) {
    blogs.sort((a, b) => {
      return (
        new Date(b.createTime).getTime() -
        new Date(a.createTime).getTime()
      );
    });
    return blogs;
  }
  function addLink(href) {
    const iconLink = document.createElement("link");
    iconLink.rel = "stylesheet";
    iconLink.href = href;
    document.head.append(iconLink);
  }
  export { sortBlog, addLink };
  