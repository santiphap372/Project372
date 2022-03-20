<template>
    <v-container class="d-flex flex-wrap">
        <v-card
            v-for="(product, index) in productlist"
            :key="index"
            class="mx-auto my-2"
            max-width="200"
        >
            <v-img :src="product.image" height="300"></v-img>
            <div class="text-center">${{ product.price }}</div>

            <v-card>
                <v-btn
                    class="blue"
                    :to="{
                        name: 'detail',
                        params: {
                            id: product.id,
                            title: product.title,
                            description: product.description,
                            price: product.price,
                        },
                    }"
                    @click="addPro(product)"
                >ADD</v-btn>
            </v-card>
        </v-card>
        <v-card>
            <div class="darken-1">
                <router-view :key="$route.path"></router-view>
            </div>
        </v-card>
        
        
        <div>
            <button class="btn btn-success green" @click="conncectNew()">
                BUY
                <i class="fa-solid fa-money-check-dollar"></i>
                
            </button>
        </div>
    </v-container>
</template>

<script>

import { db, auth } from "../plugins/firebase";

import { onAuthStateChanged } from "firebase/auth";

import { doc, getDocs, collection, updateDoc, arrayUnion } from "firebase/firestore";
export default {
    data() {
        return {
            csDoc: [],
            titleShop: [],
            tdescription: [],
            productlist: [
                {
                    id: 1,
                    title: "TM1",
                    price: 1000000,
                    description:
                        "รถ Jib สีดำ 2,000 แรงม้า",
                    image: "https://file.chobrod.com/2019/01/13/LnbzF9To/561000012560101-0ff2.jpeg",
                },

                {
                    id: 2,
                    title: "TM2 ",
                    price: 2000000,
                    description:
                        "รถกระบะ สีแดง 3,000 แรงม้า",
                    image:
                        "https://file.chobrod.com/2019/01/13/LnbzF9To/47689353-2150256811693359-9102612142200193024-n-19bf.jpg",
                },

                {
                    id: 3,
                    title: "TM3",
                    price: 3000000,
                    description:
                        "รถกระบะ สีเหลืง 2,000 แรงม้า",
 
                    image: "https://file.chobrod.com/2019/01/13/LnbzF9To/tonka-gallery-image-3-1132x638-220317-7359.png",
                },

                {
                    id: 4,
                    title: "TM4",
                    price: 4000000,
                    description:
                        "รถกระบะ สีแดงมีลายขาว 2,500 แรงม้า",
                  
                    image: "https://file.chobrod.com/2019/01/13/LnbzF9To/48426721-2173307472721626-8938293436553887744-n-7a6e.jpg",
                },

                {
                    id: 5,
                    title:
                        "TM5",
                    price: 5000000,
                    description:
                        "รถกระบะ สีดำด้าน 2,000 แรงม้า",
                   
                    image:
                        "https://file.chobrod.com/2019/01/13/LnbzF9To/off-road-2-4ca8.jpg",
                },
            ],
            uid: "",
            allPro: [],
            all: []
        };
    },
    mounted() {
        this.checkLogin();
        this.readData()
    },
    methods: {

        async conncectNew() {
            console.log(this.allPro);

            const washingtonRef = doc(db, "userBuy", this.uid);
            console.log(this.all.id);

            // Atomically add a new region to the "regions" array field.
            await updateDoc(washingtonRef, {
                regions: arrayUnion(this.all)
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
        addPro(i) {
            //this.readData()
            this.all = i
        },

        async readData() {
            console.log("Show Data...");
            const querySnapshot = await getDocs(collection(db, "userBuy"));
            querySnapshot.forEach((doc) => {
                const docAll = doc.data();
                docAll.id = doc.id;
                this.allPro.push(docAll);
            });
        },
    }
};
</script>
 
<style scoped>
.quantity-minus {
    cursor: pointer;
    margin-right: 20px;
}
.quantity-plus {
    cursor: pointer;
    margin-left: 20px;
}
</style>>