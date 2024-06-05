<template>
    <div class="container">
        <div>
            <img class="logo" src="../assets/Happy Indian (1).jpg" />
            <h1 class="heading">Sign Up</h1> <!-- Added class "heading" -->
        </div>
        <div class="register">
            <input type="text" placeholder="Enter name" class="input-field" />
            <input type="text" placeholder="Enter Email" class="input-field" />
            <input type="password" placeholder="Enter Password" class="input-field" />
            <button>Sign Up</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
    width: 200px;
    /* Increased width */
    height: auto;
    /* Maintain aspect ratio */
    margin-bottom: -30px;
    /* Decreased gap between logo and heading */
}

.heading {
    margin-bottom: 10px;
    /* Decreased gap between logo and heading */
    text-align: center;
}

.register {
    text-align: center;
    margin-top: 10px;
    margin-left: 20px;
    /* Retained gap between heading and register section */
}

.input-field {
    /* Increase size of placeholders */
    width: 300px;
    height: 40px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #DF8426;
    display: block;
    /* Display input fields as block elements */
}

.register button {
    /* Retained original dimensions */
    width: 320px;
    height: 40px;
    border: 1px solid #DF8426;
    background: #DF8426;
    color: #fff;
    cursor: pointer;
}
</style>
