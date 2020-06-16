<template>
    <div class="example-component">
        <h1>The Example Component</h1>
        <ChildComponent/>
    </div>
</template>

<script>
    import ChildComponent from "@/components/child";
    export default {
        name: "ExampleComponent",
        components: {
            ChildComponent
        }
    }
</script>

<style lang="scss" scoped>
    .example-component {
        text-align: center;
    }
</style>
