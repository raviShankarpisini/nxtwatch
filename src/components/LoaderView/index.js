import Loader from 'react-js-loader'

import './index.css'

const LoaderView = () => (
  <div className="loader-container">
    <Loader type="hourglass" bgColor="red" size={100} />
  </div>
)

export default LoaderView
