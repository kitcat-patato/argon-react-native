import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
// // Added AWS code below
// import { API, graphqlOperation } from "aws-amplify";
// import { createTodo } from './RNAmplify/src/graphql/mutations'
// import { listTodos } from './RNAmplify/src/graphql/queries'
// import Amplify from 'aws-amplify'
// import config from './RNAmplify/src/aws-exports'
// Amplify.configure(config)

// //AWS API Codes
// const initialState = { name: "", description: "" };

// const App = () => {
//   const [formState, setFormState] = useState(initialState);
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function fetchTodos() {
//     try {
//       const todoData = await API.graphql(graphqlOperation(listTodos));
//       const todos = todoData.data.listTodos.items;
//       setTodos(todos);
//     } catch (err) {
//       console.log("error fetching todos");
//     }
//   }

//   async function addTodo() {
//     try {
//       const todo = { ...formState };
//       setTodos([...todos, todo]);
//       setFormState(initialState);
//       await API.graphql(graphqlOperation(createTodo, { input: todo }));
//     } catch (err) {
//       console.log("error creating todo:", err);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <TextInput
//         onChangeText={(val) => setInput("name", val)}
//         style={styles.input}
//         value={formState.name}
//         placeholder="Name"
//       />
//       <TextInput
//         onChangeText={(val) => setInput("description", val)}
//         style={styles.input}
//         value={formState.description}
//         placeholder="Description"
//       />
//       <Button title="Create Todo" onPress={addTodo} />
//       {todos.map((todo, index) => (
//         <View key={todo.id ? todo.id : index} style={styles.todo}>
//           <Text style={styles.todoName}>{todo.name}</Text>
//           <Text>{todo.description}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   todo: { marginBottom: 15 },
//   input: { height: 50, backgroundColor: "#ddd", marginBottom: 10, padding: 8 },
//   todoName: { fontSize: 18 },
// });

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo,
];

// cache product images
articles.map((article) => assetImages.push(article.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default (props) => {
  const [isLoadingComplete, setLoading] = useState(false);
  let [fontsLoaded] = useFonts({
    ArgonExtra: require("./assets/font/argon.ttf"),
  });

  function _loadResourcesAsync() {
    return Promise.all([...cacheImages(assetImages)]);
  }

  function _handleLoadingError(error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }

  function _handleFinishLoading() {
    setLoading(true);
  }

  if (!fontsLoaded && !isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else if (fontsLoaded) {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  } else {
    return null;
  }
};

// AWS API ADDED CODE

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false
//   };

//   render() {
//     if (!this.state.isLoadingComplete) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <NavigationContainer>
//           <GalioProvider theme={argonTheme}>
//             <Block flex>
//               <Screens />
//             </Block>
//           </GalioProvider>
//         </NavigationContainer>
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([...cacheImages(assetImages)]);
//   };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }
