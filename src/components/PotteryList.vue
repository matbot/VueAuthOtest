<template>
    <div class="pots container">
        <h2 class="subtitle is-3">
            Check out these featured works
        </h2>
        <div class="columns is-multiline">
            <div v-for="pot in pottery" :pot="pot" :key="pot.id" class="column is-one-quarter">
                <router-link :to="'/pottery/' + pot.id">
                    <PotteryCard :pot="pot" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import PotteryCard from "@/components/PotteryCard";
    export default {
        name: "PotteryList",
        components: {PotteryCard},
        data () {
            return {
                pot: {},
                pottery: [
                    {
                        id: 1,
                        name: 'Raku Vase',
                        form: 'Vase',
                        claybody: 'Raku',
                        description: 'A small Raku fired vase.',
                        featuredImage: 'https://www.mainavegalleria.com/wp-content/uploads/2017/04/Raku-Vase-061-427-e1491402768318.jpg',
                        images: [
                            'https://images.squarespace-cdn.com/content/v1/5b151ec52971149e96e2498d/1568910190576-6M4MWT6K0TS4OYMAJU6A/ke17ZwdGBToddI8pDm48kDtdvqPb9GkSlXiR1NDZH9x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQvWmYvA4kuNjGlTv4EeEWQfsCoCAIyYO7z9ZFinnFWwb4vHD5mk5cXjOUXPs31drw/IMG_2559.jpg',
                            'https://cdn11.bigcommerce.com/s-tldoyw/images/stencil/1280x1280/products/947/1236/JT8C29172355657751O__04106.1431453189.jpg?c=2',
                        ],
                        location: 'Santa Clara, CA',
                        date: '06-16-2020',
                        time: '11:30'
                    },
                    {
                        id: 2,
                        name: 'Porcelain Teapot',
                        form: 'Teapot',
                        claybody: 'Porcelain',
                        description: 'A classic porcelain teapot.',
                        featuredImage: 'https://static.zarahome.net/8/photos4/2020/V/4/1/p/2557/545/712/2557545712_1_1_3.jpg?t=1575993831193',
                        images: [
                            'https://static.zarahome.net/8/photos4/2020/V/4/1/b/2557/000/712/BH/ZH/2557000712_2_1_1.jpg?t=1575996905767',
                            'https://static.zara.net/photos///2020/V/4/1/p/2557/545/712/2/w/615/2557545712_2_3_1.jpg?ts=1576065475147',
                        ],
                        location: 'Seattle, WA',
                        date: '06-10-2020',
                        time: '13:30'
                    },
                    {
                        id: 3,
                        name: 'Raku Vase',
                        form: 'Vase',
                        claybody: 'Raku',
                        description: 'A small Raku fired vase.',
                        featuredImage: 'https://www.mainavegalleria.com/wp-content/uploads/2017/04/Raku-Vase-061-427-e1491402768318.jpg',
                        images: [
                            'https://images.squarespace-cdn.com/content/v1/5b151ec52971149e96e2498d/1568910190576-6M4MWT6K0TS4OYMAJU6A/ke17ZwdGBToddI8pDm48kDtdvqPb9GkSlXiR1NDZH9x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQvWmYvA4kuNjGlTv4EeEWQfsCoCAIyYO7z9ZFinnFWwb4vHD5mk5cXjOUXPs31drw/IMG_2559.jpg',
                            'https://cdn11.bigcommerce.com/s-tldoyw/images/stencil/1280x1280/products/947/1236/JT8C29172355657751O__04106.1431453189.jpg?c=2',
                        ],
                        location: 'Santa Clara, CA',
                        date: '06-16-2020',
                        time: '11:30'
                    },
                    {
                        id: 4,
                        name: 'Porcelain Teapot',
                        form: 'Teapot',
                        claybody: 'Porcelain',
                        description: 'A classic porcelain teapot.',
                        featuredImage: 'https://static.zarahome.net/8/photos4/2020/V/4/1/p/2557/545/712/2557545712_1_1_3.jpg?t=1575993831193',
                        images: [
                            'https://static.zarahome.net/8/photos4/2020/V/4/1/b/2557/000/712/BH/ZH/2557000712_2_1_1.jpg?t=1575996905767',
                            'https://static.zara.net/photos///2020/V/4/1/p/2557/545/712/2/w/615/2557545712_2_3_1.jpg?ts=1576065475147',
                        ],
                        location: 'Seattle, WA',
                        date: '06-10-2020',
                        time: '13:30'
                    },
                    {
                        id: 5,
                        name: 'Raku Vase',
                        form: 'Vase',
                        claybody: 'Raku',
                        description: 'A small Raku fired vase.',
                        featuredImage: 'https://www.mainavegalleria.com/wp-content/uploads/2017/04/Raku-Vase-061-427-e1491402768318.jpg',
                        images: [
                            'https://images.squarespace-cdn.com/content/v1/5b151ec52971149e96e2498d/1568910190576-6M4MWT6K0TS4OYMAJU6A/ke17ZwdGBToddI8pDm48kDtdvqPb9GkSlXiR1NDZH9x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQvWmYvA4kuNjGlTv4EeEWQfsCoCAIyYO7z9ZFinnFWwb4vHD5mk5cXjOUXPs31drw/IMG_2559.jpg',
                            'https://cdn11.bigcommerce.com/s-tldoyw/images/stencil/1280x1280/products/947/1236/JT8C29172355657751O__04106.1431453189.jpg?c=2',
                        ],
                        location: 'Santa Clara, CA',
                        date: '06-16-2020',
                        time: '11:30'
                    },
                    {
                        id: 6,
                        name: 'Porcelain Teapot',
                        form: 'Teapot',
                        claybody: 'Porcelain',
                        description: 'A classic porcelain teapot.',
                        featuredImage: 'https://static.zarahome.net/8/photos4/2020/V/4/1/p/2557/545/712/2557545712_1_1_3.jpg?t=1575993831193',
                        images: [
                            'https://static.zarahome.net/8/photos4/2020/V/4/1/b/2557/000/712/BH/ZH/2557000712_2_1_1.jpg?t=1575996905767',
                            'https://static.zara.net/photos///2020/V/4/1/p/2557/545/712/2/w/615/2557545712_2_3_1.jpg?ts=1576065475147',
                        ],
                        location: 'Seattle, WA',
                        date: '06-10-2020',
                        time: '13:30'
                    },
                    {
                        id: 7,
                        name: 'Raku Vase',
                        form: 'Vase',
                        claybody: 'Raku',
                        description: 'A small Raku fired vase.',
                        featuredImage: 'https://www.mainavegalleria.com/wp-content/uploads/2017/04/Raku-Vase-061-427-e1491402768318.jpg',
                        images: [
                            'https://images.squarespace-cdn.com/content/v1/5b151ec52971149e96e2498d/1568910190576-6M4MWT6K0TS4OYMAJU6A/ke17ZwdGBToddI8pDm48kDtdvqPb9GkSlXiR1NDZH9x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQvWmYvA4kuNjGlTv4EeEWQfsCoCAIyYO7z9ZFinnFWwb4vHD5mk5cXjOUXPs31drw/IMG_2559.jpg',
                            'https://cdn11.bigcommerce.com/s-tldoyw/images/stencil/1280x1280/products/947/1236/JT8C29172355657751O__04106.1431453189.jpg?c=2',
                        ],
                        location: 'Santa Clara, CA',
                        date: '06-16-2020',
                        time: '11:30'
                    },
                    {
                        id: 8,
                        name: 'Porcelain Teapot',
                        form: 'Teapot',
                        claybody: 'Porcelain',
                        description: 'A classic porcelain teapot.',
                        featuredImage: 'https://static.zarahome.net/8/photos4/2020/V/4/1/p/2557/545/712/2557545712_1_1_3.jpg?t=1575993831193',
                        images: [
                            'https://static.zarahome.net/8/photos4/2020/V/4/1/b/2557/000/712/BH/ZH/2557000712_2_1_1.jpg?t=1575996905767',
                            'https://static.zara.net/photos///2020/V/4/1/p/2557/545/712/2/w/615/2557545712_2_3_1.jpg?ts=1576065475147',
                        ],
                        location: 'Seattle, WA',
                        date: '06-10-2020',
                        time: '13:30'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pots {
        margin-top: 100px;
        text-align: center;
    }
</style>
