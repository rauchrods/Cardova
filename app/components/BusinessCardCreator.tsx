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

  const updateFormData = (field: keyof FormData, value: string | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

      <Header />

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <View style={styles.content}>
        {activeTab === "edit" ? (
          <EditTab formData={formData} updateFormData={updateFormData} />
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
