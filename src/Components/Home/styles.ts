import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingLeft: 30,
        height: '150%',
        paddingBottom: 50,
    },

    item: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    item2: {
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    modalView: {
        width: '90%',
        height: '50%',
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingBottom: 10
    },
    button: {
        borderRadius: 10,
        padding: 5,
        elevation: 2,
        backgroundColor: "lightgrey",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16
    },
    textStyle: {
        color: "red"
    },
    headerContainer: {
        justifyContent: 'center', alignItems: 'center'
    },
    headerContainer1: {
        marginTop: 10,
        justifyContent: 'center', alignItems: 'center'
    },
    headerText: { fontWeight: 'bold', fontSize: 20 },
    searchField: {
        borderWidth: 1,
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: '#888888',
        fontSize: 18,
        height: 50
    },
    containerIndicator: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 300
    }
});