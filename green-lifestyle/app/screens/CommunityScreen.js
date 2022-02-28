import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../databse/firebase";

const CommunityScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const posts = await getDocs(collection(db, "posts"));
      //console.log(posts);
      setPosts(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(posts);
    };

    getData();
  }, []);

  if (!posts) {
    return null;
  }

  return (
    <FlatList item={posts} renderItem={({ item }) => <Card item={item} />} />
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

export default CommunityScreen;

// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import colors from "../config/colors";

// const CommunityScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Community Screen</Text>
//     </View>
//   );
// };

// export default CommunityScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: colors.secondary,
//   },
// });
