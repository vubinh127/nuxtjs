// export default defineNuxtRouteMiddleware ((to) => {

//     const isLoggedIn = false;
    
//     if (!isLoggedIn && to.path !== '/login') {
//         return navigateTo("/login");
//     }

// }) 

// import { storeToRefs } from 'pinia';
// import { useAuthStore } from '~/store/auth';

// export default defineNuxtRouteMiddleware((to) => {
//   const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
//   const token = useCookie('token'); // get token from cookies

//   if (token.value) {
//     // check if value exists
//     // todo verify if token is valid, before updating the state
//     authenticated.value = true; // update the state to authenticated
//   }

//   // if token exists and url is /login redirect to homepage
//   if (token.value && to?.name === 'login') {
//     return navigateTo('/');
//   }

//   // if token doesn't exist redirect to log in
//   if (!token.value && to?.name !== 'login') {
//     abortNavigation();
//     return navigateTo('/login');
//   }
// });

import { ref } from "vue";

export default defineNuxtRouteMiddleware((to, from) => {
  const isLoginned = ref(localStorage.getItem("isLoginned") === "true");
  if (to.path === "/login") {
    return;
  }

  if (!isLoginned.value) {
    return navigateTo("/login");
  }
  // Lưu đường dẫn hiện tại vào bộ nhớ cục bộ

  const redirectUrl = localStorage.getItem("redirectUrl");
  if (redirectUrl) {
    navigateTo(redirectUrl);
  }
});

