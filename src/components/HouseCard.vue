<template>
    <router-link :to="{ name: 'House Details', params: { houseId: house.id } }">
        <div class="card home-card bg-light lighten-2 eleveation-2">
            <section class="row">
                <div class="col-6"><img class="home-img" :src="house.imgUrl" alt=""></div>
                <div class="col-6">
                    Bd:{{ house.bedrooms }} | Ba:{{ house.bathrooms }} | ${{ house.price }}
                    <p>{{ house.description }}</p>
                </div>
            </section>
        </div>
    </router-link>
</template>

<script>
import { House } from '../models/House.js';



export default {
    props: { house: { type: House, required: true } },

    setup() {
        return {}
    }
}

</script>


<style lang="scss" scoped>
.home-card {
    height: 20vh;
    overflow: hidden;
    transition: all 0.1s ease;
    cursor: pointer;

    &:hover {
        transition: all .2s ease;
        transform: scale(1.05);
    }

    .home-img {
        height: 20vh;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>