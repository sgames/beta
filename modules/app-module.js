import { getCookie } from './cookies-module.js'

const accessCookie = getCookie("timestamp");

console.log(accessCookie);

if(accessCookie !== "true") {
    console.log("Redirecting...");
    window.location.href = "index.html"
}