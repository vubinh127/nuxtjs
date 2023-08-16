<!-- <template>
    <div>
        <h1>Login</h1>
        <div class="container form">
            <label for="uname"><b>Username</b></label>
            <input v-model="user.username" type="text" class="input" placeholder="Enter Username" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input v-model="user.password" type="password" class="input" placeholder="Enter Password" name="psw" required />

            <button @click.prevent="login" class="button">Login</button>
        </div>
    </div>
</template>
  
  
<script setup>

    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';

    const { authenticateUser } = useAuthStore(); // use auth store

    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

    const user = ref({
        username: 'kminchelle',
        password: '0lelplR',
    });
    const router = useRouter();

    const login = async () => {
        await authenticateUser(user.value);
        // redirect to homepage if user is authenticated
        if (authenticated) {
            router.push('/');
        }
    };
</script>
   -->
  

<template>
    <div>
        <h1>Trang đăng nhập</h1>
        <form @submit.prevent="login">
            <input type="text" name="username" v-model="username" placeholder="Tên đăng nhập" />
            <input type="password" name="password" v-model="password" placeholder="Mật khẩu" />
            <button type="submit">Đăng nhập</button>
        </form>
        <div v-if="error">{{ error }}</div>
    </div>
</template>
  
  
<script setup>

const isLoginned = ref(false);
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')
const storeToken =ref('')

async function login() {

    if (username.value === 'raysonlee@watt.sg' && password.value === 'password123') {
        isLoginned.value = true

        localStorage.setItem("isLoginned", "true");
        const redirectUrl = localStorage.getItem('redirectUrl')
        localStorage.removeItem('redirectUrl')
        router.push(redirectUrl || '/')
    } else {

        error.value = 'Tài khoản hoặc mật khẩu không đúng'
    }
}
</script>

<style scoped>
/* Phần style để thiết lập kiểu dáng cho trang đăng nhập */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

div {
    width: 400px;
    margin: 50px auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

h1 {
    text-align: center;
    color: #333333;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    width: 80%;
    height: 40px;
    margin: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 10px;
}

button {
    width: 80%;
    height: 40px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: #333333;
    color: white;
}
</style>