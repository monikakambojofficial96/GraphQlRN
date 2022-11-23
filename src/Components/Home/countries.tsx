import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Modal, Text, View, TextInput, ActivityIndicator } from "react-native";
import { COUNTRY_QUERY } from "../GraphQL";
import { styles } from "./styles";


const CountryItem = ({ country }) => {
    const { name, code } = country;
    return (
        <View style={styles.item}>
            <Text style={styles.header}>{name}</Text>
        </View>
    );
};

const Countries = (props) => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);

    const { data, loading } = useQuery(COUNTRY_QUERY, {
        variables: {
            "code": props.code,
        },
    })

    useEffect(() => {
        if (data) {
            setFilteredDataSource(data.continent.countries)
        }
    }, [data])

    if (loading) {
        return (
            <ActivityIndicator
                color='#00000'
                size="large"
                style={styles.activityIndicator} />
        )
    }
    const searchFilterFunction = (text) => {
        console.log("text", data.continent.countries)
        if (text) {
            const newData = (data.continent.countries).filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toLowerCase()
                        : ''.toLowerCase();
                    const textData = text.toLowerCase();
                    return itemData.indexOf(textData) > -1;
                });
            console.log("newdaata", newData)
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(data.continent.countries);
            setSearch(text);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setModalVisible(!props.modalVisible);
            }}
        >

            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View style={styles.headerContainer1}>
                        <Text style={styles.headerText}>Countries</Text>
                    </View>
                    <View style={styles.item2}></View>

                    <View style={{ marginHorizontal: 16, padding: 5, paddingHorizontal: 10, marginTop: 10, borderWidth: 1, borderRadius: 20 }}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={'#888888'}
                            value={search}
                            onChangeText={(text) => searchFilterFunction(text)}
                        />
                    </View>
                    <FlatList
                        data={filteredDataSource}
                        renderItem={({ item }) => <CountryItem country={item} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <Pressable style={styles.button} onPress={() => {
                        props.setModalVisible(!props.modalVisible)
                        searchFilterFunction('')
                    }
                    }>
                        <Text style={styles.textStyle}>CLOSE</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default Countries