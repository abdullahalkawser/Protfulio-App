import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const ProfileCard = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.gradientBackground}>
        <View style={styles.card}>
          <Image
            source={{
              uri:
                'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/489085217_1225632368983132_9073890756416247574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEp2EjF5dKG6maYNVO3zPq8_QmJvGbojLn9CYm8ZuiMuVPdNWJoVaZmN0H-BcjyM-f2wgIxKfnYtQc00DxgLKhn&_nc_ohc=x6j_ZibJp-0Q7kNvwG3tiNR&_nc_oc=AdmGk8NQf1n5f9-ORvoBw1eysgWN0bQs3K6RlDUezv4jWSrJ01GM20Bnek2yewDubOA&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=vKniDnheD8F7WF2NC4-4gA&oh=00_AfKmP3sQ-0GPi2OV1uYcweOfR78W_zBPoSWgIxSmu00Dgw&oe=683E1EE1',
            }}
            style={styles.image}

          />
          

          <View style={styles.detailsContainer}>
            <Text style={styles.name}> Abdullah Al Kawser</Text>
            <Text style={styles.username}>Software Engineer | Programmer</Text>
            <Text style={styles.bio}>Machine Learning (ML)  |  Artificial Intelligence (AI) |  Data Science |  Natural Language Processing (NLP) |  Deep Learning</Text>
     
            <Text style={styles.info}>📅 Joined: Feb 11, 2024</Text>

            <View style={styles.divider} />

       

            <TouchableOpacity style={styles.link}>
              <FontAwesome name="github" size={20} color="#000000" />
              <Text style={styles.linkText}>@m-aqsam</Text>
            </TouchableOpacity>
          </View>




        
        </View>
        <View style={styles.linkRow}>
  <TouchableOpacity style={styles.linkTransparent}>
    <Entypo name="email" size={20} color="#FFFFFF" />
    <Text style={styles.linkText}>maqsam1155@gmail.com</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.linkTransparent, { marginLeft: 15 }]}>
    <FontAwesome name="facebook-square" size={20} color="#1877F2" />
    <Text style={styles.linkText}>@m_aqsam</Text>
  </TouchableOpacity>
</View>
        <View style={styles.linkRow}>
  <TouchableOpacity style={styles.linkTransparent}>
    <Entypo name="email" size={20} color="#FFFFFF" />
    <Text style={styles.linkText}>maqsam1155@gmail.com</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.linkTransparent, { marginLeft: 15 }]}>
    <FontAwesome name="facebook-square" size={20} color="#1877F2" />
    <Text style={styles.linkText}>@m_aqsam</Text>
  </TouchableOpacity>
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
    marginTop:50
  },
  linkRow: {
  flexDirection: 'row',
  justifyContent: 'center',  // center horizontally
  marginTop: 10,
  width: '100%',
},

linkTransparent: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#FFFFFF',
  backgroundColor: '#FF66FF',
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 12,
  flex: 1,               // let them share equal width
},
image: {
  width: 200,
  height: 200,
  borderRadius: 50, // for a perfect circle (half of width/height)
  borderWidth: 3,
  borderColor: '#66FF66',
  position: 'absolute',
  top: 10,             // adjust this value to move down from the top
  alignSelf: 'center', // center horizontally
  zIndex: 10,          // to stay on top of other elements
  backgroundColor: 'transparent',
},
detailsContainer: {
  width: '100%',
  alignItems: 'center',
  backgroundColor: '#FF3399',

  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.15)',
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 10,
  elevation: 8,
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 15,
  marginTop: 170,  // Add marginTop so that details container is pushed down enough for the image
  marginBottom: 10,
},
  name: {
      marginTop: 40, 
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  username: {
    fontSize: 18,
    color: 'white',
    marginBottom: 6,
    fontWeight: 'semibold'
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
  divider: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 14,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#33FF00',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    width: '100%',
  },
  linkText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 10,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    gap: 10,
      backgroundColor: 'red',
  },
  infoButton: {
  
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    minWidth: '28%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
  },
  infoButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProfileCard;
