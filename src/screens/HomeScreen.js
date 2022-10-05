import React, {useState, useRef} from 'react'
import {View, Dimensions, FlatList, Platform, StatusBar} from 'react-native'
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs'
import {hasNotch} from 'react-native-device-info'

import Post from '../components/Post'

const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return hasNotch() ? 44 : 20
  } else if (Platform.OS === 'android') {
    return hasNotch() ? 0 : StatusBar.currentHeight
  } else {
    return 0
  }
}

const posts = [
  {
    channel_name: 'ChannelName1',
    video_url:
      'https://player.vimeo.com/external/446578885.sd.mp4?s=7e5f62cdccdd77126bf8ad41bcfa274e5bd3bf39&profile_id=165&oauth2_token_id=57447761',
    caption: 'Caption1',
    music_name: 'MusicName1',
  },
  {
    channel_name: 'ChannelName2',
    video_url:
      'https://player.vimeo.com/external/473959491.sd.mp4?s=3962e7dea76542382605f4bcb30d82809814bac2&profile_id=165&oauth2_token_id=57447761',
    caption: 'Caption2',
    music_name: 'MusicName2',
  },
  {
    channel_name: 'ChannelName3',
    video_url:
      'https://player.vimeo.com/progressive_redirect/playback/743803142/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=8d4fdc83a4abf13b5370f14cba3497fe9aa7bb6637b22d2d78711d4dc949e4c4',
    caption: 'Caption3',
    music_name: 'MusicName3',
  },
]

const HomeScreen = () => {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(null)

  const height =
    Dimensions.get('window').height -
    useBottomTabBarHeight() -
    getStatusBarHeight()

  const renderItem = ({item, index}) => {
    return (
      <View style={{height: height}}>
        <Post
          item={item}
          index={index}
          currentVisibleIndex={currentVisibleIndex}
        />
      </View>
    )
  }

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentVisibleIndex(viewableItems[0].index)
    }
  })

  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
    </View>
  )
}

export default HomeScreen
