import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import { Ionicons } from '@expo/vector-icons';
import { vehicleService, Vehicle } from '../services/vehicleService';
import { useAuth } from '../store/AuthContext';
import { useLocation } from '../hooks/useLocation';
import { GradientButton } from '../components/GradientButton';
import { Input } from '../components/Input';
import { CarCard } from '../components/CarCard';
import { SectionHeader } from '../components/SectionHeader';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import { Card } from '../components/Card';
import { Colors } from '../utils/colors';
import { Spacing, FontSize, BorderRadius } from '../utils/spacing';

export const HomeScreen: React.FC = () => {
  const { user } = useAuth();
  const { city: detectedCity } = useLocation();
  const [pickupCity, setPickupCity] = useState('');
  const [dropoffCity, setDropoffCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchCity, setSearchCity] = useState<string | undefined>(undefined);

  const {
    data: vehicles,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['vehicles', searchCity ?? detectedCity ?? user?.city],
    queryFn: () =>
      vehicleService.getAvailableVehicles(
        searchCity ?? detectedCity ?? user?.city ?? undefined
      ),
  });

  const handleSearch = () => {
    setSearchCity(pickupCity || undefined);
    refetch();
  };

  const renderHeader = () => (
    <View>
      <View style={styles.greeting}>
        <View>
          <Text style={styles.greetingText}>Hello,</Text>
          <Text style={styles.userName}>{user?.full_name ?? 'Guest'}</Text>
        </View>
        <View style={styles.locationBadge}>
          <Ionicons name="location" size={16} color={Colors.primary} />
          <Text style={styles.locationText}>
            {detectedCity ?? user?.city ?? 'Detecting...'}
          </Text>
        </View>
      </View>

      <Card style={styles.searchCard}>
        <Text style={styles.searchTitle}>Find Your Ride</Text>
        <Input
          label="Pickup City"
          placeholder="Enter pickup city"
          value={pickupCity}
          onChangeText={setPickupCity}
        />
        <View style={styles.dateRow}>
          <View style={styles.dateField}>
            <Input
              label="Start Date"
              placeholder="YYYY-MM-DD"
              value={startDate}
              onChangeText={setStartDate}
            />
          </View>
          <View style={styles.dateField}>
            <Input
              label="End Date"
              placeholder="YYYY-MM-DD"
              value={endDate}
              onChangeText={setEndDate}
            />
          </View>
        </View>
        <Input
          label="Dropoff Location"
          placeholder="Enter dropoff city"
          value={dropoffCity}
          onChangeText={setDropoffCity}
        />
        <GradientButton title="Search" onPress={handleSearch} />
      </Card>

      <SectionHeader title="Available Cars" />
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={vehicles ?? []}
        keyExtractor={(item: Vehicle) => item.id}
        renderItem={({ item }) => <CarCard vehicle={item} />}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={
          isLoading ? (
            <View style={styles.listPadding}>
              <LoadingSkeleton />
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <Ionicons name="car-outline" size={48} color={Colors.textSecondary} />
              <Text style={styles.emptyText}>No vehicles found</Text>
              <Text style={styles.emptySubtext}>
                Try adjusting your search criteria
              </Text>
            </View>
          )
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={Colors.primary}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xl,
  },
  listPadding: {
    paddingTop: Spacing.sm,
  },
  greeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing.lg,
  },
  greetingText: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
  },
  userName: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.muted,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    gap: 4,
  },
  locationText: {
    fontSize: FontSize.sm,
    color: Colors.primary,
    fontWeight: '500',
  },
  searchCard: {
    marginBottom: Spacing.lg,
    padding: Spacing.lg,
  },
  searchTitle: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  dateRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  dateField: {
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
  },
  emptyText: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.text,
    marginTop: Spacing.md,
  },
  emptySubtext: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
});
