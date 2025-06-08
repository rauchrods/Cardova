import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormData } from '../BusinessCardCreator';
import SectionHeader from '../shared/SectionHeader';

interface BrandColorSectionProps {
  brandColor: string;
  updateFormData: (field: keyof FormData, value: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

const brandColors = [
  '#059669', // Green
  '#2563EB', // Blue
  '#7C3AED', // Purple
  '#1F2937', // Black
  '#DC2626', // Red
  '#EA580C', // Orange
  '#0D9488', // Teal
];

const BrandColorSection: React.FC<BrandColorSectionProps> = ({
  brandColor,
  updateFormData,
  isExpanded,
  onToggle,
}) => {
  return (
    <View style={styles.section}>
      <SectionHeader
        title="Brand Color"
        icon="color-palette-outline"
        isExpanded={isExpanded}
        onToggle={onToggle}
      />
      {isExpanded && (
        <View style={styles.sectionContent}>
          <View style={styles.colorPalette}>
            {brandColors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorOption,
                  { backgroundColor: color },
                  brandColor === color && styles.selectedColor
                ]}
                onPress={() => updateFormData('brandColor', color)}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.customColorButton}>
            <Text style={styles.customColorText}>Custom Color</Text>
          </TouchableOpacity>
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
  colorPalette: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#2563EB',
  },
  customColorButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  customColorText: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default BrandColorSection;