import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

const categorizedBlogs = {
  Technology: [
    {
      id: 1,
      title: 'The Rise of AI in Everyday Life',
      description: 'Explore how AI is shaping daily life, from smart assistants to personalized apps.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-30T08:30:00Z',
      minutesAgo: 45,
      author: 'Jane Doe',
      category: 'Technology',
      readingTime: '6 min read',
      tags: ['AI', 'Smart Assistants', 'Technology', 'Innovation'],
      sourceUrl: 'https://example.com/blog/rise-of-ai-in-everyday-life',
      like: '15k',
    },
    {
      id: 2,
      title: '5G Technology: What You Need to Know',
      description: 'Understand the speed, benefits, and concerns of 5G in our connected world.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-29T10:15:00Z',
      minutesAgo: 120,
      author: 'John Smith',
      category: 'Technology',
      readingTime: '5 min read',
      tags: ['5G', 'Connectivity', 'Speed', 'Technology'],
      sourceUrl: 'https://example.com/blog/5g-technology-need-to-know',
            like: '20k',
    },
    {
      id: 3,
      title: 'The Future of Web Development',
      description: 'A look at trends like Jamstack, serverless, and modern JS frameworks.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-28T14:45:00Z',
      minutesAgo: 180,
      author: 'Emily Clark',
      category: 'Technology',
      readingTime: '7 min read',
      tags: ['Web Development', 'Jamstack', 'Serverless', 'JavaScript'],
      sourceUrl: 'https://example.com/blog/future-of-web-development',
    },
  ],
  
  'Social Science': [
    {
      id: 4,
      title: 'Cybersecurity in 2025',
      description: 'Learn about rising threats and how to protect your digital identity.',
      image: 'https://images.unsplash.com/photo-1503424886303-6f6d18a62a98?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-27T09:30:00Z',
      minutesAgo: 240,
      author: 'Alex Johnson',
      category: 'Social Science',
      readingTime: '8 min read',
      tags: ['Cybersecurity', 'Threats', 'Privacy', 'Digital Identity'],
      sourceUrl: 'https://example.com/blog/cybersecurity-2025',
    },
    {
      id: 6,
      title: 'House Price Prediction',
      description: 'Explore blockchain in healthcare, voting systems, and supply chains.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-26T13:00:00Z',
      minutesAgo: 300,
      author: 'Maria Lopez',
      category: 'Social Science',
      readingTime: '9 min read',
      tags: ['Blockchain', 'Healthcare', 'Voting', 'Supply Chain'],
      sourceUrl: 'https://example.com/blog/blockchain-beyond-crypto',
    },
  ],
  'Tech Career & Guidelines': [
    {
      id: 5,
      title: 'The Impact of Quantum Computing',
      description: 'Quantum computing could revolutionize finance, healthcare, and more.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-25T16:20:00Z',
      minutesAgo: 360,
      author: 'Daniel Kim',
      category: 'Tech Career & Guidelines',
      readingTime: '10 min read',
      tags: ['Quantum Computing', 'Finance', 'Healthcare', 'Technology'],
      sourceUrl: 'https://example.com/blog/impact-quantum-computing',
    },
    {
      id: 7,
      title: 'The Rise of Edge Computing',
      description: 'Faster data processing at the edge is changing the internet.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-24T11:50:00Z',
      minutesAgo: 420,
      author: 'Sophia Martinez',
      category: 'Tech Career & Guidelines',
      readingTime: '7 min read',
      tags: ['Edge Computing', 'Data Processing', 'Internet', 'Technology'],
      sourceUrl: 'https://example.com/blog/rise-edge-computing',
    },
  ],

  'Software Engineering': [
    {
      id: 10,
      title: 'Agile Methodologies in 2025',
      description: 'How Agile practices continue to evolve in software development.',
      image: 'https://images.unsplash.com/photo-1581093588401-7bb1a0bc3c70?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-21T08:00:00Z',
      minutesAgo: 600,
      author: 'Ethan Davis',
      category: 'SOFTWARE ENGINEERING',
      readingTime: '7 min read',
      tags: ['Agile', 'Software Development', 'Project Management', 'Scrum'],
      sourceUrl: 'https://example.com/blog/agile-methodologies-2025',
    },
    {
      id: 11,
      title: 'Code Review Best Practices',
      description: 'Improving code quality through effective code reviews.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-05-20T12:00:00Z',
      minutesAgo: 660,
      author: 'Mia Green',
      category: 'SOFTWARE ENGINEERING',
      readingTime: '5 min read',
      tags: ['Code Review', 'Best Practices', 'Software Quality', 'Collaboration'],
      sourceUrl: 'https://example.com/blog/code-review-best-practices',
    },
  ],
 
};

const Blog = () => {
  return (
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={styles.outerScroll}>
      <View style={styles.container}>
        <Text style={styles.mainHeader}>🚀 Trending Tech Project</Text>
        {Object.entries(categorizedBlogs).map(([category, blogs]) => (
          <View key={category} style={styles.section}>
            <Text style={styles.sectionHeader}>{category}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {blogs.map((blog) => (
                <Pressable
                  key={blog.id}
                  style={({ pressed }) => [styles.card, pressed && styles.pressedCard]}
                  onPress={() => console.log(`Opening blog: ${blog.sourceUrl}`)}
                >
                  <Image source={{ uri: blog.image }} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.title} numberOfLines={2}>{blog.title}</Text>
                    <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
                      {blog.description}
                    </Text>
                    <View style={styles.bottomRow}>
                      <Text style={styles.like}>❤️ {blog.like || '0'}</Text>
                      <Text style={styles.readingTime}>{blog.readingTime}</Text>
                    </View>
                    <Text style={styles.timeAgo}>{blog.minutesAgo} minutes ago</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerScroll: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingBottom: 30,
  },
  mainHeader: {
    fontSize: 28,
    fontWeight: '900',
    marginLeft: 20,
    marginBottom: 24,
    color: '#f0e6ff',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: '800',
    marginLeft: 20,
    marginBottom: 12,
    color: 'white',
  },
  scrollContent: {
    paddingLeft: 20,
    paddingRight: 12,
  },
  card: {
    width: 330,
    marginRight: 16,
    padding: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  pressedCard: {
    transform: [{ scale: 0.96 }],
    opacity: 0.85,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
    marginBottom: 6,
  },
  description: {
    fontSize: 13.5,
    color: 'white',
    lineHeight: 18,
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  like: {
    color: 'green',
    fontWeight: '600',
    fontSize: 13,
  },
  readingTime: {
    color: '#d4d4d4',
    fontSize: 13,
  },
  timeAgo: {
    marginTop: 4,
    color: '#a1a1aa',
    fontSize: 12,
  },
});

export default Blog;




