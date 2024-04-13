<template>
    <div class="content_ring">
        <div class="ring">
            0xVPN
            <span class="page_load_spin"></span>
        </div>
    </div>
</template>
<style>
html {
    margin: 0;
}

body {
    margin: 0;
}

.content_ring {
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgb(29 28 62);
    z-index: 9999;
    justify-content: center;
    align-items: center;
}

.ring {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: transparent;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    text-align: center;
    /* font-family: Garet; */
    font-size: 30px;
    font-weight: 700;
    color: white;
    letter-spacing: 4px;
    /* text-transform: uppercase; */
    text-shadow: 0 0 10px white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    animation: animateText 1s linear infinite;
}

.ring:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-top: 4px solid rgb(252 187 20);
    border-right: 4px solid rgb(252 187 20);

    border-radius: 50%;
    animation: animateC 1s linear infinite;
}

.page_load_spin {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    /* box-shadow: 0 0 20px #FDC400; */
    transform-origin: left;
    animation: animate 1s linear infinite;
}

.page_load_spin:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgb(252 187 20);

    top: -4px;
    right: -6px;
    box-shadow: 0 0 12px rgb(252 187 20);
}

@keyframes animateC {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate {
    0% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(405deg);
    }
}

@keyframes animateText {
    0% {
        text-shadow: 0 0 12px white;
    }

    50% {
        text-shadow: unset;
    }

    100% {
        text-shadow: 0 0 12px white;
    }
}
</style>