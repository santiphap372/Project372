<template>
    <v-card class="mx-auto elevation-2" max-width="344">
        <br />
        <br />
        <v-card-text class="mb-1">
            <p class="text-h4 text--primary">Log in</p>
            <div class="text=center">
                <div class="text-h6 text--primary">E-mail</div>
                <input
                    type="email"
                    required
                    v-model="email"
                    class="mx-auto elevation-2 text-h6 grey lighten-1"
                />

                <div class="text-h6 text--primary">Password</div>
                <input
                    type="password"
                    required
                    v-model="password"
                    class="mx-auto elevation-2 text-h6 grey lighten-1"
                />

                <br />
                <br />
                <v-btn color="grey darken-3" class="text-while" @click="login()">Login</v-btn>

                <v-btn color="grey lighten-1" @click="logout()">Logout</v-btn>
            </div>

            <v-divider class="mx-4"></v-divider>
            <v-btn color="green" @click="googlelogin()">Google Login</v-btn>
        </v-card-text>
    </v-card>
</template>
<script>
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import { auth } from "../plugins/firebase";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        logout() {
            //const auth = getAuth();
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    this.$route.replace("/");
                })
                .catch((error) => {
                    // An error happened.
                    console.log(error);
                });
        },
        googlelogin() {
            const provider = new GoogleAuthProvider();
            // const auth = getAuth();
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                    console.log("Google" + token);
                    console.log("Google" + user);
                })
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "" + errorMessage);
                    // The email of the user's account used.
                    //const email = error.email;
                    // The AuthCredential type that was used.
                    //const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });
        },
        login() {
            // const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("User" + user);
                    // ...

                    this.$router.replace("/");
                    //this.$router.push("/about");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "" + errorMessage);
                });
        },
    },
};
</script>
