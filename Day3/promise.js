// What potential issues exist in this code? How would you restructure it? Make this faster
// async function fetchUserData(userId) {
//   const user = await fetchUser(userId);
//   const posts = await fetchPosts(userId);
//   const comments = await fetchComments(userId);

//   return { user, posts, comments };
// }

// corrected code
async function fetchUserData(userId) {
    const [user,posts,comments] = await Promise.all([
     fetchUser(userId),
     fetchPosts(userId),
     fetchComments(userId)])
  
    return { user, posts, comments };
  }