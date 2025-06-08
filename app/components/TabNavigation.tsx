import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TabNavigationProps {
  activeTab: 'edit' | 'preview';
  setActiveTab: (tab: 'edit' | 'preview') => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'edit' && styles.activeTab]}
        onPress={() => setActiveTab('edit')}
      >
        <Ionicons 
          name="create-outline" 
          size={20} 
          color={activeTab === 'edit' ? '#2563EB' : '#6B7280'} 
        />
        <Text style={[styles.tabText, activeTab === 'edit' && styles.activeTabText]}>
          Edit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'preview' && styles.activeTab]}
        onPress={() => setActiveTab('preview')}
      >
        <Ionicons 
          name="eye-outline" 
          size={20} 
          color={activeTab === 'preview' ? '#2563EB' : '#6B7280'} 
        />
        <Text style={[styles.tabText, activeTab === 'preview' && styles.activeTabText]}>
          Preview
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    padding: 16,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#EBF4FF',
  },
  tabText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#2563EB',
  },
});

export default TabNavigation;