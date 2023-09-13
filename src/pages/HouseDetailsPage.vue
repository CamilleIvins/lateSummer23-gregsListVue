<template>
    <div class="container">

    </div>
</template>

<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { useRoute, useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';

export default {
    setup() {
        return {}
    }
}
</script>

<style class="scss" scoped></style>