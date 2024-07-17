# Notes about Flexbox

By default, flex direction is set to column in react native while it is set to row in web development. Flex direction simply means in which direction the items will be placed.

In react native, every view is a flex container by default.

We put flex direction is in the parent container.

### For example in the below we will see three boxes laid in column.

```
 <View style={{padding: 60}}>
            <View
                style={{
                    backgroundColor: 'green',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>1</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'yellow',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>2</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'bisque',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>3</Text>
            </View>
        </View>
```

## In the following example, we will see the boxes laid in row.

```
 <View style={{padding: 60, flexDirection: 'row'}}>
            <View
                style={{
                    backgroundColor: 'green',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>1</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'yellow',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>2</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'bisque',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>3</Text>
            </View>
        </View>
```

## Flexbox Properties

In parent element-

1. Justify-content: Controls the alignment of all items on the main axis.
2. Align-items: Controls the alignment of all items on the cross axis.

By default, if we don't specify the width and height of the child elements, they will occupy the parent container such that they will not be impacted along the main axis but alignItem is set to stretch by default.

## Flex prop

Flex prop is used to specify the size of the element in in the flex container along the main axis.

## In the following example, we have given flex value of 1, 2 and 3.

So to understand this, add up all the flex, which is 6 then first element will take 1/6 space, 2nd element will take 2/6 and third element will take 3/6. If there is no flex prop given, then the element will only take required space, in this case which is the space required by digit written inside.

```
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        padding: 60,
        flexDirection: "column",
        justifyContent: "center", // <- Align along vertical axis since flexdir is column
        alignItems: "center" // <- Align along horizontal axis since flexdir is column

    }}
    >
      <View
        style={{
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
          flex: 2,
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "bisque",
          justifyContent: "center",
          alignItems: "center",
          flex: 3,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
```
