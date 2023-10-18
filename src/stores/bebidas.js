import { defineStore } from "pinia";
import { ref,onMounted } from "vue";
import { Axios } from "axios";

export const useBebidasStore = defineStore('bebidas',()=>{
    const categorias = ref([]);
    onMounted(async ()=>{
        const data = await Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        categorias.value = data.data.drinks;
    });

    return {
        categorias
    }
});