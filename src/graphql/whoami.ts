export default `
query {
    userStatus {
      userId
      username
      avatar
      isSignedIn
      isMockUser
      isPremium
      isAdmin
      isSuperuser
      isTranslator
      permissions
    }
  }
  `;
