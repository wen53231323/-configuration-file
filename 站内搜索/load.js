// 加载search.js调用searchFunc()
if ($('.local-search')) {
  $.getScript('/custom/站内搜索/search.js', function() {
    searchFunc("/search.xml", 'local-search-input', 'local-search-result');
  });
}