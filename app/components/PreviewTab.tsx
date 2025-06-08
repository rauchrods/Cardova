import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import React, { useRef } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ViewShot from "react-native-view-shot";
import { FormData } from "./BusinessCardCreator";
import BusinessCardPreview from "./BusinessCardPreview";
import QRCodeComponent from "./QRCodeComponent";

interface PreviewTabProps {
  formData: FormData;
}

const PreviewTab: React.FC<PreviewTabProps> = ({ formData }) => {
  const businessCardRef = useRef<ViewShot>(null);
  const qrCodeRef = useRef<ViewShot>(null);

  const handleDownloadCard = async () => {
    try {
      if (businessCardRef.current?.capture) {
        // Capture the business card as image
        const uri = await businessCardRef.current.capture();

        // Request permission to save to media library
        const { status } = await MediaLibrary.requestPermissionsAsync();

        if (status === "granted") {
          // Save to device
          await MediaLibrary.saveToLibraryAsync(uri);
          Alert.alert("Success", "Business card saved to your photos!");
        } else {
          // Fallback to sharing if no permission
          if (await Sharing.isAvailableAsync()) {
            await Sharing.shareAsync(uri, {
              dialogTitle: "Save Business Card",
              mimeType: "image/png",
            });
          } else {
            Alert.alert("Error", "Unable to save or share the business card");
          }
        }
      } else {
        Alert.alert("Error", "Business card not ready for capture");
      }
    } catch (error) {
      console.error("Error downloading business card:", error);
      Alert.alert("Error", "Failed to download business card");
    }
  };

  const handleDownloadQR = async () => {
    try {
      if (qrCodeRef.current?.capture) {
        // Capture the QR code as image
        const uri = await qrCodeRef.current.capture();

        // Request permission to save to media library
        const { status } = await MediaLibrary.requestPermissionsAsync();

        if (status === "granted") {
          // Save to device
          await MediaLibrary.saveToLibraryAsync(uri);
          Alert.alert("Success", "QR code saved to your photos!");
        } else {
          // Fallback to sharing if no permission
          if (await Sharing.isAvailableAsync()) {
            await Sharing.shareAsync(uri, {
              dialogTitle: "Save QR Code",
              mimeType: "image/png",
            });
          } else {
            Alert.alert("Error", "Unable to save or share the QR code");
          }
        }
      } else {
        Alert.alert("Error", "QR code not ready for capture");
      }
    } catch (error) {
      console.error("Error downloading QR code:", error);
      Alert.alert("Error", "Failed to download QR code");
    }
  };

  return (
    <ScrollView
      style={styles.previewContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.previewTitle}>Business Card Preview</Text>

      {/* Business Card wrapped in ViewShot for capture */}
      <ViewShot
        ref={businessCardRef}
        options={{
          format: "png",
          quality: 1,
          result: "tmpfile",
        }}
      >
        <BusinessCardPreview formData={formData} />
      </ViewShot>

      {/* Hidden QR Code component for separate download */}
      <View style={styles.hiddenQRContainer}>
        <ViewShot
          ref={qrCodeRef}
          options={{
            format: "png",
            quality: 1,
            result: "tmpfile",
          }}
        >
          <QRCodeComponent formData={formData} />
        </ViewShot>
      </View>

      {/* Download Section */}
      <View style={styles.downloadSection}>
        <Text style={styles.downloadTitle}>Download</Text>

        <View style={styles.downloadButtons}>
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={handleDownloadCard}
          >
            <Ionicons name="download-outline" size={20} color="white" />
            <Text style={styles.downloadButtonText}>Business Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.qrOnlyButton}
            onPress={handleDownloadQR}
          >
            <Ionicons name="qr-code-outline" size={20} color="#6B7280" />
            <Text style={styles.qrOnlyButtonText}>QR Code Only</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    paddingBottom: 40, // Extra padding at bottom
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 24,
    textAlign: "center",
  },
  hiddenQRContainer: {
    position: "absolute",
    top: -1000, // Hide off-screen
    left: -1000,
  },
  downloadSection: {
    marginVertical: 4,
  },
  downloadTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 16,
  },
  downloadButtons: {
    flexDirection: "row",
    gap: 12,
  },
  downloadButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#059669",
    borderRadius: 12,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  downloadButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  qrOnlyButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  qrOnlyButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7280",
  },
});

export default PreviewTab;
