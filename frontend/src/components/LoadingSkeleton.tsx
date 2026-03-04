import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';
import { Spacing, BorderRadius } from '../utils/spacing';

export const LoadingSkeleton: React.FC = () => {
  return (
    <View>
      {[1, 2, 3].map((i) => (
        <View key={i} style={styles.card}>
          <View style={styles.image} />
          <View style={styles.content}>
            <View style={styles.titleBar} />
            <View style={styles.subtitleBar} />
            <View style={styles.row}>
              <View style={styles.smallBar} />
              <View style={styles.smallBar} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: Spacing.md,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: Colors.muted,
  },
  content: {
    padding: Spacing.md,
  },
  titleBar: {
    height: 20,
    width: '60%',
    backgroundColor: Colors.muted,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.sm,
  },
  subtitleBar: {
    height: 14,
    width: '40%',
    backgroundColor: Colors.muted,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.sm,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  smallBar: {
    height: 14,
    width: 60,
    backgroundColor: Colors.muted,
    borderRadius: BorderRadius.sm,
  },
});
