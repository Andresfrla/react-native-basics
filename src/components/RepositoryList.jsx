import React from 'react'
import { FlatList, Text, View } from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
  return (
    <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: repo }) => (
            <RepositoryItem {...repo}/>
        )}
    >
    </FlatList>
  )
}

export default RepositoryList
