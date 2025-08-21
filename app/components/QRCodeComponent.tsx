import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { hasRequiredFormFields } from "../utils/commons";
import { FormData } from "./BusinessCardCreator";

interface QRCodeComponentProps {
  formData: FormData;
}

const QRCodeComponent = ({ formData }: QRCodeComponentProps) => {

  const hasRequiredFields = hasRequiredFormFields(formData);

  // Generate QR code data with contact information
  const generateQRData = (): string => {
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
    <View style={styles.qrContainer}>
      {hasRequiredFields ? (
        <>
          <View style={styles.qrCodeWrapper}>
            <QRCode
              value={generateQRData()}
              size={300}
              color="#000000"
              backgroundColor="white"
            />
          </View>
          <Text style={styles.qrLabel}>
            {formData.firstName} {formData.lastName}
          </Text>
          <Text style={styles.qrSubLabel}>Scan to save contact</Text>
        </>
      ) : (
        <View style={styles.missingFieldsContainer}>
          <View style={styles.placeholderBox}>
            <Text style={styles.missingFieldsIcon}>📋</Text>
            <Text style={styles.missingFieldsTitle}>QR Code Not Available</Text>
            <Text style={styles.missingFieldsText}>
              Required fields are mandatory to generate QR code
            </Text>
            <Text style={styles.requiredFieldsList}>
              Please fill in:
              {formData.firstName.trim() === "" && "\n• First Name"}
              {formData.lastName.trim() === "" && "\n• Last Name"}
              {formData.email.trim() === "" && "\n• Email"}
              {formData.jobTitle.trim() === "" && "\n• Job Title"}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    backgroundColor: "white",
    padding: 40,
    alignItems: "center",
    width: 400,
    height: 500,
  },
  qrCodeWrapper: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  qrLabel: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
  },
  qrSubLabel: {
    marginTop: 8,
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
  },
  missingFieldsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderBox: {
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderStyle: "dashed",
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 320,
  },
  missingFieldsIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  missingFieldsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#374151",
    textAlign: "center",
    marginBottom: 12,
  },
  missingFieldsText: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 22,
  },
  requiredFieldsList: {
    fontSize: 14,
    color: "#EF4444",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 20,
  },
});

export default QRCodeComponent;
