<template>
    <div class="pots container">
        <h2 class="subtitle is-3">
            Check out these featured works
        </h2>
        <div class="columns is-multiline">
            <div class="column is-one-quarter">
                <PotteryCard />
            </div>
            <div class="column is-one-quarter">
                <PotteryCard />
            </div>
            <div class="column is-one-quarter">
                <PotteryCard />
            </div>
            <div class="column is-one-quarter">
                <PotteryCard />
            </div>
            <div class="column is-one-quarter">
                <PotteryCard />
            </div>
        </div>
    </div>
</template>

<script>
    import PotteryCard from "@/components/PotteryCard";
    export default {
        name: "PotteryList",
        components: {PotteryCard}
    }
</script>

<style lang="scss" scoped>
    .pots {
        margin-top: 100px;
        text-align: center;
    }
</style>
