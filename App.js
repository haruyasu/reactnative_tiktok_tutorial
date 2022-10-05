import React from 'react'
import {StatusBar} from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

import RootNavigation from './src/navigation'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-black">
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <RootNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
