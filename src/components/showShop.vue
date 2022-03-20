<template>
    <div>
        <v-simple-table dark v-for="(item, index) in listPro" :key="index">
            <template v-slot:default v-if="uid == item.id">
                <thead>
                    <tr>
                        <th class="text-left">title</th>
                        <th class="text-left">price</th>
                        <th class="text-left">image</th>
                        <th class="text-left">description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item2, index) in item.regions" :key="index">
                        <td>{{ item2.title }}</td>
                        <td>{{ item2.price }}</td>
                        <td>
                            <v-img :src="item2.image" width="100" height="100"></v-img>
                        </td>
                        <td>{{ item2.description }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import { db, auth } from "../plugins/firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
export default {
    data() {
        return {
            listPro: [],
            long: [
                {
                    "tid": [
                        {
                            "id": 1,
                            "image": "https://file.chobrod.com/2019/01/13/LnbzF9To/561000012560101-0ff2.jpeg",
                            "price": 109.95,
                            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                        }
                    ],
                    "id": "2609nPrjW8cmXAe4778HcDgJH4p2"
                }
            ],
            uid: ""
        }
    },
    mounted() {
        this.readData(),
            this.checkLogin()
    },
    methods: {
        async readData() {
            console.log("Show Data...");

            this.listPro.splice(0, this.listPro.length);
            const querySnapshot = await getDocs(collection(db, "userBuy"));
            querySnapshot.forEach((doc) => {
                const docAll = doc.data();
                docAll.id = doc.id;
                this.listPro.push(docAll);
            });
        },
        async checkLogin() {
            onAuthStateChanged(auth, (user) => {
                if (user) {

                    const uid = user.uid;
                    console.log(uid);
                    this.uid = uid;



                    console.log("Hi ==", this.uid);



                }
            });

        },
    }
}
</script>

<style>
</style>