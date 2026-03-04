import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Vehicle } from '../services/vehicleService';
import { Colors } from '../utils/colors';
import { Spacing, BorderRadius, FontSize } from '../utils/spacing';

interface CarCardProps {
  vehicle: Vehicle;
}

export const CarCard: React.FC<CarCardProps> = ({ vehicle }) => {
  return (
    <View style={styles.card}>
      <Image
        source={
          vehicle.image_url
            ? { uri: vehicle.image_url }
            : require('../../assets/icon.png')
        }
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>
            {vehicle.name}
          </Text>
          <View
            style={[
              styles.badge,
              vehicle.is_available ? styles.badgeAvailable : styles.badgeUnavailable,
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                vehicle.is_available
                  ? styles.badgeTextAvailable
                  : styles.badgeTextUnavailable,
              ]}
            >
              {vehicle.is_available ? 'Available' : 'Unavailable'}
            </Text>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={14} color={Colors.textSecondary} />
            <Text style={styles.detailText}>{vehicle.city}</Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="star" size={14} color={Colors.warning} />
            <Text style={styles.detailText}>{vehicle.rating}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.specs}>
            <Text style={styles.specText}>{vehicle.transmission}</Text>
            <Text style={styles.specDot}>•</Text>
            <Text style={styles.specText}>{vehicle.fuel_type}</Text>
            <Text style={styles.specDot}>•</Text>
            <Text style={styles.specText}>{vehicle.seats} seats</Text>
          </View>
          <Text style={styles.price}>
            ${vehicle.price_per_day}
            <Text style={styles.priceUnit}>/day</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  name: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.text,
    flex: 1,
    marginRight: Spacing.sm,
  },
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
  },
  badgeAvailable: {
    backgroundColor: '#dcfce7',
  },
  badgeUnavailable: {
    backgroundColor: '#fee2e2',
  },
  badgeText: {
    fontSize: FontSize.xs,
    fontWeight: '600',
  },
  badgeTextAvailable: {
    color: '#16a34a',
  },
  badgeTextUnavailable: {
    color: '#dc2626',
  },
  details: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specText: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    textTransform: 'capitalize',
  },
  specDot: {
    marginHorizontal: 4,
    color: Colors.textSecondary,
  },
  price: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.primary,
  },
  priceUnit: {
    fontSize: FontSize.sm,
    fontWeight: '400',
    color: Colors.textSecondary,
  },
});
