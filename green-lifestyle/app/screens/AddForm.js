import React, { useState } from "react";
require("firebase/auth");
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import {
  FormField as Field,
  Form,
  FormImagePicker as ImagePicker,
  SubmitButton as Submit,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  Photo: Yup.array()
    .required()
    .min(1)
    .max(1)
    .label("Please select one image for your post."),
  title: Yup.string().required().min(1).label("Title"),
  text: Yup.string().required().min(1).label("Text"),
});

const submitForm = (values) => {
  console.log(values);
  Alert.alert("Your post was submited!");
  const db = getFirestore();
  const docRef = addDoc(collection(db, "posts"), values);
  //   db.collection("posts").doc().set(values);
  //   setDoc(doc(db, "posts"), values);
};

const auth = getAuth();
const user = auth.currentUser;

export default function AddForm() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.logo} source={require("../assets/form.png")} />
        <Form
          initialValues={{
            title: "",
            text: "",
            Photo: [],
            createdAt: new Date(),
            username: user.displayName,
            upvotes: 0,
          }}
          onSubmit={(Values) => submitForm(Values)}
          validationSchema={validationSchema}
        >
          <ImagePicker name="Photo" />
          <Field maxLength={255} name="title" placeholder="Post title" />
          <Field
            maxLength={500}
            multiline
            name="text"
            numberOfLines={10}
            placeholder="Post text"
          />
          <Submit title="Submit" />
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    width: 400,
    height: 300,
    resizeMode: "contain",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 1,
  },
});
