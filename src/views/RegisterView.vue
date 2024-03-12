<script setup lang="ts">
</script>

<template>
    <div class="container">
        <form class="form">
            <p class="title">Registro </p>
            <p class="message">Crear un nuevo usuario</p>
            <label>
                <input class="input" type="text" placeholder="">
                <span>Nombre</span>
            </label>
            <label>
                <input class="input" type="email" placeholder="">
                <span>Correo</span>
            </label>
            <label>
                <input class="input" type="password" placeholder="">
                <span>Contraseña</span>
            </label>
            <label>
                <input class="input" type="password" placeholder="">
                <span>Confirmación de contraseña</span>
            </label>
            <button class="submit">Crear</button>
        </form>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: fit-content;
    padding: 1.2rem;
    border-radius: 1.2rem;
    position: relative;
    background-color: #1a1a1a;
    box-shadow: 0px 15px 60px #00FF7F;
    color: #fff;
    border: 1px solid #333;

    & label {
        position: relative;
        font-size: 1rem;

        & .input {
            background-color: #333;
            color: #fff;
            width: 100%;
            padding: 20px 05px 05px 10px;
            outline: 0;
            border: 1px solid rgba(105, 105, 105, 0.397);
            border-radius: 10px;
        }

        & .input+span {
            color: rgba(255, 0, 0, 0.692);
            font-weight: bold;
            position: absolute;
            left: 10px;
            top: 0px;
            font-size: 0.9em;
            cursor: text;
            transition: 0.3s ease;
        }

        & .input:placeholder-shown+span {
            top: 12.5px;
            font-size: 0.9em;
        }

        & .input:focus+span,
        .input:valid+span {
            color: #41B883;
            top: 0px;
            font-size: 0.7em;
            font-weight: 600;
        }
    }
}

.title {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #41B883;

    &::before {
        width: 1rem;
        height: 1rem;
    }

    &::after {
        width: 1rem;
        height: 1rem;
        animation: pulse 1s linear infinite;
    }

    &::before,
    &::after {
        position: absolute;
        content: "";
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        left: 0px;
        background-color: #41B883;
    }
}

.message {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
}

.input {
    font-size: 1.3rem;
}

.submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #41B883;

    &:hover {
        background-color: #41b88385;
    }
}

@keyframes pulse {
    from {
        transform: scale(0.9);
        opacity: 1;
    }

    to {
        transform: scale(1.8);
        opacity: 0;
    }
}
</style>