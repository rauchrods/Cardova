import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpandedSections, FormData } from "./BusinessCardCreator";
import BasicInformationSection from "./sections/BasicInformation";
import BrandColorSection from "./sections/BrandColorSection";
import ContactInformationSection from "./sections/ContactInformation";
import CustomFieldsSection from "./sections/CustomFieldsSection";
import PhotosLogosSection from "./sections/PhotosLogosSection";

interface EditTabProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string | null) => void;
  expandedSections: ExpandedSections;
  toggleSection: (section: keyof ExpandedSections) => void;
}

const EditTab = ({
  formData,
  updateFormData,
  expandedSections,
  toggleSection,
}: EditTabProps) => {
 

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
