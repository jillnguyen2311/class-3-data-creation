import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text, List } from 'react-native-paper';
import { useState } from 'react';
import { studentSkills } from '../data/skills';

export default function Home({ navigation }) {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const [data, setData] = useState()

    const addingData = () => {
        console.log('started')
        setData(studentSkills)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text variant="displaySmall"
                    style={{
                        fontWeight: 'bold',
                        color: 'purple',
                        marginTop: 30
                    }}
                >Hello! </Text>
                <View>
                    <Text variant="labelLarge">User</Text>
                    <Avatar.Text size={24} label="JN" />
                    <Text variant="labelSmall">Jill</Text>

                </View>
                <Text variant="titleLarge">This is the homepage </Text>

                <View>
                    <StatusBar style="auto" />
                    <Button mode="contained" onPress={() => {
                        console.log('Pressed')
                        navigation.push('About')
                    }
                    }>
                        Go to the About page
                    </Button>
                </View>

                <View>
                    <Text style={{
                        marginTop: 30,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>Frequent FAQ: </Text>
                    <Text>
                        <List.AccordionGroup>
                            <List.Accordion title="What is this about?" id="1" >
                                <List.Item title="A test app to learn about Expo" />
                            </List.Accordion>
                            <List.Accordion title="How to navigate to About page?" id="2">
                                <List.Item title="click on the |go to About page|" />
                            </List.Accordion>
                            <List.Accordion title="How many screens are there?" id="3">
                                <Text variant="titleMedium">There are two:</Text>
                                <List.Item title="Home screen" />
                                <List.Item title="About screen" />
                            </List.Accordion>
                        </List.AccordionGroup>
                    </Text>
                </View>
            </View>

            <View style={styles.container}>
                <View>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            marginTop: 30,
                            fontSize: 20
                        }}
                    >Basic skills that students need to start a career in coding</Text>
                </View>

                <Text>
                    <Button
                        style={{
                            fontWeight: 'bold',
                        }}
                        onPress={() => addingData()}
                    > Click to show
                    </Button>


                </Text>
                {
                    data && data.skills.map((s, index) => {
                        if (s.category.toLowerCase() == "development") {
                            return (
                                <View key={index}>
                                    <Text>{s.name}</Text>
                                    {
                                        s.tools && s.tools.map((a, ind) => {
                                            return (
                                                <View key={ind}>
                                                    <Text>{a}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            )
                        }
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30
    },

});
