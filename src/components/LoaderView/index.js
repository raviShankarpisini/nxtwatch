import Loader from 'react-loader-spinner'
import './index.css'

const LoaderView = () => (
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
  </div>
)

export default LoaderView
