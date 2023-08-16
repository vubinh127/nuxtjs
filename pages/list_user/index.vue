<template>
    <section class="text-center">
        <h1 class="font-semibold text-blue-600/100 dark:text-blue-500/100 text-7xl ">List: {{ posts.length }} NBA Player 2023</h1>

        <div class="container mx-auto py-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="px-6 py-3" scope="col">ID</th>
                        <th class="px-6 py-3" scope="col">Player name</th>
                        <th class="px-6 py-3" scope="col">Age</th>
                        <th class="px-6 py-3" scope="col">Game</th>
                        <th class="px-6 py-3" scope="col">Game Started</th>
                        <th class="px-6 py-3" scope="col">Minutes Played</th>
                        <th class="px-6 py-3" scope="col">Ft Percent</th>
                        <th class="px-6 py-3" scope="col">Field Goal</th>
                        <th class="px-6 py-3" scope="col">Team</th>
                        <th class="px-6 py-3" scope="col">Season</th>
                    </tr>
                </thead>
                <tbody v-if="posts && posts.length">
                    <tr v-for="post of posts" :key="post" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">{{ post.id }}</td>
                        <td class="px-6 py-4">{{ post.player_name }}</td>
                        <td class="px-6 py-4">{{ post.age }}</td>
                        <td class="px-6 py-4">{{ post.games }}</td>
                        <td class="px-6 py-4">{{ post.games_started }}</td>
                        <td class="px-6 py-4">{{ post.minutes_played }}</td>
                        <td class="px-6 py-4">{{ post.ft_percent }}</td>
                        <td class="px-6 py-4">{{ post.field_goals }}</td>
                        <td class="px-6 py-4">{{ post.team }}</td>
                        <td class="px-6 py-4">{{ post.season }}</td>
                    </tr>
                </tbody>
                <tbody v-if="errors && errors.length">
                    <tr v-for="error of errors" :key="error.id">
                        {{ error.message }}
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: [],
            errors: [],
            message: '',
        }
    },

    // lấy dữ liệu khi component được tạo thành công
    created() {
        axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/playoffs/2023/`)
            .then(response => {
                this.posts = response.data.results
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}

definePageMeta({
    middleware: "auth",
})

</script>