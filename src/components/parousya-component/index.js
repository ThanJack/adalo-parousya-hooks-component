import React, { useState, useCallback } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useAppInfo } from '../../hooks'

const ParousyaHooksComponent = (props) => {
	const [number, setNumber] = useState('')
	const { color, text } = props
	const { appStateVisible, profile } = useAppInfo()


	const onPress = useCallback(() => {
		setNumber(prev => ++prev)
	}, [])

	return(
		<View style={styles.wrapper}>
			<Text style={styles.text}>Use name: {profile.useName}</Text>
			<Text style={styles.text}>App State Visible: {profile.appStateVisible}</Text>
			<TouchableOpacity onPress={styles.btnSetNumber}>
				<Text>{`${number || text}`}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnSetNumber: {
		padding: 16
	}
})

export default ParousyaHooksComponent
