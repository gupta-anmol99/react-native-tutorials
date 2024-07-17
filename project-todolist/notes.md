## Styling diff between iOS and Android.

For one, when we use borderRadius directly on the Text component, it will not work on iOS,
so we need to wrap the Text component with a View component and apply the borderRadius on the View component.

## Why not use scrollview?

There is a downside of scrollview when we have a large amount of items in the list.
It renders all the items at once which can be a performance issue.
To solve this, we can use FlatList component which only renders the
items that are visible on the screen.

## Flatlist

We follow following steps-

1, Flatlist doesn't need map function to render the items. So we get rid of following portion-

```
<ScrollView>
    {tasks.map((task) => {
    return (
        <View key={task} style={styles.goalItems}>
        <Text style={styles.goalText}>{task}</Text>
        </View>
    );
    })}
</ScrollView>
```

2. Update the add tasks function so that it adds an object with the task and an id/key which uniques identifies the task. This is important because we need to provide a key to the FlatList component.

3. Use <\FlatList /> with the compoenets requiered for it to render. Look for the example on the [react native page](https://reactnative.dev/docs/flatlist?language=javascript)

Note: We can also use the keyExtractor prop to provide a key to the FlatList component. But we don't need it if our key is stored in key or id prop. We have given it here anyways.


## Visual styling for Android and iOS
android_ripple={{ color: "#1d8581" }}  is used inside Pressable to give ripple effect in andoird.

For iOS we need to used stylign.
