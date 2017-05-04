import React, {Component} from 'react'
import {Text, StyleSheet, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import Nav from '../Nav'

class Profile extends Component{

	logout(){
		AsyncStorage.removeItem('id').then(()=>{
			this.props.history.push('/')
		})
	}

	render(){
		return(
			<Nav>
				<Text>Profile Route</Text>
				<Text onPress={this.logout.bind(this)}>Logout</Text>
			</Nav>
		)
	}
}

const styles = StyleSheet.create({
	
})

export default connect( state=>({ 
	redux: state
}), {
	// Imported Actions
})(Profile)


