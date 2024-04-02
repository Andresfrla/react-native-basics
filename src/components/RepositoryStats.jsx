import React from "react"
import { View } from "react-native"
import { StyleText } from "./StyleText"

const parseThounsands = value => {
    return value >= 1000
        ? `${Math.round(value / 100 ) /10}k`
        : String(value)
}

const RepositoryStats = props => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyleText align='center' fontWeight='bold'>{parseThounsands(props.forksCount)}</StyleText>
                <StyleText align='center'>Forks</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>{parseThounsands(props.stargazersCount)}</StyleText>
                <StyleText align='center'>Starts</StyleText>
            </View>
            <View>
             <StyleText align='center' fontWeight='bold'>{props.reviewCount}</StyleText>
             <StyleText align='center'>Review</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>{props.ratingAverage}</StyleText>
                <StyleText align='center'>Rating</StyleText>
            </View>
        </View>
    )
}

export default RepositoryStats