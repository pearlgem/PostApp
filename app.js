const form = document.getElementById("form");
const repeat_password = document.getElementById("repeat-password");
const login_button = document.getElementById("login-button");
const signup = document.getElementById("signup");
const displayName = document.getElementById("userName");

if (signup) {
  signup.addEventListener("click", (event) => {
    // console.log("working");
    const username = document.getElementById("username-signup");
    const email_input = document.getElementById("email-signup");
    const password_input = document.getElementById("password-signup");
    console.log(password_input.value);

    if (
      password_input.value &&
      email_input.value.includes("@") &&
      username.value
    ) {
      localStorage.setItem("name", username.value);
      localStorage.setItem("email", email_input.value);
      localStorage.setItem("password", password_input.value);
      alert("Sign-up successful! abhi login karo...");
      window.location.assign("login.html");

      // window.history.back();
      // window.history.go("index.html");
    } else {
      alert("Sab kuch fill karo bhai");
    }
  });
}

if (login_button) {
  login_button.addEventListener("click", (event) => {
    // console.log("test");
    const login_email = document.getElementById("login-email");
    console.log(login_email.value);
    const login_password = document.getElementById("login-password");
    console.log(login_password.value);

    // console.log(localStorage.getItem("email"));
    // console.log(localStorage.getItem("password"));

    if (
      login_email.value === localStorage.getItem("email") &&
      login_password.value === localStorage.getItem("password")
    ) {
      alert("logged in");
      window.location.assign("blog.html");
    } else {
      alert("invail user");
    }
  });
}
// -----------------------// ye blog wala page h ----------

userName.innerHTML = ` WELCOME ${localStorage.getItem("name").toUpperCase()}`;
const backgoundColor = document.getElementById("gradient-select");
const prewew = document.getElementById("gradient-preview");
const postButton = document.getElementById("post-button");
const postbox = document.getElementById("post-container");

backgoundColor.addEventListener("change", function updatePreview() {
  const selectedColor = backgoundColor.value;
  prewew.className =
    "w-full h-14 rounded-md mb-3 bg-gradient-to-r " + selectedColor;
});

postButton.addEventListener("click", function createPost() {
  const postInput = document.getElementById("post-input");
  const postText = postInput.value;
  const selectedColor = backgoundColor.value;

  if (postText.length === 0) {
    alert("Kuch likho to sahi Sir :/");
    return;
  }

  const newPost = {
    text: postText,
    gradient: selectedColor,
  };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));

  displayPost(newPost);
  postInput.value = "";
});

function displayPost(post) {
  const newPostDiv = document.createElement("div");
  newPostDiv.className =
    "p-6 text-3xl font-bold text-white custom-stroke rounded-md bg-gradient-to-r  " +
    post.gradient;
  newPostDiv.textContent = post.text;
  postbox.appendChild(newPostDiv);
}

function allPostsIguess() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  for (const post of posts) {
    displayPost(post);
  }
}

allPostsIguess();
