import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarktheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  addVideo: () => {},
  changeTab: () => {},
})

export default ThemeAndVideoContext

/* {
      channel: {
        name: 'iB Hubs',
        profileImageUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png',
      },
      id: 'ad9822d2-5763-41d9-adaf-baf9da3fd490',
      publishedAt: 'Nov 29, 2016',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png',
      title: 'iB Hubs Announcement Event',
      viewCount: '26K',
    }, */
