# Learning Management System (LMS)

A modern, feature-rich Learning Management System built with React Native, Expo, and TypeScript. This application provides a seamless learning experience for students, teachers, and parents.

![LMS Preview](assets/images/preview.png)

## Features

- 🔐 Secure Authentication System
- 👥 Role-based Access (Student, Teacher, Parent)
- 📱 Cross-platform (iOS, Android, Web)
- 🎨 Modern UI with Tailwind CSS
- 📊 Interactive Dashboard
- 📝 Course Management
- 📚 Assignment Tracking
- 📈 Progress Monitoring
- 💬 Real-time Messaging

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Git
- Docker (optional, for containerized setup)

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lms-app.git
   cd lms-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## Docker Setup

1. **Build the Docker image**
   ```bash
   docker build -t lms-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 19000:19000 -p 19001:19001 -p 19002:19002 lms-app
   ```

3. **Access the application**
   - Open `http://localhost:19002` in your browser
   - Scan the QR code with Expo Go app on your mobile device

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
EXPO_PUBLIC_API_URL=your_api_url
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

## Project Structure

```
lms-app/
├── app/                    # Main application code
│   ├── (app)/             # Authenticated routes
│   ├── (auth)/            # Authentication routes
│   └── _layout.tsx        # Root layout
├── assets/                # Static assets
├── components/            # Reusable components
├── utils/                 # Utility functions
├── hooks/                 # Custom hooks
├── types/                 # TypeScript type definitions
└── config/               # Configuration files
```

## Available Scripts

- `npm start` - Start the development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run build` - Build the production version
- `npm run test` - Run tests
- `npm run lint` - Run linter

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Deployment

### iOS
1. Configure your Apple Developer account
2. Update app.json with your bundle identifier
3. Run `eas build --platform ios`

### Android
1. Generate a keystore file
2. Update app.json with your keystore details
3. Run `eas build --platform android`

### Web
1. Run `npm run build:web`
2. Deploy the `web-build` directory to your hosting service

## Troubleshooting

### Common Issues

1. **Metro bundler not starting**
   ```bash
   # Clear metro bundler cache
   npm start -- --reset-cache
   ```

2. **Build failures**
   ```bash
   # Clear build cache
   rm -rf node_modules
   npm install
   ```

3. **Docker container issues**
   ```bash
   # Rebuild container
   docker-compose down
   docker-compose up --build
   ```

## Support

For support, email support@lms-app.com or join our Slack channel.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
