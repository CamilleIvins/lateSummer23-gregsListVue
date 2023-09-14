<template>
    <form @submit.prevent="createHouse" class="row">
        <div class="mb-3 col-3">
            <label for="bedrooms"># rooms</label>
            <input v-model="houseData.bedrooms" type="text" id="house-room" class="form-control" placeholder="bedroom #"
                minlength="1" maxlength="3" required>
        </div>
        <div class="mb-3 col-3">
            <label for="bathrooms"># bathrooms</label>
            <input v-model="houseData.bathrooms" type="text" id="house-bathroom" class="form-control"
                placeholder="bathroom #" minlength="1" maxlength="3" required>
        </div>
        <div class="mb-3 col-3">
            <label for="floors"># floors</label>
            <input v-model="houseData.levels" type="text" id="house-levels" class="form-control" placeholder="levels"
                minlength="1" maxlength="10" required>
        </div>
        <div class="mb-3 col-3">
            <label for="picture">House Photo</label>
            <input v-model="houseData.imgUrl" type="text" id="house-img" class="form-control" placeholder="picture URL"
                minlength="1" maxlength="300" required>
        </div>
        <div class="mb-3 col-3">
            <label for="house-price">Price</label>
            <input v-model="houseData.price" type="text" id="house-price" class="form-control" placeholder="price" min="1"
                required>
        </div>
        <div class="mb-3 col-3">
            <label for="house-year">Year Built</label>
            <input v-model="houseData.year" type="text" id="house-year" class="form-control" placeholder="year built"
                maxlength="4" required>
        </div>
        <div class="mb-3 col-12">
            <label for="bedrooms"></label>
            <textarea v-model="houseData.description" id="house-description" class="form-control"
                placeholder="Home description"></textarea>
        </div>
        <hr>
        <div class="mb-3 col-3">
            <button class="btn btn-primary" title="submit home listing to database">
                Submit
            </button>
        </div>
    </form>
</template>

<script>
import { useRouter } from 'vue-router';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { logger } from '../utils/Logger.js';
import { ref } from 'vue';

export default {
    setup() {
        const houseData = ref({})
        const router = useRouter()
        return {
            houseData,

            async createHouse() {
                try {
                    logger.log("new house listing", houseData.value)
                    const newHouse = await housesService.createHouse(houseData.value)
                    houseData.value = {}
                    Pop.toast("New home listed!")
                    router.push({ name: 'House Details', params: { houseId: newHouse.id } })
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }

}
</script>

<style class="scss"></style>
<!-- test build -->
<!-- https://i.pinimg.com/originals/81/7b/a2/817ba2ccb22979b5f39f7dec34baebb6.jpg -->
<!-- Quaint abode nestled in the heart of the White Mountains at Dunharrow. -->

<!-- https://cdn.theatlantic.com/thumbor/XFzD8aRLQRGfof94YFZQyfckGG4=/900x504/media/img/photo/2015/07/70-years-since-trinity-when-we-test/n15_00530011/original.gif -->
<!-- Great long-term investment property -->