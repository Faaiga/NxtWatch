import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'

class App extends Component {
  state = {
    isDarktheme: false,
    savedVideos: [],
    activeTab: 'Home',
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({
        savedVideos: [...savedVideos, video],
      })
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  toggletheme = () => {
    this.setState(prevState => ({
      isDarktheme: !prevState.isDarktheme,
    }))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {savedVideos, isDarktheme, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          isDarktheme,
          activeTab,
          changeTab: this.changeTab,
          toggletheme: this.toggletheme,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
