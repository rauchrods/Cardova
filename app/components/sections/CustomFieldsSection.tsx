import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SectionHeader from '../shared/SectionHeader';

interface CustomFieldsSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const CustomFieldsSection: React.FC<CustomFieldsSectionProps> = ({
  isExpanded,
  onToggle,
}) => {
  return (
    <View style={styles.section}>
      <SectionHeader
        title="Custom Fields"
        icon="add-circle-outline"
        isExpanded={isExpanded}
        onToggle={onToggle}
      />
      {isExpanded && (
        <View style={styles.sectionContent}>
          <TouchableOpacity style={styles.addFieldButton}>
            <Ionicons name="add" size={20} color="#2563EB" />
            <Text style={styles.addFieldText}>Add Field</Text>
          </TouchableOpacity>
          <Text style={styles.noFieldsText}>No custom fields added yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 8,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  addFieldButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF4FF',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 8,
  },
  addFieldText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '500',
  },
  noFieldsText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default CustomFieldsSection;