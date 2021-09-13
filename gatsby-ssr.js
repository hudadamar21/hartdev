const React = require('react')

const HeadComponents = [
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1247746409733600" crossOrigin="anonymous"></script>,
  <script async src="https://arc.io/widget.min.js#uUD29b4D" />,
  <script async="async" data-cfasync="false" src="//hungrylongingtile.com/c6cb249243f68f49699f7911e0405f8d/invoke.js"></script>
]

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}
