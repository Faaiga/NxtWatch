import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotFoundBgContainer,
  NotFoundContents,
  NotFoundSubContent,
  NotFoundSubContentContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarktheme} = value
      const bgColor = isDarktheme ? '#0f0f0f' : '#f9f9f9'
      const fontColor = isDarktheme ? 'white' : 'black'
      return (
        <NotFoundBgContainer bgColor={bgColor}>
          <Header />
          <NotFoundContents>
            <NotFoundSubContent>
              <SideBar />
            </NotFoundSubContent>
            <NotFoundSubContentContainer bgColor={bgColor}>
              <NotFoundImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <NotFoundTitle fontColor={fontColor}>
                Page Not Found
              </NotFoundTitle>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundSubContentContainer>
          </NotFoundContents>
        </NotFoundBgContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
