import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";

const Carousel = () => {
  const ScreenWidth = Dimensions.get("window").width+15;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();
  useEffect(() => {
    setInterval(() => {
      if (activeIndex === CarouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          
          index: 0,
          Animation:true
        })
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          Animation:true,
        })
      }
    }, 2000)
  },[])
  const CarouselData = [
    {
      id: 2,
      uri: "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
    },
    {
      id: 3,
      uri: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          style={{ width: ScreenWidth, height: 200, borderRadius: 5 }}
          source={{ uri: item.uri }}
        />
      </View>
    );
  };
  //HandelScroll
  const HandelScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    //console.log({ scrollPosition })
    const index = scrollPosition/ScreenWidth;
    //console.log({index})
    setActiveIndex(index);
  };
  const getItemLayout = (data,index) => ({
    length: ScreenWidth,
      offset : ScreenWidth * index,
    index:index,
})
  //Render Dot Indicators
  const renderDotIndcators = () => {
    return CarouselData.map((dot, index) => {
      if (activeIndex == index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#fd5c63",
              height: 7,
              width: 7,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#C0C0C0",
              height: 7,
              width: 7,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      }
    });
  };

  return (
    <View style={{ margin: 5 }}>
      <FlatList
        keyExtractor={(item) => item.id}
        ref={flatlistRef}
        data={CarouselData}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={HandelScroll}
        getItemLayout={getItemLayout}
      />
      <View
        style={{ flexDirection: "row", justifyContent: "center", marginTop: 3 }}
      >
        {renderDotIndcators()}
      </View>
    </View>
  );
};

export default Carousel;
