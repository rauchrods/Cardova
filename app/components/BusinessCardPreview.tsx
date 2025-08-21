import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { hasRequiredFormFields } from "../utils/commons";
import { FormData } from "./BusinessCardCreator";

interface BusinessCardPreviewProps {
  formData: FormData;
}

const BusinessCardPreview = ({ formData }: BusinessCardPreviewProps) => {

  const hasRequiredFields = hasRequiredFormFields(formData);
  // Generate QR code data with contact information
  const generateQRData = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${formData.firstName} ${formData.lastName}
ORG:${formData.company}
TITLE:${formData.jobTitle}
EMAIL:${formData.email}
TEL:${formData.phone}
URL:${formData.website}
LINKEDIN:${formData.linkedin}
END:VCARD`;
    return vCard;
  };

  return (
    <View
      style={[styles.businessCard, { backgroundColor: formData.brandColor }]}
    >
      {/* Decorative Background Elements */}
      <View style={styles.backgroundPattern}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
      </View>

      <View style={styles.cardContent}>
        {/* Company Logo - Top Left */}
        {formData.companyLogo && (
          <View style={styles.companyLogoContainer}>
            <Image
              source={{ uri: formData.companyLogo }}
              style={styles.companyLogo}
            />
          </View>
        )}

        {/* Profile Photo - Center Top */}
        {formData.profilePhoto && (
          <View style={styles.profilePhotoContainer}>
            <Image
              source={{ uri: formData.profilePhoto }}
              style={styles.profilePhoto}
            />
          </View>
        )}

        {/* Main Content - Centered */}
        <View style={styles.mainContent}>
          <Text style={styles.cardName}>
            {formData.firstName || "First"} {formData.lastName || "Last"}
          </Text>
          <Text style={styles.cardTitle}>
            {formData.jobTitle || "Job Title"}
          </Text>
          <Text style={styles.cardCompany}>
            {formData.company || "Company Name"}
          </Text>

          <View style={styles.contactSection}>
            <Text style={styles.cardEmail}>
              {formData.email || "email@example.com"}
            </Text>
            {formData.phone && (
              <Text style={styles.cardPhone}>{formData.phone}</Text>
            )}
            {formData.website && (
              <Text style={styles.cardWebsite}>{formData.website}</Text>
            )}
          </View>
        </View>

        {/* QR Code Section - Bottom Center */}
        <View style={styles.qrSection}>
          <View style={styles.qrCodeContainer}>
            {hasRequiredFields ? (
              <QRCode
                value={generateQRData()}
                size={120}
                color={formData.brandColor}
                backgroundColor="white"
              />
            ) : (
              <View style={styles.qrPlaceholder}>
                <Ionicons
                  name="qr-code"
                  size={80}
                  color={formData.brandColor}
                />
                <Text style={styles.qrPlaceholderText}>
                  Complete required fields
                </Text>
              </View>
            )}
          </View>
          <Text style={styles.qrText}>Scan to save contact</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  businessCard: {
    borderRadius: 20,
    marginBottom: 32,
    marginHorizontal: 24, // Add horizontal margin
    minHeight: 480,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 12,
    position: "relative",
    overflow: "hidden",
  },
  backgroundPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: "absolute",
    borderRadius: 1000,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  circle1: {
    width: 200,
    height: 200,
    top: -50,
    right: -50,
  },
  circle2: {
    width: 150,
    height: 150,
    bottom: -30,
    left: -30,
  },
  cardContent: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  companyLogoContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 2,
  },
  companyLogo: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  profilePhotoContainer: {
    marginVertical: 15,
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 45,
  },
  mainContent: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 10,
  },
  cardName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 8,
    textAlign: "center",
  },
  cardCompany: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 24,
    textAlign: "center",
  },
  contactSection: {
    alignItems: "center",
  },
  cardEmail: {
    fontSize: 15,
    color: "white",
    marginBottom: 6,
    textAlign: "center",
  },
  cardPhone: {
    fontSize: 15,
    color: "white",
    marginBottom: 6,
    textAlign: "center",
  },
  cardWebsite: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  qrSection: {
    alignItems: "center",
    marginTop: 16,
  },
  qrCodeContainer: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  qrPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
    qrPlaceholderText: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    marginTop: 4,
    fontWeight: "500",
  },
  qrText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
  },
});

export default BusinessCardPreview;
