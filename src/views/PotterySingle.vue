<template>
    <div class="pottery-single">
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ pot.name }}</h1>
                    <h2 class="subtitle">{{ pot.date }}</h2>
                </div>
            </div>
        </section>
        <section class="pottery-content">
            <div class="container">
                <p class="is-size-4 description">{{ pot.description }}</p>
                <p class="is-size-4">{{ pot.location }}</p>
                <p class="is-size-4">{{ pot.claybody }}</p>
                <div class="pottery-images columns is-multiline has-text-centered">
                    <div v-for="image in pot.images" :key="image.id" class="column is-one-third">
                        <img :src="image" :alt="pot.name"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "PotterySingle",
        data () {
            return {
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
                ],
                pot: {}
            }
        },
        created() {
            const ID = Number(this.$route.params.id);
            const pot = this.pottery.find(pot => pot.id === ID);
            this.pot = pot;
        }
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
