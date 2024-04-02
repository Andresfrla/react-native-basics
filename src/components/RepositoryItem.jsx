import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { StyleText } from "./StyleText"

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyleText big bold>id: {props.id}</StyleText>
        <StyleText blue>FullName: {props.fullName}</StyleText>
        <StyleText bold>Description: {props.description}</StyleText>
        <StyleText blue>Language: {props.language}</StyleText>
        <StyleText small>Starts: {props.stargazersCount}</StyleText>
        <StyleText small>Forks: {props.forksCount}</StyleText>
        <StyleText small>Review: {props.reviewCount}</StyleText>
        <StyleText small>Rating: {props.ratingAverage}</StyleText>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
})

export default RepositoryItem