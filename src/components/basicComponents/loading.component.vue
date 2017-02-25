<template>
    <div class=loadingContainer>
        <div class="loadingBackground">
        </div>
        <div class=innerLoading>
            <span class="content">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.loadingContainer{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    .loadingBackground{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 0.5;
    }

    .innerLoading{
        right: 0;
        left: 0;
        margin: auto;
        margin-top: 70px;
        position: absolute;
        height: 80px;
        width: 150px;
        background-color: white;  

        .content{
            line-height: 70px;
            color: black;
        }          
    }
}
</style>
