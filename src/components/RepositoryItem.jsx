import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { StyleText } from "./StyleText"
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyleText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyleText>
        <StyleText >{props.description}</StyleText>
        <StyleText style={styles.language}>{props.language}</StyleText>
        <RepositoryStats {...props}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
    }
})

export default RepositoryItem