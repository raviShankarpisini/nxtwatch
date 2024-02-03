import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  toggleDarkTheme: () => {},
  savedVideos: [],
  saveVideo: () => {},
  removeSavedVideo: () => {},
  wasSavedAlready: () => {},
})

export default AppContext
