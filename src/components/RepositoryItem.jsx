import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { StyleText } from "./StyleText"
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"

const RepositoryItemHeader = (props) => (
        <View style={{ flexDirection: "row", paddingBottom: 2}}>
            <View style={{ flex: 0, paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }}/>
            </View>
            <View style={{ flex: 1 }}>
                <StyleText fontWeight='bold'>FullName: {props.fullName}</StyleText>
                <StyleText color='secondary'>{props.description}</StyleText>
                <StyleText style={styles.language}>{props.language}</StyleText>
            </View>
        </View>
    )

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props} />
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
        marginTop: 4,
        marginVertical: 4,
        overflow: 'hidden',
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem