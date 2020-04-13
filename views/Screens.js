import React from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text id="title" style={styles.title}>The Music Scene!</Text>
            <View>
            <Image
                style={styles.articleImage}
                source={require("../../assets/marsalis.jpg")}
            />
            <Text id="articleTitle" style={styles.articleTitle}
            > Legendary New Orleans jazz pianist Ellis Marsalis has died</Text>
            <View style={styles.articleBtn}>
                <Button
                    id="articleBtn"
                    title="View Article"
                    onPress={() => navigation.push("Article1")}
                />
                </View>
                </View>
            <View>
            <Image
                style={styles.articleImage}
                source={require("../../assets/coronavirus.jpg")}
            />
            <Text id="articleTitle2" style={styles.articleTitle}
                > Scientists have turned the structure of the coronavirus into music</Text>
            <View style={styles.articleBtn}>
                <Button
                    id="articleBtn2"
                    title="View Article"
                    onPress={() => navigation.push("Article2")}
                />
                </View>
                </View>
        </View>

    );
};

export const Article1 = () => {
    return (
        <View style={styles.container}>
            <Image
                style={
                    {
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 29,
                        width: 350,
                    }}
                source={require("../../assets/marsalis.jpg")}
            />
            <Text id="titleTxt"
                style={
                    {
                        fontSize: 30,
                        textAlign: "center",
                        borderColor: "#A7A6A6",
                        borderTopWidth: 1
                    }}
            > Legendary New Orleans jazz pianist Ellis Marsalis has died </Text>
            <Text id="articleTxt"
                style={
                    {
                        fontSize: 15
                    }}
            > Ellis Marsalis Jr., the renowned New Orleans jazz pianist, composer and educator, has died, the City of New Orleans announced Wednesday. Marsalis was 85.
    The father of six sons, four of whom: Wynton, Delfeayo, Branford and Jason Marsalis, have their own acclaimed jazz careers,
                Ellis Marsalis was a mentor to many musicians and kept a weekend gig at Snug Harbor for 30 years. </Text>
        </View>
    );
}

export const Article2 = () => {
    return (
        <View style={styles.container}>
            <Image
                style={
                    {
                        height: 200,
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 29,
                        width: 350,
                    }}
                source={require("../../assets/coronavirus.jpg")}
            />
            <Text id="titleTxt"
                style={
                    {
                        fontSize: 30,
                        textAlign: "center",
                        borderColor: "#A7A6A6",
                        borderTopWidth: 1
                    }}
            > Scientists have turned the structure of the coronavirus into music </Text>
            <Text id="articleTxt"
                style={
                    {
                        fontSize: 15
                    }}
            > You've probably seen dozens of images of the novel coronavirus-now responsible for 1 million infections and tens of thousands of deaths.
                Now, scientists have come up with a way for you to hear it: by translating the structure of its famous spike protein into music. </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        position: "absolute"
    },
    articleImage: {
        width: 100,
        height: 100,
        alignSelf: "flex-start",
        marginTop: 3,
        marginLeft: 3,
    },
    articleBtn: {
        width: 300,
        marginLeft: 110,
        marginTop: -37
    },
    title: {
        textAlign: "center",
        width: 400,
        top: 0,
        fontSize: 40,
        borderColor: "#A7A6A6",
        borderBottomWidth: 1
    },
    articleTitle: {
        width: 300,
        fontSize: 15,
        marginLeft: 110,
        position: "absolute"
    },
});