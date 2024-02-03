import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import routeConstants from './components/routeConstants'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'

import AppContext from './context/AppContext'
import './App.css'

class App extends Component {
  state = {isDark: false, savedVideos: []}

  toggleDarkTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  addSavedVideo = videoItem => {
    const {savedVideos} = this.state
    const i = savedVideos.findIndex(item => item.id === videoItem.id)
    if (i === -1)
      this.setState(prev => ({savedVideos: [...prev.savedVideos, videoItem]}))
  }

  removeSavedVideo = videoId => {
    const {savedVideos} = this.state
    const filteredVideos = savedVideos.filter(item => item.id !== videoId)
    this.setState({savedVideos: filteredVideos})
  }

  wasSavedAlready = videoId => {
    const {savedVideos} = this.state
    const i = savedVideos.findIndex(item => item.id === videoId)
    if (i === -1) return false
    return true
  }

  render() {
    const {isDark, savedVideos} = this.state

    return (
      <AppContext.Provider
        value={{
          isDark,
          toggleDarkTheme: this.toggleDarkTheme,
          savedVideos,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
          wasSavedAlready: this.wasSavedAlready,
        }}
      >
        <Switch>
          <Route path={routeConstants.login} component={Login} />
          <ProtectedRoute exact path={routeConstants.home} component={Home} />
          <ProtectedRoute
            exact
            path={routeConstants.trending}
            component={Trending}
          />
          <ProtectedRoute
            path={routeConstants.videoItemDetails}
            component={VideoItemDetails}
          />
          <ProtectedRoute
            exact
            path={routeConstants.savedVideos}
            component={SavedVideos}
          />
          <ProtectedRoute
            exact
            path={routeConstants.gaming}
            component={Gaming}
          />
          <Route component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
