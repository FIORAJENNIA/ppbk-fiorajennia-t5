<template>
  <civ class="q-pa-md">
    <h2 class="text-h5 text-primary text-center q-mb-lg">All Products</h2>

    <div class="row q-col-gutter-md">
      <div v-for="n in 6" :key="n" class="col-xs-12 col-sm-4">
        <q-card class="q-mb-md">
          <q-img src="" alt="Product Image" ratio="16/9" />
          <q-card-section>
            <div class="text-h6">Product {{ n }}</div>
            <div class="text-caption">Lorem ipsum dolor sit amet.</div>
            <div class="text-bold text-primary q-mt-sm">Rp {{ n }}.000.000</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </civ>
</template>
