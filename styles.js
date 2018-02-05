import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 50,
        marginBottom: 30,  
        marginTop: 24.5  ,
        flexDirection: 'row',
    }, 
    header_text:{
        fontSize: 22
    },
    sidebar: { 
        flex: 1, 
        width: 300, 
        height: 'auto', 
        backgroundColor: 'black' 
    },
       
    drawer: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eaeaea', 
        shadowColor: '#000000', 
        shadowOpacity: 0.8, 
        shadowRadius: 3,
        marginTop: 23,
        },
     main: { paddingLeft: 3 },

});
