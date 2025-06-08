import React from "react";
import { StyleSheet, View } from "react-native";
import { FormData } from "../BusinessCardCreator";
import InputField from "../shared/InputField";
import SectionHeader from "../shared/SectionHeader";

interface BasicInformationSectionProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

const BasicInformationSection = ({
  formData,
  updateFormData,
  isExpanded,
  onToggle,
}: BasicInformationSectionProps) => {
  return (
    <View style={styles.section}>
      <SectionHeader
        title="Basic Information"
        icon="person-outline"
        isExpanded={isExpanded}
        onToggle={onToggle}
      />
      {isExpanded && (
        <View style={styles.sectionContent}>
          <InputField
            label="First Name *"
            value={formData.firstName}
            onChangeText={(text) => updateFormData("firstName", text)}
            placeholder="Enter first name"
          />
          <InputField
            label="Last Name *"
            value={formData.lastName}
            onChangeText={(text) => updateFormData("lastName", text)}
            placeholder="Enter last name"
          />
          <InputField
            label="Email *"
            value={formData.email}
            onChangeText={(text) => updateFormData("email", text)}
            placeholder="Enter email address"
            keyboardType="email-address"
          />
          <InputField
            label="Job Title *"
            value={formData.jobTitle}
            onChangeText={(text) => updateFormData("jobTitle", text)}
            placeholder="Enter job title"
          />
          <InputField
            label="Company"
            value={formData.company}
            onChangeText={(text) => updateFormData("company", text)}
            placeholder="Enter company name"
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
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default BasicInformationSection;
