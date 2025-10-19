import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui';
import { styles } from '../../styles/styles';

const AboutMe = ({ name, regNo }) => {
  return (
    <View style={styles.aboutCard}>
      <Text style={styles.aboutTitle}>About Me</Text>
      <Text style={styles.aboutText}>👩‍💻 Name: {name}</Text>
      <Text style={styles.aboutText}>🆔 Reg No: {regNo}</Text>
      <Text style={styles.aboutText}>🎓 Department: Computer Science</Text>
      <Text style={styles.aboutText}>🏫 COMSATS University Islamabad, Attock Campus</Text>
    </View>
  );
};

export default AboutMe;
