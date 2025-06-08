import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { FormData } from "./BusinessCardCreator";
import BasicInformationSection from "./sections/BasicInformation";
import BrandColorSection from "./sections/BrandColorSection";
import ContactInformationSection from "./sections/ContactInformation";
import CustomFieldsSection from "./sections/CustomFieldsSection";
import PhotosLogosSection from "./sections/PhotosLogosSection";

interface EditTabProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string | null) => void;
}

interface ExpandedSections {
  basic: boolean;
  contact: boolean;
  photos: boolean;
  brand: boolean;
  custom: boolean;
}

const EditTab = ({ formData, updateFormData }: EditTabProps) => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    basic: true,
    contact: false,
    photos: false,
    brand: false,
    custom: false,
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <ScrollView
      style={styles.editContainer}
      showsVerticalScrollIndicator={false}
    >
      <BasicInformationSection
        formData={formData}
        updateFormData={updateFormData}
        isExpanded={expandedSections.basic}
        onToggle={() => toggleSection("basic")}
      />

      <ContactInformationSection
        formData={formData}
        updateFormData={updateFormData}
        isExpanded={expandedSections.contact}
        onToggle={() => toggleSection("contact")}
      />

      <PhotosLogosSection
        isExpanded={expandedSections.photos}
        onToggle={() => toggleSection("photos")}
        formData={formData}
        updateFormData={updateFormData}
      />

      <BrandColorSection
        brandColor={formData.brandColor}
        updateFormData={updateFormData}
        isExpanded={expandedSections.brand}
        onToggle={() => toggleSection("brand")}
      />

      <CustomFieldsSection
        isExpanded={expandedSections.custom}
        onToggle={() => toggleSection("custom")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 12,
  },
});

export default EditTab;
