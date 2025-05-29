import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Blog = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>📚 Blog</Text>
      <Text style={styles.subheading}>Welcome to the developer's corner!</Text>
      <Text style={styles.paragraph}>
        This is your blog screen. You can share your thoughts, project writeups, tutorials, or life experiences as a developer. Start by adding some content here. You can make this dynamic later using a backend or CMS.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0f172a',
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '500',
    color: '#f8fafc',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#e2e8f0',
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default Blog;
