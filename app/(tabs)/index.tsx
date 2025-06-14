import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/School-cover-image.jpg')}
          style={styles.coverImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Farooqabad School</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.description}>
          Farooqabad is a town in Sheikhupura District serving families across all economic levels. Our school is dedicated to supporting children from families living below the poverty line, providing them with quality education and hope for a better future.
        </ThemedText>

        <ThemedView style={styles.highlightContainer}>
          <ThemedText type="subtitle">Our Impact</ThemedText>
          <ThemedText>• Currently serving over 240 children</ThemedText>
          <ThemedText>• Education from grades 1 to 10</ThemedText>
          <ThemedText>• Supporting families in need</ThemedText>
        </ThemedView>

        <ThemedView style={styles.ctaContainer}>
          <ThemedText type="subtitle">Make a Difference</ThemedText>
          <ThemedText style={styles.ctaText}>
            Become a sponsor and make a lasting impact in the lives of these deserving children. Your support can help break the cycle of poverty through education.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.authContainer}>
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity style={styles.authButton}>
            <ThemedText style={styles.authButtonText}>Sign In</ThemedText>
          </TouchableOpacity>
        </Link>
        <Link href="/(auth)/register" asChild>
          <TouchableOpacity style={[styles.authButton, styles.registerButton]}>
            <ThemedText style={styles.authButtonText}>Become a Sponsor</ThemedText>
          </TouchableOpacity>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  contentContainer: {
    gap: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  highlightContainer: {
    gap: 8,
    padding: 16,
    backgroundColor: 'rgba(76, 102, 159, 0.1)',
    borderRadius: 8,
  },
  ctaContainer: {
    gap: 8,
    padding: 16,
    backgroundColor: 'rgba(59, 89, 152, 0.1)',
    borderRadius: 8,
  },
  ctaText: {
    fontSize: 16,
    lineHeight: 24,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  authContainer: {
    marginVertical: 20,
    gap: 12,
  },
  authButton: {
    backgroundColor: '#4c669f',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  registerButton: {
    backgroundColor: '#3b5998',
  },
  authButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
