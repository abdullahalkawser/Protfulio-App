import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Animated,
} from 'react-native';

const projectsData = [
  {
    id: 1,
    title: 'AI Development',
    description: 'Building intelligent applications using artificial intelligence.',
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055672.png',
  },
    {
    id: 6,
    title: 'AI Development',
    description: 'Building intelligent applications using artificial intelligence.',
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055672.png',
  },
  {
    id: 2,
    title: 'Machine Learning',
    description: 'Creating predictive models and data-driven solutions.',
    image: 'https://cdn-icons-png.flaticon.com/512/1250/1250680.png',
  },
  {
    id: 3,
    title: 'Blockchain',
    description: 'Developing decentralized and secure blockchain apps.',
    image: 'https://cdn-icons-png.flaticon.com/512/625/625498.png',
  },
  {
    id: 4,
    title: 'Problem Solving',
    description: 'Solving complex algorithmic challenges efficiently.',
    image: 'https://cdn-icons-png.flaticon.com/512/1810/1810664.png',
  },
  {
    id: 5,
    title: 'Data Science',
    description: 'Analyzing data to extract insights and build models.',
    image: 'https://cdn-icons-png.flaticon.com/512/1006/1006557.png',
  },
];

// Custom Animated Card Component for press feedback
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ProjectCard = ({ project }) => {
  const scale = React.useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  return (
    <AnimatedPressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.card, { transform: [{ scale }] }]}
      android_ripple={{ color: '#4dabf7' }}
    >
      <Image source={{ uri: project.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>
      </View>
    </AnimatedPressable>
  );
};

const Project = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headingContainer}>
        <View style={styles.line} />
        <Text style={styles.heading}>🚀 My Projects</Text>
        <View style={styles.line} />
      </View>

      {projectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#0f172a',
    flexGrow: 1,
    paddingBottom:100,
    marginTop:20
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#38bdf8',
    opacity: 0.5,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginHorizontal: 12,
    letterSpacing: 1,
    fontFamily: 'Helvetica Neue',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'linear-gradient(90deg, #1e293b, #334155)', // React Native does not support this natively, you can use react-native-linear-gradient for real gradient

    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#0ea5e9',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 18,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#e0f2fe',
    marginBottom: 6,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 15,
    color: '#94a3b8',
    lineHeight: 22,
    fontWeight: '500',
  },
});

export default Project;
