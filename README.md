# Cardova - Digital Business Card Creator 📇

Create beautiful, professional digital business cards with ease. Share your contact information in style with QR codes, photos, and customizable designs.

![Cardova Banner](https://img.shields.io/badge/Cardova-v1.0.0-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.79.3-green.svg)
![Expo](https://img.shields.io/badge/Expo-SDK%2053-black.svg)

## ✨ Features

- 🎨 **Custom Design** - Personalize colors, photos, and layouts
- 📸 **Photo Upload** - Add profile pictures and company logos  
- 🎯 **QR Code Generation** - Auto-generated vCard QR codes
- 📱 **Mobile Optimized** - Native iOS and Android experience
- 💾 **Export & Share** - Download as PNG or share directly
- 🎨 **Color Picker** - Choose from presets or create custom colors
- 📝 **Form Validation** - Guided input with helpful hints

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Studio (for emulators)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/cardova.git
   cd cardova
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - **iOS**: Press `i` or scan QR with Expo Go app
   - **Android**: Press `a` or scan QR with Expo Go app
   - **Web**: Press `w` for web version

## 📱 Screenshots

| Business Card Creator | Color Picker | QR Code Generation |
|:---------------------:|:------------:|:------------------:|
| *Main editing interface* | *Custom color selection* | *Auto-generated QR codes* |

## 🛠️ Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Styling**: StyleSheet (React Native)
- **Icons**: Expo Vector Icons
- **Image Handling**: Expo Image Picker
- **QR Codes**: react-native-qrcode-svg
- **Export**: react-native-view-shot + Expo Sharing

## 📂 Project Structure

```
cardova/
├── app/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── BasicInformationSection.tsx
│   │   │   ├── ContactInformationSection.tsx
│   │   │   ├── PhotosLogosSection.tsx
│   │   │   ├── BrandColorSection.tsx
│   │   │   └── CustomFieldsSection.tsx
│   │   ├── shared/
│   │   │   ├── SectionHeader.tsx
│   │   │   └── InputField.tsx
│   │   ├── BusinessCardCreator.tsx
│   │   ├── BusinessCardPreview.tsx
│   │   ├── EditTab.tsx
│   │   ├── PreviewTab.tsx
│   │   ├── Header.tsx
│   │   ├── TabNavigation.tsx
│   │   └── QRCodeComponent.tsx
│   ├── _layout.tsx
│   ├── index.tsx
│   └── about.tsx
├── assets/
│   ├── images/
│   └── fonts/
└── README.md
```

## 🎯 Key Components

### BusinessCardCreator

Main container component managing form state and navigation between edit and preview modes.

### Form Sections

- **BasicInformation**: Name, email, job title, company
- **ContactInformation**: Phone, website, LinkedIn
- **PhotosLogos**: Profile photo and company logo upload
- **BrandColor**: Color picker with presets and custom options
- **CustomFields**: Extensible additional fields

### Export Features

- **Business Card Export**: High-quality PNG download
- **QR Code Export**: Standalone QR code download
- **vCard Generation**: Standard contact format

## 🔧 Configuration

### Environment Setup

1. **Expo Configuration** (`app.json`)

   ```json
   {
     "expo": {
       "name": "Cardova",
       "slug": "cardova",
       "version": "1.0.0",
       "orientation": "portrait"
     }
   }
   ```

2. **Dependencies** (`package.json`)
   - All required packages are listed in package.json
   - Run `npm install` to install dependencies

## 📚 Usage Guide

### Creating a Business Card

1. **Fill Basic Information**
   - Enter your name, email, job title
   - Add company information

2. **Add Contact Details**
   - Phone number, website, LinkedIn profile
   - All fields are optional except name and email

3. **Upload Photos**
   - Profile photo (recommended: square, transparent background)
   - Company logo (recommended: square format)

4. **Choose Colors**
   - Select from 15 preset colors
   - Use custom color picker for unlimited options

5. **Preview & Export**
   - Switch to preview tab to see your card
   - Download as PNG or export QR code

### QR Code Features

- **Auto-generated**: Updates when you change information
- **vCard format**: Standard contact format readable by all devices
- **High quality**: 300px resolution for printing
- **Separate download**: Get just the QR code for other uses

## 🔄 Development

### Available Scripts

```bash
# Start development server
npm start

# Start with cache cleared
npx expo start --clear

# Build for Android
npx expo build:android

# Build for iOS  
npx expo build:ios

# Run on specific platform
npx expo start --android
npx expo start --ios
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Expo ESLint configuration
- **Prettier**: Code formatting (optional)

## 📦 Dependencies

### Core Dependencies

- `expo`: ~53.0.10
- `react`: 19.0.0
- `react-native`: 0.79.3
- `expo-router`: ~5.0.7

### Feature Dependencies

- `expo-image-picker`: Image upload functionality
- `react-native-qrcode-svg`: QR code generation
- `react-native-view-shot`: Screenshot/export capability
- `expo-sharing`: Share functionality
- `expo-media-library`: Save to device photos

### UI Dependencies

- `@expo/vector-icons`: Icon library
- `react-native-gesture-handler`: Touch interactions
- `react-native-reanimated`: Smooth animations

## 🎨 Design System

### Colors

- **Primary**: #2563EB (Blue)
- **Success**: #059669 (Green)
- **Warning**: #EA580C (Orange)
- **Error**: #DC2626 (Red)
- **Gray Scale**: #F9FAFB, #6B7280, #1F2937

### Typography

- **Headers**: 18-32px, weight 600-bold
- **Body**: 14-16px, weight 400-500
- **Captions**: 12px, weight 400

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Expo Team** - For the amazing development platform
- **React Native Community** - For the robust ecosystem
- **Contributors** - Thank you for your contributions

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/cardova/issues)
- **Documentation**: [Expo Documentation](https://docs.expo.dev/)
- **Community**: [Expo Discord](https://chat.expo.dev)

---

**Made with ❤️ by [Your Name]**

*Create professional business cards that make lasting impressions.*
