// Define a fake authentication object
const fakeAuth = {
  isAuthenticated: null, // Property to track authentication status

  // Method to simulate sign-in action
  signIn(callback) {
    fakeAuth.isAuthenticated = true; // Set isAuthenticated to true
    setTimeout(callback, 300); // Simulate asynchronous behavior with setTimeout
  },

  // Method to simulate sign-out action
  signOut(callback) {
    fakeAuth.isAuthenticated = false; // Set isAuthenticated to false
    setTimeout(callback, 300); // Simulate asynchronous behavior with setTimeout
  }
};

export default fakeAuth;