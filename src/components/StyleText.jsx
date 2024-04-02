import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'grey',
    },
    bold: {
        fontWeight: 'bold',
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    }
})

export const StyleText = ({blue, bold, children, big, small}) => {
    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        small && styles.small,
        bold && styles.bold
    ]

  return (
    <Text style={textStyles}>
        {children}
    </Text>
  )
}

