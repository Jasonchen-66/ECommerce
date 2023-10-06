<template>
    <div class="column is-3">
        <div class="box">
            <figure class="image mb-4">
                <img v-bind:src="product.get_thumbnail">
            </figure>

            <h3 class="is-size-4">{{ product.name }}</h3>
            <p class="is-size-6 has-text-grey">${{ product.price }}</p>

            <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">View details</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object
    }
}
</script>

<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
  height: 200px; /* Or any desired fixed height */
  width: 100%;
  overflow: hidden; /* This ensures images larger than the container do not spill out */
  display: flex; /* Ensures the child elements align correctly */
  justify-content: center; /* Centers the child horizontally */
  align-items: center; /* Centers the child vertically */
}

.image img {
  width: 100%; /* Makes sure the image takes the full width of the container */
  height: 100%; /* Makes sure the image takes the full height of the container */
  object-fit: cover; /* Ensures the image covers the entire container without distortion */
}
</style>
