import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../store/AuthContext';
import { Card } from '../components/Card';
import { Colors } from '../utils/colors';
import { Spacing, BorderRadius, FontSize } from '../utils/spacing';

export const SettingsScreen: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: logout,
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.screenTitle}>Settings</Text>

        <Card style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.full_name?.charAt(0)?.toUpperCase() ?? 'U'}
            </Text>
          </View>
          <Text style={styles.profileName}>{user?.full_name}</Text>
          <Text style={styles.profileEmail}>{user?.email}</Text>
        </Card>

        <Card style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color={Colors.primary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>{user?.phone ?? 'Not set'}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color={Colors.primary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>City</Text>
              <Text style={styles.infoValue}>{user?.city ?? 'Not set'}</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.comingSoonCard}>
          <View style={styles.comingSoonHeader}>
            <View style={styles.comingSoonLeft}>
              <Ionicons name="id-card-outline" size={24} color={Colors.textSecondary} />
              <View style={styles.comingSoonContent}>
                <Text style={styles.comingSoonTitle}>ID Card Verification</Text>
                <Text style={styles.comingSoonSubtext}>
                  Verify your identity to unlock all features
                </Text>
              </View>
            </View>
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonBadgeText}>Coming Soon</Text>
            </View>
          </View>
        </Card>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.lg,
  },
  screenTitle: {
    fontSize: FontSize.xxl,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.lg,
  },
  profileCard: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    marginBottom: Spacing.md,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  avatarText: {
    fontSize: FontSize.xxl,
    fontWeight: '700',
    color: Colors.primaryForeground,
  },
  profileName: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  profileEmail: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  infoCard: {
    marginBottom: Spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    gap: Spacing.md,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: FontSize.md,
    color: Colors.text,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginLeft: 36,
  },
  comingSoonCard: {
    marginBottom: Spacing.lg,
    opacity: 0.7,
  },
  comingSoonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comingSoonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    flex: 1,
  },
  comingSoonContent: {
    flex: 1,
  },
  comingSoonTitle: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.text,
  },
  comingSoonSubtext: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  comingSoonBadge: {
    backgroundColor: Colors.muted,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
  },
  comingSoonBadgeText: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    color: Colors.mutedForeground,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  logoutText: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.error,
  },
});
