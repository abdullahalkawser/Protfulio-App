import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const data = {
    Technology: [
      {
        title: 'AI advancements in 2025',
        content:
          'Artificial Intelligence continues to evolve rapidly. In 2025, we expect breakthroughs in general AI, natural language understanding, and AI ethics...',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
      },
      {
        title: 'Top 10 JavaScript frameworks',
        content:
          'JavaScript frameworks keep evolving. React, Vue, Angular lead the market, but new contenders like Svelte and SolidJS are gaining attention...',
        image:
          'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=60',
      },
         {
        title: 'Top 10 JavaScript frameworks',
        content:
          'JavaScript frameworks keep evolving. React, Vue, Angular lead the market, but new contenders like Svelte and SolidJS are gaining attention...',
        image:
          'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=60',
      },
         {
        title: 'Top 10 JavaScript frameworks',
        content:
          'JavaScript frameworks keep evolving. React, Vue, Angular lead the market, but new contenders like Svelte and SolidJS are gaining attention...',
        image:
          'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=60',
      },
      // add more posts
    ],
    'Social Science': [
      {
        title: 'Impact of social media on youth',
        content:
          'Social media has changed the way young people interact and communicate. While it offers opportunities, it also creates challenges for mental health...',
        image:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60',
      },
      // add more posts
    ],
    'Software Engineering Guidelines': [
      {
        title: 'Clean code principles',
        content:
          'Clean code is essential for maintainability. Key principles include meaningful names, small functions, and avoiding duplication...',
        image:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60',
      },
      // add more posts
    ],
    'Career Development': [
      {
        title: 'How to build a tech portfolio',
        content:
          'A strong portfolio showcases your skills and projects. Use GitHub, personal websites, and blogs to highlight your work...',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
      },
      // add more posts
    ],
  };

  const categories = Object.keys(data);

  // Blog list view with cards
  const renderBlogList = () => (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>📚 Blog</Text>

      {categories.map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {data[category].map((post, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => setSelectedPost({ ...post, category })}
            >
              <Image source={{ uri: post.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{post.title}</Text>
                <Text style={styles.cardCategory}>{category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );

  // Detailed post view
  const renderPostDetail = () => (
    <View style={styles.detailContainer}>
      <TouchableOpacity onPress={() => setSelectedPost(null)} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back to Blog</Text>
      </TouchableOpacity>

      <Image source={{ uri: selectedPost.image }} style={styles.detailImage} />
      <Text style={styles.detailCategory}>{selectedPost.category}</Text>
      <Text style={styles.detailTitle}>{selectedPost.title}</Text>
      <ScrollView style={styles.detailContentContainer}>
        <Text style={styles.detailContent}>{selectedPost.content}</Text>
      </ScrollView>
    </View>
  );

  return selectedPost ? renderPostDetail() : renderBlogList();
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0f172a',
    marginTop:30,
    flexGrow: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#60a5fa',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2563eb',
    paddingBottom: 6,
  },

  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    flexDirection: 'row',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#e0e7ff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardCategory: {
    color: '#93c5fd',
    fontSize: 14,
  },

  detailContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },
  backButton: {
    marginBottom: 15,
  },
  backButtonText: {
    color: '#60a5fa',
    fontSize: 16,
    marginTop:30,
    fontWeight: '600',
  },
  detailImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
  detailCategory: {
    fontSize: 18,
    fontWeight: '600',
    color: '#38bdf8',
    marginBottom: 5,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  detailContentContainer: {
    flexGrow: 1,
  },
  detailContent: {
    fontSize: 16,
    color: '#e0e7ff',
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default Blog;
