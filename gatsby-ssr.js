const React = require('react')

const HeadComponents = [
  <script async="async" data-cfasync="false" src="//hungrylongingtile.com/c6cb249243f68f49699f7911e0405f8d/invoke.js"></script>
]

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}