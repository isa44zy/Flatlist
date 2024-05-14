import { FlatList, Text, View } from 'react-native';
import React from 'react';

const data = [
  {id: '1', tittle: 'item 1 ' },
  {id: '2', tittle: 'item 2 ' },
  {id: '3', tittle: 'item 3 ' },
  {id: '4', tittle: 'item 4 ' },
  {id: '5', tittle: 'item 5 ' },
];

export default function listaSimples(){
  const renderItem= ({item}) => (
    <View style ={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.tittle}</Text>
    </View>
  );

  return(
    <FlatList
    horizontal
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    />
  )
}