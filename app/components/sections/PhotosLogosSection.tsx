import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { FormData } from "../BusinessCardCreator";
import SectionHeader from "../shared/SectionHeader";

interface PhotosLogosSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string | null) => void;
}

const PhotosLogosSection = ({
  isExpanded,
  onToggle,
  formData,
  updateFormData,
}: PhotosLogosSectionProps) => {
  const pickImage = async (type: "profilePhoto" | "companyLogo") => {
    // Request permission
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Required",
        "Permission to access photo library is required!"
      );
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    //   aspect: [1, 1], // Square aspect ratio
    //   quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      updateFormData(type, result.assets[0].uri);
    }
  };

  const removeImage = (type: "profilePhoto" | "companyLogo") => {
    updateFormData(type, null);
  };

  const PhotoUploadButton = ({
    type,
    icon,
    label,
    imageUri,
  }: {
    type: "profilePhoto" | "companyLogo";
    icon: any;
    label: string;
    imageUri: string | null;
  }) => (
    <View style={styles.photoContainer}>
      <TouchableOpacity
        style={[styles.uploadButton, imageUri && styles.uploadButtonWithImage]}
        onPress={() => pickImage(type)}
      >
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
        ) : (
          <>
            <Ionicons name={icon} size={24} color="#6B7280" />
            <Text style={styles.uploadButtonText}>{label}</Text>
          </>
        )}
      </TouchableOpacity>

      {imageUri && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeImage(type)}
        >
          <Ionicons name="close-circle" size={24} color="#EF4444" />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.section}>
      <SectionHeader
        title="Photos & Logos"
        icon="image-outline"
        isExpanded={isExpanded}
        onToggle={onToggle}
      />
      {isExpanded && (
        <View style={styles.sectionContent}>
          <PhotoUploadButton
            type="profilePhoto"
            icon="camera-outline"
            label="Upload Profile Photo"
            imageUri={formData.profilePhoto}
          />

          <PhotoUploadButton
            type="companyLogo"
            icon="business-outline"
            label="Upload Company Logo"
            imageUri={formData.companyLogo}
          />

          <Text style={styles.uploadNote}>
            Square images work better. Transparent backgrounds preferred.
          </Text>
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
  photoContainer: {
    position: "relative",
    marginBottom: 12,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderStyle: "dashed",
    borderRadius: 8,
    paddingVertical: 20,
    minHeight: 80,
  },
  uploadButtonWithImage: {
    borderStyle: "solid",
    borderColor: "#059669",
    backgroundColor: "white",
    padding: 4,
  },
  uploadButtonText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#6B7280",
  },
  uploadedImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  removeButton: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  uploadNote: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 8,
  },
});

export default PhotosLogosSection;
