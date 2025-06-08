import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormData } from '../BusinessCardCreator';
import InputField from '../shared/InputField';
import SectionHeader from '../shared/SectionHeader';

interface ContactInformationSectionProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

const ContactInformationSection = ({
  formData,
  updateFormData,
  isExpanded,
  onToggle,
}: ContactInformationSectionProps) => {
  return (
    <View style={styles.section}>
      <SectionHeader
        title="Contact Information"
        icon="call-outline"
        isExpanded={isExpanded}
        onToggle={onToggle}
      />
      {isExpanded && (
        <View style={styles.sectionContent}>
          <InputField
            label="Phone Number"
            value={formData.phone}
            onChangeText={(text) => updateFormData('phone', text)}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
          <InputField
            label="Website"
            value={formData.website}
            onChangeText={(text) => updateFormData('website', text)}
            placeholder="Enter website URL"
          />
          <InputField
            label="LinkedIn Profile"
            value={formData.linkedin}
            onChangeText={(text) => updateFormData('linkedin', text)}
            placeholder="Enter LinkedIn URL"
          />
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
});

export default ContactInformationSection;