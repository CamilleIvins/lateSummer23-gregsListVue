<template>
    <div class="container">


        <section class="row mt-2 g-3">
            <div class="col-12 col-md-6">

            </div>
        </section>

    </div>
</template>


<script>
// will need to manually import
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js';

export default {
    setup() {
        onMounted(() => {
            getHouses();
        });

        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            houses: computed(() => AppState.houses)
        }
    }
}
</script>

<style lang="'scss" scoped>

</style>