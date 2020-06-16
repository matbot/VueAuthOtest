<template>
    <div class="pottery-single">
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Piece Title</h1>
                    <h2 class="subtitle">Posted Date</h2>
                </div>
            </div>
        </section>
        <section class="pottery-content">
            <div class="container">
                <p class="is-size-4 description">Piece description</p>
                <p class="is-size-4">Studio Location:</p>
                <p class="is-size-4">Clay Body:</p>
                <div class="pottery-images columns is-multiline has-text-centered">
                    <div class="column is-one-third">
                        IMAGE PLACEHOLDER
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "PotterySingle"
    }
</script>

<style lang="scss" scoped>
    .pottery-single {
        text-align: left;
        margin-top: 30px;
    }
    .hero {
        margin-bottom: 70px;
    }
    .pottery-images {
        margin-top: 50px;
    }
    .description {
        margin-bottom: 30px;
    }
</style>
