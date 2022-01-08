// import React from "react";
// import { View, StyleSheet } from "react-native";
// import colors from "../config/colors";
// import Article from "../components/Article";
// import News from "../components/News";

// const NewsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <News />
//     </View>
//   );
// };

// export default NewsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: colors.primary,
//   },
// });

// // 0423f0a2118f4a778340ebbb260b712c

import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Image,
  Statusbar,
  SafeAreaView,
} from "react-native";
import Card from "../components/Card";
import newAPI from "../apis/News";

const NewsScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [newstech, setNewsTech] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  /* const newsResponse = async() => {
        const response = await newAPI.get('everything?q=tesla&from=2021-07-19&sortBy=publishedAt&apiKey=920deb9f754348c0bec4871fef36d971')
        console.log(response.data)
    } */

  function getNewsFromAPI() {
    newAPI
      .get("everything?q=climate&apiKey=0423f0a2118f4a778340ebbb260b712c")
      .then(async function (response) {
        setNewsTech(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }

  if (!newstech) {
    return null;
  }

  //console.log(newstech);

  return (
    <FlatList
      data={newstech.articles}
      keyExtractor={(item, index) => "key" + index}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  midText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
  },
});

export default NewsScreen;
