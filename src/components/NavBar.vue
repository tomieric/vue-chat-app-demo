<template>
<div>
    <nav>
        <div class="nav-left-section">
            <!-- <img class="logo" src="../assets/logo.svg"> -->
            <span id="title">Chat</span>
        </div>
        <div class="nav-right-section">
            <span class="welcome-message">Welcome <b>{{ name }}</b> </span>&nbsp;
            <img v-bind:src="avatar" class="avatar">
        </div>
    </nav>
</div>
</template>
<script>
export default {
    props: ["name", "avatar"]
};
</script>
