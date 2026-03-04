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
  const isAvailable = vehicle.in_service && !vehicle.is_rented;
  const imageUrl = vehicle.primary_image?.url ?? (vehicle.images?.[0]?.url ?? null);

  return (
    <View style={styles.card}>
      <Image
        source={
          imageUrl
            ? { uri: imageUrl }
            : require('../../assets/icon.png')
        }
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>
            {vehicle.brand} {vehicle.model}
          </Text>
          <View
            style={[
              styles.badge,
              isAvailable ? styles.badgeAvailable : styles.badgeUnavailable,
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                isAvailable
                  ? styles.badgeTextAvailable
                  : styles.badgeTextUnavailable,
              ]}
            >
              {isAvailable ? 'Available' : 'Unavailable'}
            </Text>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={14} color={Colors.textSecondary} />
            <Text style={styles.detailText}>{vehicle.agency?.city ?? 'N/A'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="car-outline" size={14} color={Colors.textSecondary} />
            <Text style={styles.detailText}>{vehicle.category?.name ?? 'N/A'}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.specs}>
            <Text style={styles.specText}>{vehicle.fuel?.name ?? 'N/A'}</Text>
            <Text style={styles.specDot}>•</Text>
            <Text style={styles.specText}>{vehicle.doors_number} doors</Text>
            <Text style={styles.specDot}>•</Text>
            <Text style={styles.specText}>{vehicle.last_mileage} km</Text>
          </View>
          <Text style={styles.price}>
            {vehicle.rental_price} MAD
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
