import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../comman/Colors';
import Strings from '../../comman/String';
import Styles from './Styles';
import CommonTextInput from '../../comman/CommonTextInput';
import { handleNavigation } from '../../navigation/RootNavigator';
import LoaderButton from '../../comman/Loader_button';
import fonts from '../../comman/fonts';
import { useAuthStore } from "../../store/useAuthStore";


export default function Login() {
	const navigation: any = useNavigation();
	const [userType, setUserType] = useState<'individual' | 'government'>('individual');
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const validate = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email.trim())) {
			Alert.alert('Invalid email', 'Please enter a valid email address');
			return false;
		}
		if (password.length < 6) {
			Alert.alert('Weak password', 'Password must be at least 6 characters');
			return false;
		}
		return true;
	};


	const onLogin = () => {
		const token = "jwt_token_123456";
		const user = { id: 1, name: "John Doe same" };
		// SET auth data
		useAuthStore.getState().setAuth(token, user);
		// GET auth data (immediately available)
		const get_token = useAuthStore.getState().token;
		const get_user = useAuthStore.getState().user;

		console.log("Stored Token:", get_token);
		console.log("Stored User:", get_user);
		handleNavigation({ type: 'push', navigation, page: 'CarbonCalculator' })

	};



	return (
		<KeyboardAvoidingView
			style={Styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<View style={Styles.inner}>
				<Text style={Styles.title} numberOfLines={1} ellipsizeMode="tail">{Strings.WelcomeBack}</Text>

				<Text style={Styles.label} numberOfLines={1} ellipsizeMode="tail">{Strings.EmailLabel}</Text>
				<CommonTextInput
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
					autoCapitalize="none"
					placeholder={Strings.EmailPlaceholder}
					style={Styles.input}
				/>

				<Text style={Styles.label} numberOfLines={1} ellipsizeMode="tail">{Strings.PasswordLabel}</Text>
				<CommonTextInput
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					placeholder={Strings.PasswordPlaceholder}
					style={Styles.input}
				/>

				<View style={Styles.checkboxRow}>
					<TouchableOpacity style={Styles.checkboxOption} onPress={() => setUserType('individual')}>
						<View style={[Styles.checkboxBox, userType === 'individual' && Styles.checkboxBoxSelected]} />
						<Text style={Styles.checkboxLabel} numberOfLines={1} ellipsizeMode="tail">{Strings.IndividualType}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.checkboxOption} onPress={() => setUserType('government')}>
						<View style={[Styles.checkboxBox, userType === 'government' && Styles.checkboxBoxSelected]} />
						<Text style={Styles.checkboxLabel} numberOfLines={1} ellipsizeMode="tail">{Strings.GovernmentType}</Text>
					</TouchableOpacity>
				</View>

				<View style={Styles.buttonWrapper}>
					<LoaderButton loader={loading} Onclick={onLogin} title={Strings.LoginButton} isBigbotton={true} bigColor={Colors.primary_button} textcolor={Colors.white} fontsF={fonts.Lexend_Medium} />
				</View>


				<TouchableOpacity style={Styles.forgot} onPress={() => handleNavigation({ type: 'push', navigation, page: 'Forgot' })}>
					<Text style={Styles.forgotText} numberOfLines={1} ellipsizeMode="tail">{Strings.ForgotPassword}</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}

