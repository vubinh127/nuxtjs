<template>
    <div>
        <h1>Your events is {{ $route.params.id }} now</h1>
    </div>
</template>

<script >

export default {
    validate(context) {
        // eslint-disable-next-line no-console
        console.log(context);

        return /^[0-9]{9-12}$/.test(context.params.id)
    }
}

</script>
