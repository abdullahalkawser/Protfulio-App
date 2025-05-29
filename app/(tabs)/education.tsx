import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Education = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🎓 My Education</Text>

      {/* Card 1 */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/2/25/DIU_Logo.png',
          }}
          style={styles.logo}
        />
        <View style={styles.info}>
          <Text style={styles.institution}>Daffodil International University</Text>
          <Text style={styles.degree}>BSc in Computer Science & Engineering</Text>
          <Text style={styles.duration}>2025 - Present</Text>
          <Text style={styles.result}>CGPA: 4.00</Text>
        </View>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-icon/computer_318-503813.jpg?w=200',
          }}
          style={styles.logo}
        />
        <View style={styles.info}>
          <Text style={styles.institution}>ABC Polytechnic Institute</Text>
          <Text style={styles.degree}>Diploma in Computer Technology</Text>
          <Text style={styles.duration}>2021 - 2024</Text>
          <Text style={styles.result}>CGPA: 3.75</Text>
        </View>
      </View>

      {/* Card 3 */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/194/194931.png',
          }}
          style={styles.logo}
        />
        <View style={styles.info}>
          <Text style={styles.institution}>Govt. High School</Text>
          <Text style={styles.degree}>Secondary School Certificate (SSC)</Text>
          <Text style={styles.duration}>2019 - 2021</Text>
          <Text style={styles.result}>GPA: 5.00</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0f172a',
    flexGrow: 1,
    marginTop: 40
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 25,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    borderColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  institution: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 4,
  },
  degree: {
    fontSize: 15,
    color: '#cbd5e1',
    marginBottom: 2,
  },
  duration: {
    fontSize: 13,
    color: '#94a3b8',
  },
  result: {
    fontSize: 13,
    color: '#10b981',
    fontWeight: '500',
    marginTop: 4,
  },
});

export default Education;
