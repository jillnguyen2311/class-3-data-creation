import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function About({ navigation }) {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text 
                style={{
                    fontWeight: 'bold',
                    color: 'purple',
                    marginTop: 30
                }}
                variant="headlineMedium"
                >Welcome to the About Page</Text>
                <StatusBar style="auto" />
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>

            <View>
                <Card>
                    <Card.Title title="Dev Tools" subtitle="Mobile" left={LeftContent} />
                    <Card.Content>
                        <Text variant="titleLarge">Expo App</Text>
                        <Text variant="bodyMedium">Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React. </Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://webomnizz.com/wp-content/uploads/2020/01/expo-publish.jpg' }} />
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
});
