import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { FormData } from './BusinessCardCreator';

interface QRCodeComponentProps {
  formData: FormData;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ formData }) => {
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
END:VCARD`;
    return vCard;
  };

  return (
    <View style={styles.qrContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    backgroundColor: 'white',
    padding: 40,
    alignItems: 'center',
    width: 400,
    height: 500,
  },
  qrCodeWrapper: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
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
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },
  qrSubLabel: {
    marginTop: 8,
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default QRCodeComponent;