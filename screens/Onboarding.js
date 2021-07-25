import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import { Block } from "galio-framework";
import { Button } from "../components/";
import Swiper from "react-native-swiper";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
  },
  title: {
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: "#767676",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
});

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Swiper
        activeDotColor="#8A56AC"
        dotColor="#998FA2"
      >
        <View style={styles.slide}>
          <Image source={require("../assets/imgs/analysis.gif")} style={styles.img} />
          <Text style={styles.title}>STATISTICS</Text>
          <Text style={styles.text}>
            Getting your farm statistics on hand 
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("../assets/imgs/plant.gif")} style={styles.img} />
          <Text style={styles.title}>LIVE</Text>
          <Text style={styles.text}>
            Live update of crops and livestock conditions
          </Text>
        </View>

        <View style={styles.slide}>
          <Image source={require("../assets/imgs/statistics.gif")} style={styles.img} />
          <Text style={styles.title}>ONE STOP</Text>
          <Text style={styles.text}>
            One stop overview and management of farms
          </Text>
          <Block flex center>
            <Button color="default"
              onPress={() => navigation.navigate("Authentication")} >
              LET'S GET STARTED!
            </Button>
          </Block>
        </View>
      </Swiper>
    );
  }
};

export default Onboarding;