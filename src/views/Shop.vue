<template>
  <v-container class="d-flex flex-wrap">
    <v-card
      v-for="(product, index) in productlist"
      :key="index"
      :loading="loading"
      class="mx-auto my-2"
      max-width="200"
    >
      <v-img :src="product.image" height="200"></v-img>
      <div class="text-center">${{ product.price }}</div>

      <v-divider class="mx-4"></v-divider>
      <v-card>
        <v-btn class="btn btn-success green" @click="addtitleShop(product)"
          >ADD<i class="fa-solid fa-cart-plus"></i
        ></v-btn>
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
          >Detail</v-btn
        >
      </v-card>
    </v-card>

    <div>
      <h3>Basket <i class="fa-brands fa-shopify"></i></h3>
      <table class="table" v-if="this.titleShop != 0">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Totle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(shopproduct, index) in titleShop" :key="index">
            <td>{{ shopproduct.id }}</td>
            <td>{{ shopproduct.title }}</td>
            <td>
              <img :src="shopproduct.image" alt="" width="60px" height="60px" />
            </td>
            <td>{{ shopproduct.price }}</td>
            <td>
              <i class="fa-solid fa-circle-minus quantity-minus"
                @click="minusQuantity(shopproduct)"></i>
              {{ shopproduct.quantity }}
              <i
                class="fa-solid fa-circle-plus quantity-plus"
                @click="plusQuantity(shopproduct)"
              ></i>
            </td>
            <td>{{ shopproduct.total }}</td>
            <td>
              <button @click="remove(shopproduct)">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <h4 btn btn-success>Total price {{Totle()}} $</h4>
        </tbody>
      </table>
      <button class="btn btn-success green" onClick="window.location.reload();">
        BUY <i class="fa-solid fa-money-check-dollar"></i>
      </button>
    </div>
    <div>
      <router-view :key="$route.path"></router-view>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      titleShop: [],
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      fire: 0,
      productlist: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },

        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },

        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },

        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        },

        {
          id: 5,
          title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        },
      ],
    };
  },
  methods: {
    addtitleShop: function (product) {
      if (product.id == 1) {
        this.one += 1;
        if (this.one <= 1) {
          //รอบเดียว
          this.pushtable(product);
        } else {
          //หลายรอบ
          var one1 = this.fineID(product);
          this.titleShop[one1].quantity += 1;
          this.titleShop[one1].total =
            this.titleShop[one1].quantity * this.titleShop[one1].price;
        }
      }
      if (product.id == 2) {
        this.two += 1;
        if (this.two <= 1) {
          //รอบเดียว
          this.pushtable(product);
        } else {
          //หลายรอบ
          var two2 = this.fineID(product);
          this.titleShop[two2].quantity += 1;
          this.titleShop[two2].total =
            this.titleShop[two2].quantity * this.titleShop[two2].price;
        }
      }
      if (product.id == 3) {
        this.three += 1;
        if (this.three <= 1) {
          //รอบเดียว
          this.pushtable(product);
        } else {
          //หลายรอบ
          var three3 = this.fineID(product);
          this.titleShop[three3].quantity += 1;
          this.titleShop[three3].total =
            this.titleShop[three3].quantity * this.titleShop[three3].price;
        }
      }
      if (product.id == 4) {
        this.four += 1;
        if (this.four <= 1) {
          //รอบเดียว
          this.pushtable(product);
        } else {
          //หลายรอบ
          var four4 = this.fineID(product);
          this.titleShop[four4].quantity += 1;
          this.titleShop[four4].total =
            this.titleShop[four4].quantity * this.titleShop[four4].price;
        }
      }
      if (product.id == 5) {
        this.fire += 1;
        if (this.fire <= 1) {
          //รอบเดียว
          this.pushtable(product);
        } else {
          //หลายรอบ
          var fire5 = this.fineID(product);
          this.titleShop[fire5].quantity += 1;
          this.titleShop[fire5].total =
            this.titleShop[fire5].quantity * this.titleShop[fire5].price;
        }
      }
    },
    pushtable(product) {
      this.titleShop.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        total: product.price,
      });
    },
    fineID: function (product) {
      for (var i = 0; i < this.titleShop.length; i++) {
        if (this.titleShop[i].id == product.id) {
          return i;
        }
      }
      return -1;
    },
    minusQuantity: function (shopproduct) {
      shopproduct.quantity -= 1;
      if (shopproduct.quantity <= 1) {
        shopproduct.quantity = 1;
      }
      shopproduct.total = shopproduct.price * shopproduct.quantity;
    },
    plusQuantity: function (shopproduct) {
      shopproduct.quantity += 1;
      shopproduct.total = shopproduct.price * shopproduct.quantity;
    },
    remove(shopproduct) {
      if (confirm("แน่ใจหรือไม่ว่าต้องการลบ")) {
        var index = this.titleShop.indexOf(shopproduct);
        this.titleShop.splice(index, 1);
        if (shopproduct.id == 1) {
          this.one = 0;
        }
        if (shopproduct.id == 1) {
          this.two = 0;
        }
        if (shopproduct.id == 1) {
          this.three = 0;
        }
        if (shopproduct.id == 1) {
          this.four = 0;
        }
        if (shopproduct.id == 1) {
          this.fire = 0;
        }
      }
    },
    Totle: function () {
      var sum = 0;
      this.titleShop.forEach(function (product) {
        sum += product.total;
      });
      return sum;
    },
  },
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