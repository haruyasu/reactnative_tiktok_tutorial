import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'
import {useIsFocused} from '@react-navigation/core'

import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Post = ({item, index, currentVisibleIndex}) => {
  const [isPause, setIsPause] = useState(true)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (index === currentVisibleIndex && isPause === false) {
      setIsPause(true)
    }
  }, [isFocused, currentVisibleIndex])

  return (
    <TouchableNativeFeedback onPress={() => setIsPause(!isPause)}>
      <View className="flex-1">
        <Video
          source={{
            uri: item.video_url,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            borderRadius: 10,
          }}
          onError={e => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={index !== currentVisibleIndex || !isPause}
        />

        {!isPause && (
          <View className="absolute top-1/2 -translate-y-5 self-center">
            <Ionicons
              name="ios-play"
              size={30}
              color="white"
              style={{opacity: 0.8}}
            />
          </View>
        )}

        <View className="flex-row items-center justify-center mt-5 space-x-5">
          <Text className="text-base text-white font-bold">フォロー中</Text>
          <Text className="text-base text-gray-200 font-bold">おすすめ</Text>
        </View>

        <View className="absolute bottom-5 left-3 right-14">
          <Text className="font-bold text-white mb-2 text-base">
            {item.channel_name}
          </Text>
          <Text className="text-white mb-2">{item.caption}</Text>
          <View className="flex-row items-center space-x-2">
            <Ionicons name="musical-notes" size={20} color="white" />
            <Text className="text-white">{item.music_name}</Text>
          </View>
        </View>

        <View className="absolute bottom-5 right-3">
          <TouchableOpacity className="relative mb-5">
            <View className="border-2 border-white rounded-full">
              <Image
                className="h-10 w-10 rounded-full"
                source={{
                  uri: 'https://placehold.jp/40/FFDF48/000000/150x150.png?text=Full%0AStack',
                }}
              />
            </View>
            <View className="absolute -bottom-2 right-0 left-0 items-center">
              <View className="bg-red-500 rounded-full">
                <Ionicons name="ios-add" size={15} color="white" />
              </View>
            </View>
          </TouchableOpacity>
          <View className="mb-5 items-center">
            <TouchableOpacity>
              <Ionicons
                name="ios-heart"
                size={30}
                color="white"
                style={{opacity: 0.8}}
              />
            </TouchableOpacity>
            <Text className="text-white">100</Text>
          </View>
          <View className="mb-5 items-center">
            <TouchableOpacity>
              <Ionicons
                name="ios-chatbubble-ellipses"
                size={30}
                color="white"
                style={{opacity: 0.8}}
              />
            </TouchableOpacity>
            <Text className="text-white">200</Text>
          </View>
          <View className="mb-5 items-center">
            <TouchableOpacity>
              <Ionicons
                name="ios-bookmark"
                size={30}
                color="white"
                style={{opacity: 0.8}}
              />
            </TouchableOpacity>
            <Text className="text-white">300</Text>
          </View>
          <View className="mb-5 items-center">
            <TouchableOpacity>
              <Ionicons
                name="ios-arrow-redo"
                size={30}
                color="white"
                style={{opacity: 0.8}}
              />
            </TouchableOpacity>
            <Text className="text-white">400</Text>
          </View>
          <TouchableOpacity className="items-center">
            <Image
              className="h-8 w-8 rounded-full"
              source={{
                uri: 'https://placehold.jp/40/FFDF48/000000/150x150.png?text=Full%0AStack',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default Post
