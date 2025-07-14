<template>
    <div class="q-pa-md">

        <!-- Hero section -->
        <section class="text-center q-mb-xl">
            <h1 class="text-h4 text-primary">Welcome to ElectroStore</h1>
            <p class="text-subtitle1 q-mt-sm text-grey-8">
                Your trusted electronics store for modern gadgets and devices.
            </p>
        </section>

        <!-- Carousel -->
        <!-- Carousel -->
        <q-carousel v-model="slide" animated height="500px" class="q-mb-xl shadow-2 rounded-borders"
            control-color="primary" arrows swipeable infinite>
            <q-carousel-slide v-for="(img, index) in carouselImages" :key="index" :name="(index + 1).toString()"
                class="flex flex-center bg-grey-2">
                <q-img :src="img" alt="Carousel Image" fit="cover" class="full-width full-height"
                    spinner-color="primary" />
            </q-carousel-slide>
        </q-carousel>


        <!-- Featured Products -->
        <section>
            <h2 class="text-h5 text-primary text-center q-mb-md">Featured Products</h2>
            <div class="row q-col-gutter-md q-px-sm">
                <div v-for="(img, index) in carouselImages" :key="index" class="col-xs-12 col-sm-6 col-md-4">
                    <q-card class="q-hoverable">
                        <q-img :src="img" alt="Product Image" fit="cover" style="height: 200px" class="rounded-borders"
                            spinner-color="primary" />

                        <q-card-section>
                            <div class="text-h6">Product {{ index + 1 }}</div>
                            <div class="text-caption text-grey">
                                This is a short description of the product.
                            </div>
                        </q-card-section>
                        <q-card-actions align="right">
                            <q-btn color="primary" flat label="View" />
                            <q-btn color="secondary" flat label="Buy" />
                        </q-card-actions>
                    </q-card>
                </div>
            </div>
        </section>


    </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref('1')
const carouselImages = [
    '/p1.jpg',
    '/p2.jpg',
    '/p3.jpg'
]
</script>
