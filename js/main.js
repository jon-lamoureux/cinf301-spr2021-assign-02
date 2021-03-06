// Base code source: https://stackoverflow.com/questions/30419929/setting-cookies-with-form-input

var today = new Date();
var expiry = new Date(today.getTime() + 1 * 24 * 3600 * 1000); // current date + 1 day
var expiryOld = new Date(today.getTime() - 1 * 24 * 3600 * 1000); // current date - 1 day

function setCookie(name, value) {
  document.cookie=name + "=; path=/; expires=" + expiryOld.toGMTString();
  document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}
function putCookie(form) {
  setCookie("postTitle", form[0].posttitle.value);
  setCookie("postUser", form[0].postuser.value);
  setCookie("postContent", form[0].postcontent.value);
  window.location.replace("post.html");
  return true;
}
function getCookie(cookName, vname) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookName}=`);
  if (parts.length === 2) {
    document.getElementById(vname).innerHTML = parts.pop().split(';').shift().replace(/%20/g, " ");
    return parts.pop().split(';').shift();
  }

  return "";
}
function passURL(form) {
  postTitle = form[0].posttitle.value;
  postUser = form[0].postuser.value;
  postContent = form[0].postcontent.value;
  window.location.replace("post.html?title=" + postTitle + "&username="+ postUser + "&content=" + postContent + "");
  return true;
}
function fetchData(cookName, vname) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  document.getElementById(vname).innerHTML = urlParams.get(cookName).replace(/%20/g, " ");
}
