/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    flagImage: {
      width: 50,
      height: 30,
      marginRight: 10,
    },
    itensContainer: {
      flex: 1,
      alignContent: 'flex-end'
    },
    countryName: {
      fontSize: 16,
    }
  });

const Home = () => {
    const [countries, setCountries] = useState();
    const fetchCountries = async () => {
        try {
            const { data } = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchCountries()
    }, []);
    return (
        <SafeAreaView style={style.container}>
            {
                <FlatList
                data={countries}
                renderItem={({item}) => (
                    <View style={style.itemContainer}>
                        <Image
                              source={{uri: item.flags.png  }}
                              style={style.flagImage}
                        />
                            <View>
                                <View style={style.itensContainer}>
                                    <Text>Nome:</Text>
                                    <Text style={style.countryName}>{item.translations.por.common}</Text>
                                </View>

                                <Text style={style.countryName}>Capital: {item.capital}</Text>
                                <Text style={style.countryName}>Região: {item.region}</Text>
                                <Text style={style.countryName}>Língua: {item.languages[Object.keys(item.languages)[0]]} </Text>
                            </View>
                        </View>
                    )}
                    />
                }
        </SafeAreaView>
    );
}

export default Home;
