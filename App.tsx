import React from 'react';
import {BottomSheet, IBottomSheetRef} from './BottomSheet';
import {
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const App: React.FC = () => {
  const bottomSheetRef = React.useRef<IBottomSheetRef>(null);
  return (
    <>
      <ScrollView style={styles.content}>
        <StatusBar barStyle="dark-content" backgroundColor="#fafafa" />
        <TouchableOpacity
          style={styles.button}
          onPress={() => bottomSheetRef.current?.expand()}>
          <Text>Open Bottom Sheet</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomSheet ref={bottomSheetRef}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere amet
          eum alias asperiores, incidunt magni unde vero, aut deleniti
          accusantium ipsa aliquam magnam doloribus sequi! Nostrum cupiditate
          enim laborum doloribus dolores nesciunt? Voluptatibus, non, maiores
          laudantium, sed aperiam ab doloribus voluptas animi cum magni odit
          laborum repellat at rerum ducimus eius consequuntur! Quidem, ut
          dolorum! Esse sapiente voluptatum illo perferendis. Voluptas aliquam
          eius, vero nobis perspiciatis ipsum sit voluptatem nostrum beatae ea
          totam ex similique est a. Consequatur repellat excepturi sequi minus.
          Repudiandae, esse laboriosam alias iste ipsa amet eligendi sit
          voluptates minima autem similique ut quod ratione totam aliquam?
        </Text>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    lineHeight: 24,
  },
  content: {
    marginTop: StatusBar.currentHeight + 24,
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontWeight: '500',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default App;
