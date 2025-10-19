import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, TextInput, Button } from '../ui';
import { styles } from '../../styles/styles';

export default function SearchAndAdd() {
  const [zikrList, setZikrList] = useState([
    { id: '1', phrase: 'SubhanAllah', count: 0 },
    { id: '2', phrase: 'Alhamdulillah', count: 0 },
  ]);
  const [search, setSearch] = useState('');
  const [newZikr, setNewZikr] = useState('');

  const filtered = zikrList.filter(z =>
    z.phrase.toLowerCase().includes(search.toLowerCase())
  );

  const addZikr = () => {
    if (newZikr.trim() !== '') {
      setZikrList([...zikrList, { id: Date.now().toString(), phrase: newZikr, count: 0 }]);
      setNewZikr('');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Search & Add Zikr</Text>
      <TextInput placeholder="Search..." value={search} onChangeText={setSearch} />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.phrase} ({item.count})</Text>
        )}
      />
      <TextInput placeholder="Add new zikr" value={newZikr} onChangeText={setNewZikr} />
      <Button title="Add Zikr" onPress={addZikr} />
    </View>
  );
}
