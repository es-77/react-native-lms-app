import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/School-cover-image.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Latest Updates</ThemedText>
      </ThemedView>

      <Collapsible title="A Visit From Faroe Islands">
        <ThemedText style={styles.date}>21 Mar 2016</ThemedText>
        <ThemedText style={styles.articleText}>
          Finally, after a long time of planning, Hilda Videro, a board member of Children's Aid Faroe Islands, landed at Allama Iqbal International Airport in Lahore...
        </ThemedText>
        <TouchableOpacity style={styles.readMoreButton}>
          <ThemedText style={styles.readMoreText}>Read More</ThemedText>
        </TouchableOpacity>
      </Collapsible>

      <Collapsible title="New Dormitory for Girls in Machike Boarding School">
        <ThemedText style={styles.date}>21 Feb 2016</ThemedText>
        <ThemedText style={styles.articleText}>
          ABC Pakistan started dormitories by renting homes and small buildings located near to the schools. Having these facilities, located at distance from each other, posed...
        </ThemedText>
        <TouchableOpacity style={styles.readMoreButton}>
          <ThemedText style={styles.readMoreText}>Read More</ThemedText>
        </TouchableOpacity>
      </Collapsible>

      <Collapsible title="Komal, Danish & Nadeem Need Special Assistance">
        <ThemedText style={styles.date}>20 Dec 2015</ThemedText>
        <ThemedText style={styles.articleText}>
          A plea for help: Nadeem & his wife, having worked on brick kilns all their lives, struggling to clear one debt after another, always find themselves under new loans...
        </ThemedText>
        <TouchableOpacity style={styles.readMoreButton}>
          <ThemedText style={styles.readMoreText}>Read More</ThemedText>
        </TouchableOpacity>
      </Collapsible>

      <Collapsible title="Neha Sadiq's Journey to Education">
        <ThemedText style={styles.date}>20 Dec 2015</ThemedText>
        <ThemedText style={styles.articleText}>
          Neha Sadiq, the youngest of six siblings, still carries a great interest in receiving formal education after having to drop out of school due to...
        </ThemedText>
        <TouchableOpacity style={styles.readMoreButton}>
          <ThemedText style={styles.readMoreText}>Read More</ThemedText>
        </TouchableOpacity>
      </Collapsible>

      <Collapsible title="Construction Work in Peshawar School">
        <ThemedText style={styles.date}>05 Nov 2015</ThemedText>
        <ThemedText style={styles.articleText}>
          Due to tireless efforts of Stephen John, Maxwell Ditta and the management of ABC Pakistan, Peshawar school received another gift of two classrooms...
        </ThemedText>
        <TouchableOpacity style={styles.readMoreButton}>
          <ThemedText style={styles.readMoreText}>Read More</ThemedText>
        </TouchableOpacity>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  articleText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  readMoreButton: {
    backgroundColor: '#4c669f',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
