import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { FormData } from "../BusinessCardCreator";
import SectionHeader from "../shared/SectionHeader";

interface BrandColorSectionProps {
  brandColor: string;
  updateFormData: (field: keyof FormData, value: string | null) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

const brandColors = [
  "#059669", // Green
  "#2563EB", // Blue
  "#7C3AED", // Purple
  "#1F2937", // Black
  "#DC2626", // Red
  "#EA580C", // Orange
  "#0D9488", // Teal
];

const BrandColorSection: React.FC<BrandColorSectionProps> = ({
  brandColor,
  updateFormData,
  isExpanded,
  onToggle,
}) => {
  // Extended color palette for more options
  const extendedColors = [
    ...brandColors,
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FECA57",
    "#FF9FF3",
    "#54A0FF",
    "#5F27CD",
    "#FF5722",
    "#9C27B0",
    "#3F51B5",
    "#00BCD4",
    "#4CAF50",
    "#FFEB3B",
    "#FF9800",
    "#795548",
  ];

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
          {/* Color Palette */}
          <Text style={styles.colorGroupTitle}>Choose Color</Text>
          <View style={styles.colorGrid}>
            {extendedColors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorOption,
                  { backgroundColor: color },
                  brandColor === color && styles.selectedColor,
                ]}
                onPress={() => updateFormData("brandColor", color)}
              />
            ))}
          </View>

          {/* Custom Color Picker Button */}
          {/* <TouchableOpacity
            style={styles.customColorButton}
            onPress={handleCustomColor}
          >
            <Ionicons name="color-palette" size={20} color="#6B7280" />
            <Text style={styles.customColorText}>Custom Color</Text>
            <View
              style={[
                styles.currentColorPreview,
                { backgroundColor: brandColor },
              ]}
            />
          </TouchableOpacity> */}

          {/* Current Color Display */}
          <View style={styles.currentColorInfo}>
            <Text style={styles.currentColorLabel}>Current: {brandColor}</Text>
          </View>
        </View>
      )}

      {/* Simple Color Picker Modal */}
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
  colorGroupTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 12,
    marginTop: 8,
  },
  colorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
    gap: 8,
  },
  colorOption: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: "transparent",
  },
  selectedColor: {
    borderColor: "#2563EB",
    borderWidth: 4,
  },
  customColorButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  customColorText: {
    fontSize: 14,
    color: "#6B7280",
    flex: 1,
    marginLeft: 8,
  },
  currentColorPreview: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  currentColorInfo: {
    alignItems: "center",
    paddingVertical: 8,
  },
  currentColorLabel: {
    fontSize: 12,
    color: "#6B7280",
    fontFamily: "monospace",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
  },
  closeButton: {
    padding: 4,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sliderLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 12,
  },
  sliderTrack: {
    height: 40,
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
  },
  hueGradient: {
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ff0000",
  },
  sliderThumb: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 10,
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  colorPreviewContainer: {
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
  },
  largeColorPreview: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hexDisplay: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    fontFamily: "monospace",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
    backgroundColor: "white",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#6B7280",
    fontWeight: "500",
  },
  applyButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  applyButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
});

export default BrandColorSection;
