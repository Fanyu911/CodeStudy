// 解决方法： 取消（new AbortController() 或者 xml.abort（））或者忽略（设置id）

useEffect(() => {
  // 设定一个标志位
  let didCancel = false;
  setIsLoading(true);
  // 发请求
  fetch(`https://get.a.article.com/articles/${articleId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject();
    })
    .then((fetchedArticle) => {
      // 在这里判断是否这个请求需要被忽略
      if (!didCancel) {
        setArticle(fetchedArticle);
      }
    })
    .finally(() => {
      setIsLoading(false);
    });

  return () => {
    // 当依赖变化时，会执行此回调，使得你有机会操作 上文 闭包引用的didCancel变量
    didCancel = true;
  };
}, [articleId]);
