import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, Text, View } from 'react-native'
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { styles } from "./styles";
import { CONTINENT_QUERY, COUNTRY_QUERY } from "../GraphQL";
import Countries from "./countries";

const Home = (props) => {
    const [code, setCode] = useState("AF");
    const { data, loading } = useQuery(CONTINENT_QUERY);
    const [modalVisible, setModalVisible] = useState(false);


    const ContinentItem = ({ continent }) => {
        const { name, code } = continent;

        return (
            <Pressable style={styles.item} onPress={() => { setModalVisible(true); setCode(code); }}>
                <Text style={styles.header}>{name}</Text>
            </Pressable>
        );
    };

    if (loading) {
        return (<View>
            <ActivityIndicator
                color='#00000'
                size="large"
                style={styles.activityIndicator} />
        </View>)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Continents</Text>
            </View>
            <View style={styles.item2}></View>
            <FlatList
                data={data.continents}
                renderItem={({ item }) => <ContinentItem continent={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
            <Countries code={code} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </SafeAreaView>
    )
}
export default Home