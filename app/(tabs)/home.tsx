import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileCard = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.gradientBackground}>
        <View style={styles.card}>
          <Image
            source={{
              uri:
                'https://avatars.githubusercontent.com/u/86738329?s=400&u=e4e8f33f93be9f0fd584a424cd83140531587950&v=4',
            }}
            style={styles.image}
          />

          <View style={styles.detailsContainer}>
            <Text style={styles.name}>Abdullah Al Kawser</Text>
            <Text style={styles.username}>Software Engineer | Programmer</Text>
            <Text style={styles.bio}>
              Machine Learning | Artificial Intelligence | Data Science | Natural Language Processing | Deep Learning
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Text style={styles.info}>📅 Joined: Feb 11, 2024</Text>
              <Text style={[styles.info, { marginLeft: 10 }]}>📍 Location: Dhaka</Text>
            </View>
          </View>
        </View>

       <View style={styles.socialContainer}>
         {/* Section Header */}
        <Text style={styles.sectionHeader}> Communication</Text>

        <View style={styles.linkRow}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#333' }]}>
            <FontAwesome name="github" size={35} color="white" />
            <Text style={styles.linkText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1877F2' }]}>
            <FontAwesome name="facebook" size={35} color="white" />
            <Text style={styles.linkText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linkRow}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]}>
            <FontAwesome name="twitter" size={35} color="white" />
            <Text style={styles.linkText}>Twitter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#E1306C' }]}>
            <FontAwesome name="instagram" size={35} color="white" />
            <Text style={styles.linkText}>Instagram</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linkRow}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#FFA116' }]}>
            <FontAwesome name="code" size={35} color="white" />
            <Text style={styles.linkText}>LeetCode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#6A5ACD' }]}>
            <FontAwesome name="envelope" size={35} color="white" />
            <Text style={styles.linkText}>Codeforces</Text>
          </TouchableOpacity>
        </View>
       </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a0351',
    paddingBottom: 100,
  },
  gradientBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },
  socialContainer: {
  width: '100%',
  paddingHorizontal: 10,
  paddingVertical: 15,
  backgroundColor: 'rgba(255, 255, 255, 0.05)', // হালকা কালার ব্যাকগ্রাউন্ড
  borderRadius: 25,
  marginTop: 30,


  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 10,
},
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#66FF66',
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  detailsContainer: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',

    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 12,
    paddingVertical: 40,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 170,
    marginBottom: 20,
  },
  name: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 7,
  },
  username: {
    fontSize: 18,
    color: 'white',
    marginBottom: 6,
    fontWeight: '600',
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 10,
  },
  info: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
    flexWrap: 'wrap',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 15,
    shadowColor: '#9a0fbf',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
    marginVertical: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  linkText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',

    marginVertical: 20,

    letterSpacing: 1,
  },
});

export default ProfileCard;
