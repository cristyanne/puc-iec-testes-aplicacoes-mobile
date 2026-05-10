# A3 Native UI Suite — aluno: jacksonsmith (teste)

5 user journeys cada plataforma:

**Espresso (Android)** — `LoginUITest.kt`:
- login_with_valid_credentials
- login_with_invalid_email
- navigate_to_home_after_login
- logout_returns_to_login
- forgot_password_navigates

**XCUITest (iOS)** — `MyAppUITests.swift`:
- testLoginWithValidCredentials
- testLoginWithInvalidEmail
- testNavigateToHomeAfterLogin
- testLogoutReturnsToLogin
- testForgotPasswordNavigates

## Como rodar

```bash
# Android
./gradlew connectedAndroidTest

# iOS
xcodebuild test -scheme MyAppUITests -destination 'platform=iOS Simulator,name=iPhone 15'
```
