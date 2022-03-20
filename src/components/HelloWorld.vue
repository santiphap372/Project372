<template>
  <v-container>
    <v-carousel hide-delimiters>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
                {
                    src: 'https://file.chobrod.com/2019/01/13/LnbzF9To/561000012560101-0ff2.jpeg',
                },
                {
                    src: 'https://file.chobrod.com/2019/01/13/LnbzF9To/47689353-2150256811693359-9102612142200193024-n-19bf.jpg',
                },
                {
                    src: 'https://file.chobrod.com/2019/01/13/LnbzF9To/tonka-gallery-image-3-1132x638-220317-7359.png',
                },
                {
                    src: 'https://file.chobrod.com/2019/01/13/LnbzF9To/48426721-2173307472721626-8938293436553887744-n-7a6e.jpg',
                },
                {
                    src: 'https://file.chobrod.com/2019/01/13/LnbzF9To/off-road-2-4ca8.jpg',
                },
            ],
    
  }),
};
</script>
