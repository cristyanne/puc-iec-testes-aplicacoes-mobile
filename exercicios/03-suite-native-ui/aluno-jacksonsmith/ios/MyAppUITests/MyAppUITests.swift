import XCTest

final class MyAppUITests: XCTestCase {
    var app: XCUIApplication!

    override func setUpWithError() throws {
        app = XCUIApplication()
        app.launch()
    }

    func testLoginWithValidCredentials() throws { }
    func testLoginWithInvalidEmail() throws { }
    func testNavigateToHomeAfterLogin() throws { }
    func testLogoutReturnsToLogin() throws { }
    func testForgotPasswordNavigates() throws { }
}
