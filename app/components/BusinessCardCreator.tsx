import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import EditTab from "./EditTab";
import Header from "./Header";
import PreviewTab from "./PreviewTab";
import TabNavigation from "./TabNavigation";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  company: string;
  phone: string;
  website: string;
  linkedin: string;
  brandColor: string;
  profilePhoto: string | null;
  companyLogo: string | null;
}

export interface ExpandedSections {
  basic: boolean;
  contact: boolean;
  photos: boolean;
  brand: boolean;
  custom: boolean;
}

const BusinessCardCreator = () => {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    phone: "",
    website: "",
    linkedin: "",
    brandColor: "#DC2626", // Default red
    profilePhoto: null,
    companyLogo: null,
  });

  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    basic: true,
    contact: false,
    photos: false,
    brand: false,
    custom: false,
  });

  const updateFormData = (field: keyof FormData, value: string | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

      <Header />

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <View style={styles.content}>
        {activeTab === "edit" ? (
          <EditTab
            formData={formData}
            updateFormData={updateFormData}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
        ) : (
          <PreviewTab formData={formData} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  content: {
    flex: 1,
  },
});

export default BusinessCardCreator;
