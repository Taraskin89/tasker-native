import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import configurStore from './app/store/index';
import IndexContainer from './app/containers/IndexContainer';
import { styles } from './styles';

const store = configurStore();

export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<IndexContainer data = './api/task.json'/>
				</View>
			</Provider>
		);
	}
}