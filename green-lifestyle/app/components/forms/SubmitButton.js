import React from 'react'
import { StyleSheet} from 'react-native'

import Button from '../AppButton'
import { useFormikContext } from 'formik'

export default function SubmitButton({ title }) {
	const { handleSubmit } = useFormikContext()
	return <Button title={title} onPress={handleSubmit} />
}

const styles = StyleSheet.create({})
