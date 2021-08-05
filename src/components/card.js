customElements.define('my-card',
    class extends HTMLElement {
        constructor() {
            super();

            const template = document.getElementById('my-card');
            const templateContent = template.content;

            this.attachShadow({ mode: 'open' }).appendChild(
                templateContent.cloneNode(true)
            );
        }
    }
);

const card = `<template id="my-card">
<style>
    div {
        color: #333;
        background-color: #f4f4f4;
        padding: 5px;
    }
</style>
<div>
    <slot name="my-card-txt"></slot>
</div>
</template>
`

export default card