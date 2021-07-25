import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, View, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
import Collapsible from 'react-native-collapsible';


const { width } = Dimensions.get('screen');
const cardWidth = width - theme.SIZES.BASE * 2;
const plant = require("../assets/Plant.png");
const fish = require("../assets/Fish.png");

class Dashboard extends React.Component {
  state = {
    activeSections: [],
    collapsedA: true,
    collapsedB: true,
    multipleSelect: false,
  };

  // stateB = {
  //   activeSections: [],
  //   collapsed: true,
  //   multipleSelect: false,
  // };

  toggleExpandedA = (ea) => {
    this.setState((ez) => {return {collapsedA: !ez.collapsedA}});
    console.log("ButtonA", this.state.collapsedA);
  };

  toggleExpandedB = (eb) => {
    this.setState((ex) => {return {collapsedB: !ex.collapsedB}});
    console.log("ButtonB", this.state.collapsedB);
  };

  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={plant}
          />

          <TouchableOpacity onPress={this.toggleExpandedA}>
            <View style={styles.header}>
              <Text style={styles.headerText}>View Plant Status Details</Text>
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={this.state.collapsedA} align="center">
            <View style={styles.content}>
              <Text>
              Average pH (Surface) = 6.9087 
              {'\n'}Average Temperature = 19.0923°C
              {'\n'}Total Crop Yield = 17,098,202
              </Text>
            </View>
          </Collapsible>
        </Block>


        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={fish}
          />

          <TouchableOpacity onPress={this.toggleExpandedB}>
            <View style={styles.header}>
              <Text style={styles.headerText}>View Livestock Status Details</Text>
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={this.state.collapsedB} align="center">
            <View style={styles.content}>
              <Text>
              Average pH = 7.7578
              {'\n'}Average Temperature = 20.1234°C
              {'\n'}Average Turbidity = 215.4851
              </Text>
            </View>
          </Collapsible>
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  header: {
    backgroundColor: '#f5fffa',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#e0ffff',
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
});

export default Dashboard;
