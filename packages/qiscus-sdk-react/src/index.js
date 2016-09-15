import React from 'react'
import ReactDOM from 'react-dom'

import QiscusSDK from '@apiep/qiscus-sdk-core'
import App from 'components/App'

ReactDOM.render(
  <App version={QiscusSDK.VERSION} />,
  document.getElementById('root')
)
