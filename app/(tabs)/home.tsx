import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ProfileCard = () => {
  
  const socialLinks = {
    github: 'https://github.com/abdullahalkawser',
    facebook: 'https://www.facebook.com/abdullah.al.kawsar.575131',
    twitter: 'https://twitter.com/yourhandle',
    instagram: 'https://www.instagram.com/yourprofile',
    leetcode: 'https://leetcode.com/yourusername',
    codeforces: 'https://www.linkedin.com/feed/',
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track selected image index

  // Use images array as in your code...


  const showNextImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0; // Loop back to first
      return prevIndex + 1;
    });
  };

  const showPrevImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1; // Loop to last
      return prevIndex - 1;
    });
  };

  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (error) {
      alert('An error occurred while trying to open the link');
    }
  };

  const images = [
        'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/484168080_1209149267298109_2389307020186340481_n.jpg?_nc_cat=111&_nc_cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFSEUUizVFk5i1rQ1EosfhQtriVkwbwMIi2uJWTBvAwiOwRbUIERxqppeJc7urJ4oeUmjsAvBkeC6nhTd4O0vb0&_nc_ohc=KsPXNLsLiqYQ7kNvwHk3pMO&_nc_oc=Admrz6s4_udFsDzWUFFxx6xnQyjGYMVi5zTFXrF4IH_HflKlEwKM8KIh4_Oo5ccXt6w&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=0FBgqgurQxHWgq07uwFivQ&oh=00_AfJ59MPFHbgqlbRIC6HzUiESQZT8uTpPWLU1d0pgnNnJlw&oe=68412CED',
    'https://avatars.githubusercontent.com/u/86738329?s=400&u=e4e8f33f93be9f0fd584a424cd83140531587950&v=4',
    'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/480703318_1198817198331316_4079465396998191749_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&_nc_cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGOfDeK0FfSApRUIHDtqhI38_AGHqJl26Xz8AYeomXbpYziyGllEfT8lI67MAr871nPWdwlHBK_bjqGUT2Y50wL&_nc_ohc=QtEGPO5zs2gQ7kNvwFuDBFa&_nc_oc=AdncJR7lGK0HfGyeX0q8zuYmTOP0_8O7EXuKhXTPYag0SpuLYjs3ywmrFBpkka4fJJo&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=d3bObqbkmikQd0nRn44uBw&oh=00_AfJa6toKX_MHz38IfktiNLc6to0Q73ndxrGgjcgb_Oy6MA&oe=68410AE3',
    'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/482344842_1205502910996078_8445585200352593647_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=105&_nc_cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=15d38e&_nc_eui2=AeFXj7T5vvsUDuJb20gx2HWTfyzg5V0ZXQB_LODlXRldAP0y18wMm07_86r22iGeYeQpuOpLwEDXNjo7fOPsVmpl&_nc_ohc=rB4jlMmrgPsQ7kNvwGq9v4b&_nc_oc=AdkY7cAn9nMGUam4d1iXbt81xDLV09iuD7pNAy8_xwpvzU0lt-42Xw0JNd8qnncrTxc&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=IEIF8uehdJGMVkHbcQaDHQ&oh=00_AfJhhV7UnedOCwSLHtLKhf9hFTklAH9PAznHhEDp2F7Gmw&oe=684100A2',
    'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/496220875_1253265829553119_8918654040688155437_n.jpg?_nc_cat=110&_nc_cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHvPzISdTU8MKtCW4cMbMhm6Bh6u_uueEDoGHq7-654QCnX0XzUffTYFXaCEWngxTZauX08Iro61BjMVGFGLcnE&_nc_ohc=5Os_ylBgy5EQ7kNvwGH7GF0&_nc_oc=AdmO-R-BeJAUtyiYO0-dyBIYdD7L6kCQLOLpXb3mvmMPRi_h28oIKhPju_OeQQJJhs4&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=lNtx06q8HbKAZyt7JeAFIQ&oh=00_AfJHQvsppN6z-7yc2itL1cOHsWuq1fO2ha8QD4XHqN1UwA&oe=6841162F',
    'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/493918777_1249827663230269_812639154031349223_n.jpg?_nc_cat=100&_nc_cb=64d46a15-5a82848f&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGliIbFyctFDyqflAgjxTgO2u9gIJ-Qed3a72Agn5B53Z_5T2Gulyk797Oyz7bIfGH8pyiAj14hQXabvLHqYHOO&_nc_ohc=8lADSfWIP0kQ7kNvwEWeq9Y&_nc_oc=Adl__oKkPegv9WGU2Z7AgEl_6E2p7-vs7DS7qsTqYR_p1Ej9CW82drPatncrXJO8qMk&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=IZVX6Zg9JzgPOMO_sZHw4Q&oh=00_AfJ3OAUkZ6K6zcoTCkd4PnJH5q4PJIdxwnXs38rclhZCPw&oe=68410519',

  ];

  const openImage = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

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

      <View style={styles.gradientBackground}>
        {/* ... your existing card & gallery code ... */}

        <View>
          <Text style={styles.sectionHeader}>Photo Gallery</Text>

          <View style={styles.galleryContainer}>
            {images.map((uri, index) => (
              <TouchableOpacity key={index} onPress={() => openImage(index)}>
                <Image source={{ uri }} style={styles.galleryImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Modal for zoomed image with next/prev buttons */}
        <Modal visible={modalVisible} transparent={true} animationType="fade">
          <View style={styles.modalBackground}>
            <Pressable style={styles.modalCloseArea} onPress={() => setModalVisible(false)} />

            {selectedIndex !== null && (
              <>
                <Image
                  source={{ uri: images[selectedIndex] }}
                  style={styles.zoomedImage}
                  resizeMode="contain"
                />

                {/* Previous Button */}
                <TouchableOpacity
                  style={[styles.navButton, { left: 20 }]}
                  onPress={showPrevImage}
                >
                  <Text style={styles.navButtonText}>-</Text>
                </TouchableOpacity>

                {/* Next Button */}
                <TouchableOpacity
                  style={[styles.navButton, { right: 20 }]}
                  onPress={showNextImage}
                >
                  <Text style={styles.navButtonText}>+</Text>
                </TouchableOpacity>

                {/* Close Button */}
                <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
              </>
            )}
          </View>
        </Modal>
      </View>

        <View style={styles.socialContainer}>
          <Text style={styles.sectionHeader}>Communication</Text>

          <View style={styles.linkRow}>
            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: '#333' }]}
              onPress={() => openLink(socialLinks.github)}
            >
              <FontAwesome name="github" size={35} color="white" />
              <Text style={styles.linkText}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: '#1877F2' }]}
              onPress={() => openLink(socialLinks.facebook)}
            >
              <FontAwesome name="facebook" size={35} color="white" />
              <Text style={styles.linkText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linkRow}>
            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]}
              onPress={() => openLink(socialLinks.twitter)}
            >
              <FontAwesome name="twitter" size={35} color="white" />
              <Text style={styles.linkText}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: '#E1306C' }]}
              onPress={() => openLink(socialLinks.instagram)}
            >
              <FontAwesome name="instagram" size={35} color="white" />
              <Text style={styles.linkText}>Instagram</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linkRow}>
            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: '#FFA116' }]}
              onPress={() => openLink(socialLinks.leetcode)}
            >
              <FontAwesome name="code" size={35} color="white" />
              <Text style={styles.linkText}>LeetCode</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: '#6A5ACD' }]}
              onPress={() => openLink(socialLinks.codeforces)}
            >
              <FontAwesome name="envelope" size={35} color="white" />
              <Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    navButton: {
  position: 'absolute',
  top: height / 2 - 25,    // Adjusted for smaller height
  width: 50,
  height: 50,              // same as width for perfect circle
  backgroundColor: '#ffffff88',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 25,        // half of width/height for circle
  paddingHorizontal: 0,    // no horizontal padding to keep circle shape
  paddingVertical: 0,
  zIndex: 20,
  // Optional: add shadow for better depth
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5, 
  },
  navButtonText: {
    textAlign: 'center',
   fontSize: 40,
  fontWeight: '900',
  color: 'black',          // A nice fresh green
  textShadowColor: 'rgba(76, 175, 80, 0.7)',  // green shadow
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 10,     // glow effect
  elevation: 10,
  letterSpacing: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
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
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 40,
    paddingHorizontal: 10,
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
    textAlign: 'center',
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  galleryImage: {
    width: 150,
    height: 150,
    margin: 6,
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  zoomedImage: {
    width: width - 40,
    height: height / 2,
    borderRadius: 15,
  },
  modalCloseArea: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  closeButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#ffffff88',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 25,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProfileCard;
