import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const certificatesData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuedBy: 'Amazon Web Services',
    year: '2024',
    details: 'Credential proving expertise in designing distributed systems on AWS.',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    id: 2,
    title: 'Software Engineering Professional',
    issuedBy: 'Coursera',
    year: '2023',
    details: 'Comprehensive course covering software design, testing, and development best practices.',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Software_engineering_icon.svg',
  },
  {
    id: 3,
    title: 'Data Structures & Algorithms',
    issuedBy: 'Udemy',
    year: '2023',
    details: 'Mastered fundamental algorithms and data structures with practical coding challenges.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/1087/1087846.png',
  },
  {
    id: 4,
    title: 'React Developer Certification',
    issuedBy: 'freeCodeCamp',
    year: '2023',
    details: 'Completed React course focusing on hooks, components, and app architecture.',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 5,
    title: 'Python Programming',
    issuedBy: 'edX',
    year: '2022',
    details: 'Learned Python basics, libraries, and scripting for automation and data processing.',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    id: 6,
    title: 'CSS Mastery',
    issuedBy: 'MDN Web Docs',
    year: '2023',
    details: 'Advanced CSS techniques, layouts, and responsive design principles.',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  },
  {
    id: 7,
    title: 'C++ Fundamentals',
    issuedBy: 'Pluralsight',
    year: '2022',
    details: 'Covered basics to intermediate C++ programming concepts and best practices.',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  },
  {
    id: 8,
    title: 'C Programming Certificate',
    issuedBy: 'HackerRank',
    year: '2021',
    details: 'Proved competence in C language with hands-on coding tests.',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
  },
];

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificatePress = (id) => {
    if (selectedCertificate === id) {
      setSelectedCertificate(null);
    } else {
      setSelectedCertificate(id);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🎓 My Education</Text>

      {/* Education Cards (same as before) */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/2/25/DIU_Logo.png' }}
          style={styles.logo}
        />
        <View style={styles.info}>
          <Text style={styles.institution}>Daffodil International University</Text>
          <Text style={styles.degree}>BSc in Computer Science & Engineering</Text>
          <Text style={styles.duration}>2025 - Present</Text>
          <Text style={styles.result}>CGPA: 4.00</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-icon/computer_318-503813.jpg?w=200' }}
          style={styles.logo}
        />
        <View style={styles.info}>
          <Text style={styles.institution}>ABC Polytechnic Institute</Text>
          <Text style={styles.degree}>Diploma in Computer Technology</Text>
          <Text style={styles.duration}>2021 - 2024</Text>
          <Text style={styles.result}>CGPA: 3.75</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/194/194931.png' }}
          style={styles.logo}
        />
        <View style={styles.info}>
          <Text style={styles.institution}>Govt. High School</Text>
          <Text style={styles.degree}>Secondary School Certificate (SSC)</Text>
          <Text style={styles.duration}>2019 - 2021</Text>
          <Text style={styles.result}>GPA: 5.00</Text>
        </View>
      </View>

      {/* Certificates Section */}
      <Text style={[styles.heading, { marginTop: 30 }]}>📜 My Certificates</Text>

      {certificatesData.map((cert) => (
        <TouchableOpacity
          key={cert.id}
          style={[styles.card, { flexDirection: 'row', alignItems: 'center' }]}
          activeOpacity={0.7}
          onPress={() => handleCertificatePress(cert.id)}
        >
          <Image source={{ uri: cert.imageUri }} style={styles.certLogo} />
          <View style={styles.info}>
            <Text style={styles.institution}>{cert.title}</Text>
            <Text style={styles.degree}>{cert.issuedBy}</Text>
            <Text style={styles.duration}>{cert.year}</Text>

            {selectedCertificate === cert.id && (
              <Text style={styles.details}>{cert.details}</Text>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0f172a',
    flexGrow: 1,
    marginTop: 40,
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
  certLogo: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 8,
    resizeMode: 'contain',
    backgroundColor: '#ffffff10',
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
  details: {
    marginTop: 6,
    fontSize: 14,
    color: '#f1f5f9',
    fontStyle: 'italic',
  },
});

export default Education;
