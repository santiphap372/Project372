<template>
    <div>
        <br />
        <br />
        <v-card class="mx-auto elevation-2" max-width="344">
            <v-card-text class="mb-1">
                <p class="text-h4 text--primary">Sign in</p>
                <div class="text-h6 text--primary">E-mail</div>

                <input
                    v-model="email"
                    type="text"
                    class="mx-auto elevation-2 text-h6 grey lighten-1"
                />
                <div class="text-h6 text--primary">Password</div>
                <input
                    v-model="password"
                    type="text"
                    class="mx-auto elevation-2 text-h6 grey lighten-1"
                />
                <div class="text-h6 text--primary">Confirm password</div>
                <input
                    v-model="cfPassword"
                    type="text"
                    class="mx-auto elevation-2 text-h6 grey lighten-1"
                />
                <br />
                <br />
                <v-btn
                    depressed
                    color="grey darken-2"
                    class="mx-auto elevation-2"
                    @click="registerNew"
                >Confirm</v-btn>
                <br />
                <br />
                <div class="text-h6 text--primary">ชื่อ</div>
                <input
                    v-model="name1"
                    type="text"
                    class="mx-auto elevation-2 text-h6 grey lighten-1"
                />
                <div class="text-h6 text--primary">นามสกุล</div>
                <input
                    v-model="name2"
                    type="text"
                    class="mx-auto elevation-2 text-h6 grey lighten-1"
                />
                <br />
                <br />
                <v-btn
                    depressed
                    color="grey darken-2"
                    class="mx-auto elevation-2"
                    @click="conncectNew()"
                >sign in</v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth, db } from "../plugins/firebase";
import { doc, setDoc } from "firebase/firestore";
export default {
    data() {
        return {
            email: "",
            password: "",
            cfPassword: "",
            uid: "",
            name1: "",
            name2: "",
        }
    },
    methods: {
        async registerNew() {

            if (this.password === this.cfPassword) {
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        this.uid = user.uid;
                        console.log("Add new user...", this.uid);
                    })
                    .catch((error) => {
                        //const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage);
                    });
            } else {
                console.log("password wrong");
            }
        },
        async conncectNew() {
            try {
                const docData = {
                    name: this.name1,
                    Sname: this.name2,
                };
                await setDoc(doc(db, "Shop", this.uid), docData);
                console.log("Data Updated...");

                //this.$router.push("/home");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            try {
                const docData = {
                    t: 1,
                };
                await setDoc(doc(db, "userBuy", this.uid), docData);
                console.log("Data Updated...");

                this.$router.push("/");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },
    }
}
</script>

<style>
</style>