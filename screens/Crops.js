import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import { articles, Images, argonTheme } from "../constants";
import { Card } from "../components";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Statistics S1",
    description:
      "Temperature: 24 \n PH Value: 6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfPCQoxUrxNpafOF42zx89tPDmt9TN-RMRQ&usqp=CAU",
    section: "Section 1"
  },
  {
    title: "Statistics S2",
    description:
      "Temperature: 24 \n PH Value: 6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfPCQoxUrxNpafOF42zx89tPDmt9TN-RMRQ&usqp=CAU",
    section: "Section 2"
  },
  {
    title: "Statistics S3",
    description:
      "Temperature: 24 \n PH Value: 6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfPCQoxUrxNpafOF42zx89tPDmt9TN-RMRQ&usqp=CAU",
    section: "Section 3"
  },
  {
    title: "Statistics S4",
    description:
      "Temperature: 24 \n PH Value: 6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfPCQoxUrxNpafOF42zx89tPDmt9TN-RMRQ&usqp=CAU",
    section: "Section 4"
  }
];

class Crops extends React.Component {
  renderProduct = (item, index) => {
    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        // onPress={() => navigation.navigate("Pro", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.section}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    return (
      <Block style={styles.group}>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {this.renderCards()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
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
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE
    // paddingBottom: theme.SIZES.BASE * 2,
  }
});

export default Crops;
